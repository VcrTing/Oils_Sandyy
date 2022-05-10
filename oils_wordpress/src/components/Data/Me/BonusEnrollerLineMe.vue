<template>
    
</template>

<script>
import moment from 'moment'
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            
            _ser_result(res) {
                return res.map(e => {
                    let pv = e.individual_pv
                    pv = pv ? pv : 0
                    e.is_active = (this.bonus.conf.USER_PV_LIMIT <= pv)
                    e.individual_pv = pv
                    e.organization_pv = e.organization_pv ? e.organization_pv : 0
                    return e
                })
            },

            _condition(year) {
                let member_code = this.$store.state.user_backend.member_code

                year = moment( year ).add(10, 'days')

                let month = year.format('MM')
                month = month ? Number.parseInt(month) : month
                // month = month ? ( Number.parseInt(month) + 1 ) : month
                year = year.format('YYYY')

                return {
                    member_code,
                    year,
                    month
                }
            },

            async lunch_Line_now() {
                const d = this.$store.state.chronus_now.start // moment(new Date()).format('YYYY-MM-DD')
                let res = this._condition( d )
                try {
                    res = await this.conn.get(this.api.browse_bonus, this.$store.state.token, res)

                    if (res && res.message) {
                        res = this._ser_result(res.message)
                    } else {
                        res = [ ]
                    }
                } catch(e) {
                    res = [ ]
                }

                return res
            },

            async lunch_Line(y) {
                y = y ? y : this.$store.state.chronus.start
                let res = this._condition( y )
                try {
                    res = await this.conn.get(this.api.browse_bonus, this.$store.state.token, res)

                    if (res && res.message) {
                        res = this._ser_result(res.message)
                    } else {
                        res = [ ]
                    }
                } catch(e) {
                    res = [ ]
                }

                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>