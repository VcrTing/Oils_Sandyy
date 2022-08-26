<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                admin: false,

                share: 0,

                one: [ ],
                group: [ ]
            }
        },
        async mounted() {
            this.$emit('menu_Father')
        },
        methods: {

            // 會員調整
            _member_change() {
                return new Promise((rec, rej) => {
                    let res = { icon: 'mdi-cog-outline', title: 'Admin 功能列表', link: null, order: -1, active: false,
                        children: [
                            //
                            { icon: 'mdi-certificate', title: '獎金報表 (Admin 視角)', link: 'account/statement' },

                            { icon: 'mdi-vector-square', title: '管理獎金 (Admin 視角)', link: 'bonus/management_info_admin' },
                            { icon: 'mdi-chart-line', title: '發展獎金 (Admin 視角)', link: 'bonus/development_info_admin' },
                            
                            { icon: 'mdi-alarm-panel', title: '獎金月結單', link: 'user/pma2' },
                            {
                                icon: 'mdi-card-account-details-outline', title: '個人資料', link: 'pw_user/myself', order: 99, active: false, 
                            },

                            //
                            
                            { icon: 'mdi-database-settings-outline', title: '產品庫存', link: 'buys/inventory' },
                            { icon: 'mdi-database-cog-outline', title: '庫存操作記錄', link: 'log/stocks' },

                            // 
                            { icon: 'mdi-account-group-outline', title: '用戶列表', link: 'pw_user/list_of_all' },

                            //
                            { icon: 'mdi-clipboard-account', title: 'LP 資料變更記錄', link: 'member_operate/lplevel_msg_change' },
                            { icon: 'mdi-clipboard-plus-outline', title: '增加 LP 積分', link: 'member_operate/lp_plus' },
                            { icon: 'mdi-account-arrow-up-outline', title: '更改 LP 等級', link: 'member_operate/level_change' },
                            { icon: 'mdi-account-sync-outline', title: '重啟 LP 資格', link: 'member_operate/reload_qualify' },

                            //
                            { icon: 'mdi-cash-plus', title: '用戶資金操作', link: 'wallet/by-admin' },
                            { icon: 'mdi-cash-multiple', title: '用戶資金操作記錄 ', link: 'wallet/log-admin' },
                        ]
                    }
                    if (this.conf.TEST) {
                        res.children.push(...[

                            //
                            { icon: 'mdi-cube', title: '產品列表', link: 'buys/products' },

                            // 
                            { icon: 'mdi-cog-transfer-outline', title: '轉賬審核', link: 'loyalty/transfer_audit' },
                        ])
                    }
                    if (this.admin) { this.group.push(res) }
                    rec(true)
                })
            },

            async _build() {

                await this._buy_record()
                await this._bonu_statement()

                await this._leader_share()

                await this._point_wallet()

                await this._member_change()

                await this._user_detaii()

                await this.$store.commit('saveShareType', this.share)
            },
            // 積分與錢包
            _point_wallet() {
                return new Promise((rec, rej) => {
                    let res = { icon: 'mdi-account-cash-outline', title: '我的積分', link: null, order: 6, active: false,
                        children: [
                            { icon: 'mdi-account-heart-outline', title: this.$t('MENU.loyalty_record'), link: 'loyalty/loyalty' },
                        ]
                    }

                    // if (this.admin) {
                        // if (this.conf.TEST) {
                            res.children.push(...[
                                { icon: 'mdi-wallet-outline', title: '電子錢包 (eWallet)', link: 'wallet/me' },
                                { icon: 'mdi-cash-fast', title: '轉賬', link: 'loyalty/transfer_money' },
                            ])
                        // }
                    // }
                    this.group.push(res)
                    rec(true)
                } )
            },

            // 購買記錄
            _buy_record() {
                return new Promise((rec, rej) => {
                    let res = { icon: 'mdi-clipboard-multiple-outline', title: this.$t('MENU.buy_record'), link: 'buys/records' }
                    /* 
                    if (this.admin) {
                        res = { icon: 'mdi-cube-outline', title: '產品記錄', link: null, order: 1,
                            children: [ { icon: 'mdi-clipboard-multiple-outline', title: this.$t('MENU.buy_record'), link: 'buys/records' } ]
                        } // this.group.push(res)
                    } else { this.one.push(res) } */
                    this.one.push(res)
                    rec(true)
                })
            },

            // 獎金報表
            _bonu_statement() {
                return new Promise((rec, rej) => {
                    let res = { icon: 'mdi-certificate', title: this.$t('MENU.bonus_statement'), link: 'account/statement_member', order: 2, active: false, }
                    /*
                    if (this.share >= 2) {
                        res = { icon: 'mdi-certificate', title: this.$t('MENU.bonus_statement'), link: null, order: 2,
                            children: [
                                { icon: 'mdi-card-account-details-star-outline', title: '會員視角', link: 'account/statement_member' },
                                { icon: 'mdi-card-account-details-star', title: 'Admin 視角', link: 'account/statement' }, ]
                        } this.group.push(res)
                    } else { this.one.push(res) }
                    */
                    this.one.push(res)
                    rec( true )
                })
            },

            // 獎勵明細
            _leader_share() {
                return new Promise((rec, rej) => {
                    let children = this.share >= 1 ? [ { icon: 'mdi-vector-square', title: this.$t('MENU.manage_share'), link: 'bonus/management_info' } ] : [ ]
                    if (this.share >= 2) {
                        children.push(
                            { icon: 'mdi-chart-line', title: this.$t('MENU.develop_share'), link: 'bonus/development_info' },
                        )
                    }
                    /*
                    if (this.admin) { children.push( { icon: 'mdi-file-edit-outline', title: '忠誠積分操作記錄', link: 'loyalty/option_logo' }, )  }
                    */
                    const res = { icon: 'mdi-account-star-outline', title: this.$t('BONUS.NORMAL.lead_share_out'), link: null, children, order: 3, active: false, }
                    if (children && children.length > 0) this.group.push( res );
                    rec( true )
                })
            },

            // 用户资料
            _user_detaii() {
                // this.one.push()
            },  


            async menuNow() {
                this.admin = this.$store.state.is_admin
                const member_code = this.$store.state.platform_data.member_code
                if (member_code) {
                    try {
                        let res = await this.conn.get(
                            this.api.bonus,
                            this.$store.state.token,
                            {
                                'user.member_code': member_code,
                                'time_period': this.$store.state.chronus.id
                            }
                        )
                        this.share = this._num_share_type(res)
                    } catch(err) {
                        this.share = 0
                    }
                    await this._build()

                    return {
                        one: this.one,
                        group: this.group
                    }
                }
            },
            // 計算
            _num_share_type(res) {
                let share_type = 0
                if (res && res.length > 0) {
                    const rank = res[0] ? res[0].Rank : 0
                    if (rank > this.conf.RANK_LEAD) { share_type = rank < 8 ? 1 : 2 }
                }
                share_type = this.admin ? 2 : share_type

                return share_type
            },
        }
    }
</script>

<style lang="sass" scoped>
    
</style>