<template>
    <div>

    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

    export default {
        name: '',
        props: {
            _chronu: {
                type: Object
            }
        },
        data() {
            return {
                chronu: '',
                end: null
            }
        },
        methods: {
            
            _fetchingUser(user) {
                for (let bonu of user.bonuses) {
                    if (bonu.time_period == this.chronu) {
                        user.bonu_period = bonu
                        user.vip_code = app_init.vip_view.rank_to_code(bonu.Rank)
                    }
                }

                return user
            },

            _serUser(users) {
                let res = [ ]
                for (let u of users) {

                    if (u.member_code) {
                        if (u.bonuses && u.bonuses.length > 0) {
                            
                            const i = this._fetchingUser(u)

                            if (i.bonu_period) {
                                res.push(
                                    i
                                )
                            }
                        }
                    }
                }
                
                return res
            },

            async switchingUsers() {

                this.valuation()

                let condition = { }

                if (this.end) {
                    condition['_where[registered_date_lte]'] = this.$store.state.chronus.end
                }

                const res = await this.conn.get(
                    this.api.users,
                    this.$store.state.token,
                    condition
                )

                if (res) {
                    return this._serUser(res)
                }

                return [ ]
            },

            valuation() {
                if (!this._chronu) {
                    this.chronu = this.$store.state.chronus.id
                    this.end = this.$store.state.chronus.end
                } else {
                    this.chronu = this._chronu.id
                    this.end = this._chronu.end
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>