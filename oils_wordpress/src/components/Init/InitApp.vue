<template>
    <div></div>
</template>

<script>
import moment from 'moment'
import app_init from '../../common/es/app_init/index'
    export default {
        props: { chronu_id: { type: String } },
        data() {
            return {
                user: null,
                chronu: '',
                finished: false,

                relation_s: '',
                relation_e: '',

                results: [ ]
            }
        },
        computed: {
            user_backend() { return this.$store.state.user_backend },
            token() { return this.$store.state.token }
        },
        methods: {
            valuation(chronu) {
                if (chronu) { this.chronu = chronu } else { this.chronu = this.$store.state.chronus.id }
                this.user = this.user_backend
            },
            async init() {
                
                this.finished = false
                let res_sponser, res_enroller
            
                if (this.user) {

                    await this.saving(null, null, [ ], [ ], [ ])
                    
                    let user_s = await this.userLoading('SPONSER')
                    let user_e = await this.userLoading('ENROLLER')

                    let orders = await this.fetchingOrders()
                    
                    // 清理数据
                    app_init.user_with_orders(user_s, orders, this.buildData)
                    app_init.user_with_orders(user_e, orders, this.buildData)
                    
                    // 制作树形
                    res_sponser = await app_init.rolling(user_s, this.user.member_code, 'SPONSER' )
                    res_enroller = await app_init.rolling(user_e, this.user.member_code, 'ENROLLER' )

                    // 搜集 Collect
                    const coll = await app_init.collection(user_s, user_e)

                    // 保存数据
                    await this.saving(user_s, user_e, res_sponser, res_enroller, coll)
                    
                    this.finished = true
                }

                this.$emit('finished_Father', this.finished)
            },
            // 清洗 小数点
            clearFixed(bonu) {
                /*
                bonu.DPV = bonu.DPV.toFixed(2)
                bonu.MPV = bonu.MPV.toFixed(2)

                bonu.OPV = bonu.OPV.toFixed(2)
                bonu.FPV = bonu.FPV.toFixed(2)
                bonu.active_branch_payout = bonu.active_branch_payout.toFixed(2)

                bonu.DPV = Number.parseInt(bonu.DPV.toFixed(2))
                bonu.MPV = Number.parseInt(bonu.MPV.toFixed(2))

                bonu.OPV = Number.parseInt(bonu.OPV.toFixed(2))
                bonu.FPV = Number.parseInt(bonu.FPV.toFixed(2))
                bonu.active_branch_payout = Number.parseInt(bonu.active_branch_payout.toFixed(2))
                */
                return bonu

            },
            // 清洗数据
            buildData(user) {
                let named, star, bonu
                if (user.bonuses && user.bonuses.length > 0) {
                    for (let b of user.bonuses) {
                        if (b.time_period == this.chronu) {
                            bonu = b; break
                        }
                    }
                } 
                
                if (!bonu) {
                    bonu = app_init.def.bonu_def(this.chronu)
                }
                user.bonu_period = this.clearFixed(bonu)

                if (bonu.Rank > 5 ) {
                    named = app_init.conf.NAMESPACE.LEADER
                    star = (bonu.Rank - 5)
                } else {
                    named = app_init.conf.NAMESPACE.SIMPLER
                    star = bonu.Rank
                }

                user.vip = {
                    name: named,
                    star,
                    code: named + '_' + star
                }
                user.vip_next = app_init.vip_view.vip_next_simpler(named, star)
            },
            
            // 保存数据
            async saving(_s, _e, _s_tree, _e_tree, coll) {
                
                await this.$store.commit('saveSponsor', _s)
                await this.$store.commit('saveEnroller', _e)
                await this.$store.commit('saveCollection', coll)
                await this.$store.commit('saveTreeSponsor', _s_tree)
                await this.$store.commit('saveTreeEnroller', _e_tree)
                await this.$store.commit('saveResults', this.results)
            },

            async judgeShareType(_s_tree) {
                let share_type = 0

                if (_s_tree[0]) {
                    const rank = _s_tree[0].bonu_period.Rank
                    if (rank > this.conf.RANK_LEAD) {

                        share_type = rank < this.conf.RANK_DEVELOP ? 1 : 2
                    }
                    if (!this.$store.state.is_browser) { share_type = 0 }
                }

                await this.$store.commit('saveShareType', share_type)
            },
            
            // Orders 拉取
            async fetchingOrders() {
                return await this.conn.get(
                    this.api.orders,
                    this.token,
                    {
                        'time_period': this.chronu,
                        '_limit': 999
                    }
                )
            },

            // 拉取 下线用户
            _condition() {
                let tim = moment(this.$store.state.chronus.end)
                tim = tim ? tim.format('yyyy-MM-DD') : this.$store.state.chronus.end
                tim = tim ? tim.substring(0, 10) : tim

                return {
                    '_where[registered_date_lte]': tim + ' 23:59:59',
                    '_limit': 999
                }
            },
            async userLoading(mode = 'SPONSER') {
                const condition = this._condition()
                if (mode == 'SPONSER') {
                    condition['_where[relation_index_sponsor_contains]'] = this.user.relation_index_sponsor
                } else {
                    condition['_where[relation_index_enroller_contains]'] = this.user.relation_index_enroller
                }

                const users = await this.conn.get(
                    this.api.users,
                    this.token,
                    condition
                )

                return await this.serialUser(users, mode)
            },

            // 序列化用户
            _clearUser(u) {
                delete u.role
                delete u.enrolled
                delete u.sponsored
                delete u.sponsor_line
                delete u.enroller_line
                delete u.lp_wallet
                delete u.created_at
                delete u.updated_at
                delete u.registered_date
                delete u.bonus_calculations
                return u
            },
            serialUser(users, mode) {
                return new Promise( (rej, rev) => {

                    let res = [ ]
                    let chr = /^[0-9]*$/

                    if (mode == 'SPONSER') {
                        for(let i= 0; i< users.length; i++ ) {
                            const u = users[i]

                            let inner = true
                            if ( chr.test(u.sponsor_id) ) {
                                u.register_date_list = this.view.ser_timed_list( u.registered_date )
                            } else {
                                inner = false
                            }
                            
                            if (!(u.relation_index_sponsor + '_').startsWith(
                                (this.user.relation_index_sponsor + '_')
                            )) { inner = false }

                            if (inner) { res.push(this._clearUser(u)) }
                        }
                    } 
                    else if (mode == 'ENROLLER') {
                        for(let i= 0; i< users.length; i++ ) {
                            const u = users[i]

                            let inner = true
                            if ( chr.test(u.enroller_id) ) {
                                u.register_date_list = this.view.ser_timed_list( u.registered_date )
                            } else {
                                inner = false
                            }

                            if (!(u.relation_index_enroller + '_').startsWith(
                                (this.user.relation_index_enroller + '_')
                            )) { inner = false }

                            if (inner) { res.push(this._clearUser(u)) }
                        }
                    }

                    this.results = res
                    rej( res )
                })
            }

        }
    }
</script>

<style lang="sass" scoped>

</style>