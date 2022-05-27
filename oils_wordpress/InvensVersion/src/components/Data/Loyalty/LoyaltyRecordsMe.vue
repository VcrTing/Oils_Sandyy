<template>
    
</template>

<script>
import moment from 'moment'

    export default {
        computed: {
            chronu() { return this.$store.state.chronus }
        },
        methods: {

            async _lunching(code, condition) {
                console.log('个人忠诚度积分 条件 Lp Record condition =', condition)
                return await this.conn.get(
                    this.api.build( this.conf.ENDPOINT.loyalty_record, code ),
                    this.$store.state.token, condition
                )
            },

            condition() {
                // let start = this.chronu.start
                const time_period = moment(this.chronu.end).format('yyyy-MM')
                return { '_limit': 999, '_sort': 'date:DESC', time_period }// 'ordered_date_lt': end, 'ordered_date_gte': start  }
            },

            async lunchingMonthly(code) {
                let res = await this._lunching(code, this.condition())
                if (res && res.message) { return this.serial_Record( res.message ) }
            },

            async lunching(code) {
                let res = await this._lunching(code, { '_limit': 999, '_sort': 'date:DESC' })
                if (res && res.message) { return this.serial_Record( res.message ) }
            },
            serial_Record(res) {
                let res_in = 0
                let res_ot = 0
                let res_issue = 0

                res.map( e => {
                    e.LP_difference_ORIGIN = e.LP_difference
                    e.LP_difference = Math.abs( Number.parseFloat( e.LP_difference ) )

                    if (e.LP_difference_ORIGIN.startsWith('+')) {
                        res_in = this.view.floatAdd( e.LP_difference, res_in )
                        e.is_add = true
                    } else if (e.LP_difference_ORIGIN.startsWith('-')) {
                        res_ot = this.view.floatAdd( e.LP_difference, res_ot )
                        e.is_add = false
                    }

                    if (e.issue_date == false) {
                        res_issue = this.view.floatAdd(e.LP_difference, res_issue)
                    }
                    return e
                })

                return {
                    'res_in': res_in,
                    'res_ot': res_ot,
                    'res_issue': res_issue,
                    'records': res
                }
            },
        }
    }
</script>

<style lang="sass" scoped>
    
</style>