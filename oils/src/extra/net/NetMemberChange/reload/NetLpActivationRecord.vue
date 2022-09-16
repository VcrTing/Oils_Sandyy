<template>
    
</template>
<script>
export default {
    methods: {
        async _lunch(condition = { _limit: 300 }) {
            let res // = await this.conn.get( this.api.admin_lp_activation, this.$store.state.token, condition ) 
            res = await this.conn.ex_get(this, 'admin_lp_activation', condition)
            console.log('获取到的 重启记录 =', res)
            if (res) {
                return res && res.data ? res.data : [ ]
            }
        },

        async lunching() {
            await this._lunch()
        },

        async lp_activation() {
            await this._lunch({ log_type: 'activation', _limit: 300 })
        },
        async lp_deactivation() {
            await this._lunch({ log_type: 'deactivation', _limit: 300 })
        }
    }
}
</script>