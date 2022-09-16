<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                bonused: false
            }
        },
        methods: {
            
            async bonusLoading(member_code = null, chronu = null) {
                let condition = {
                    'time_period': this.$store.state.chronus.id,
                    '_sort': 'published_at:DESC',
                    '_limit': 999
                }
                if (member_code) {    
                    condition['user.member_code'] = member_code
                } else {
                    condition['user'] = this.$store.state.user_backend.id
                }

                if (chronu) {
                    condition['time_period'] = chronu
                }

                const res = await this.conn.get(this.api.bonus, this.$store.state.token, condition)

                if (res) {
                    if (res.length > 0) {

                        this.bonused = true
                    } else {
                        this.bonused = false
                    }
                }

                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>