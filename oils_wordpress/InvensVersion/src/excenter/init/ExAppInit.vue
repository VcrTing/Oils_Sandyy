<template>
    <div>
        <net-user-relation ref="retREF"></net-user-relation>
    </div>
</template>

<script>
import NetUserRelation from '../../extra/net/NetUser/NetUserRelation.vue'
import moment from 'moment'
    export default {
  components: { NetUserRelation },
        data() {
            return {
                modes: [ 'sponsor', 'enroller' ]
            }
        },
        computed: { 
            timed() { return this.$store.state.chronus },
            user() { return this.$store.state.user_backend } },
        methods: {
            _condition() {
                let timed = this.timed.end
                timed = timed ? moment(timed).format('yyyy-MM') : ''
                return [ this.user.member_code, timed ]
            },

            async init() {
                if (this.user) {
                    this.modes.map(async e => {
                        const res = await this.$refs.retREF[ e ]( ...this._condition() )
                        if (res) { await this.saving(e, ...res) }
                    })
                }
            },

            // 保存到 vuex
            async saving(mode, tree, detail) {
                if (mode == 'sponsor') {
                    await this.$store.commit('save', [ 'user_s_tree', tree ])
                    await this.$store.commit('save', [ 'user_s_detail', await this._clean(detail) ])
                } else {
                    await this.$store.commit('save', [ 'user_e_tree', tree ])
                    await this.$store.commit('save', [ 'user_e_detail', await this._clean(detail) ])
                }
            },

            // 清洗 用户数据
            _clean(detail = { }) {
                return new Promise( (rej, rev) => {
                    let u = null
                    for( let k in detail) { 
                        // 清洗数据
                        u = this.bonu.switch_user_period( this.bonu.clean_user( detail[ k ] ) )
                        // 获取 VIP
                        detail[ k ] = this.bonu.user_vip_and_next_vip(u)
                    }
                    rej(detail)
                })
            },
        }
    }
</script>

<style lang="sass"></style>