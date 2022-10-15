<template>
    <div></div>
</template>

<script>
    export default {
        computed: {
            token() { return this.$store.state.token },
            chron() { return this.$store.state.chronus },
            user_back() { return this.$store.state.user_backend }
        },
        data() {
            return {
                buyed: false
            }
        },
        methods: {
            async buyEasy(id, chronu) { },

            async buyLoading(member_code = null, chronu = null) {
                let condition = {
                    'time_period': this.chron.id,
                    '_sort': 'published_at:DESC',
                    '_limit': 999 }
                if (member_code) {    
                    condition['customer_uuid.member_code'] = member_code
                } else {
                    condition['customer_uuid'] = this.user_back.id
                }

                if (chronu) { condition['time_period'] = chronu }
                const res = await this.conn.get(this.api.orders, this.token, condition)

                // console.log('个人中心的订单: ', condition)
                // console.log('订单 res: ', res)
                if (res) { this.buyed = (res.length > 0) }
                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>