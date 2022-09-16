<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                buyed: false
            }
        },
        methods: {
            async buyEasy(id, chronu) {
                
            },
            async buyLoading(member_code = null, chronu = null) {
                let condition = {
                    'time_period': this.$store.state.chronus.id,
                    '_sort': 'published_at:DESC',
                    '_limit': 999
                }
                if (member_code) {    
                    condition['customer_uuid.member_code'] = member_code
                } else {
                    condition['customer_uuid'] = this.$store.state.user_backend.id
                }

                if (chronu) {
                    condition['time_period'] = chronu
                }

                const res = await this.conn.get(this.api.orders, this.$store.state.token, condition)

                if (res) {
                    if (res.length > 0) {

                        this.buyed = true
                    } else {
                        this.buyed = false
                    }
                }

                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>