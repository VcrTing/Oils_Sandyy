<template>
    
</template>
<script>
export default {
    computed: {
        admin() { return this.$store.state.is_admin }
    },
    methods: {
        ser_detaii(one) {
            let res = [ '', '' ]
            if (one.change_type == 'redeem') {
                res = one.change_detail.split('uuid')
                if (res) {
                    res = res.map(e => { const _ee = e.match(/\d+(.\d+)?/g); return _ee ? _ee[0] : '' })
                } else { res = [ '', '' ] }
            } one.order_id = res[0]; one.uuid = res[1]
            return one
        },

        async many(data) {
            if (!this.admin) { delete data.member_code }
            console.log('准备拉取Ewallet Log，条件 =', data)
            let res = await this.conn.ex_get( this,
                'user_wallet_log', data
            ); res = res && res.message ? res.message : [ ]
            console.log('拉取到 log 结果 =', res)
            return res.map(e => { e = this.ser_detaii(e); return e })
        },

        // admin_wallet_request
        async wallet_req(data) {
            let res = await this.conn.ex_get( this,
                'admin_wallet_request', data
            ); res = res && res.data ? res.data : [ ]
            return res // .map(e => { e = this.ser_detaii(e); return e })
        },
    }
}
</script>