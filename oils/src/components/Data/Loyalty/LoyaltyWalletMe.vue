<template>
    
</template>

<script>
import moment from 'moment'
    export default {
        computed: {
            chronu() { return this.$store.state.chronus }
        },
        methods: {
            loadStore(code) {
                let res = sessionStorage.getItem('oils_loyalty_wallet')
                if (res) {
                    res = JSON.parse(res)
                    res = (res.member_code == code) ? res : null 
                    return res }
                return null
            },

            async _lunching(member_code, condition) {
                console.log('LP 积分账户 获取的 Condition =', condition)
                return await this.conn.get(
                    this.api.build( this.conf.ENDPOINT.loyalty_wallet, member_code ),
                    this.$store.state.token, condition )
            },

            _condition(time_period) {
                time_period = time_period ? time_period : moment(this.chronu.end).format('yyyy-MM')
                return { time_period, '_limit': 999, is_issued: true, '_sort': 'published_at:asc' }
            },

            async lunching(code, time_period) {
                const _this = this
                let res = null 
                // this.loadStore(code) // sessionStorage.setItem('oils_loyalty_wallet', JSON.stringify(res))
                if (!res) {
                    res = await this._lunching(code, this._condition(time_period))
                    if (res && res.message) {
                        res = res.message
                        res.monthlys = res.LP_by_month ? _this.serial_Monthly(res.LP_by_month) : [ ]
                        res.member_code = code }
                }
                return res
            },

            serial_Monthly(ms) {
                let res = [ ]; for (let k in ms) { ms[k].period = k; res.push(ms[k]) }; return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>