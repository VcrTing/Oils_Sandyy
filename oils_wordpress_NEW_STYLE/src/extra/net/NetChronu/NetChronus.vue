<template>
    
</template>

<script>
import moment from 'moment'
    export default {
        methods: {
            async lunching() {
                let res = await this.conn.get( this.api.chronus, this.$store.state.token, { _limit: 999 } )
                return res ? res.map(e => this.ser_res(e)) : [ ]
            },
            ser_res(res) {
                delete res.orders
                delete res.bonuses
                delete res.bonus_calculations
                res.now = moment(res.end).format('yyyy-MM-DD')
                res.now_list = res.now.split('-')
                return res
            }
        }
    }
</script>