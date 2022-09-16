<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                userd: false
            }
        },
        methods: {
            
            async userLoading(member_code = null) {
                const condition = { }
                if (member_code) {    
                    condition['member_code'] = member_code
                } else {
                    condition['member_code'] = this.$store.state.user_backend.member_code
                }

                const res = await this.conn.get(this.api.users, this.$store.state.token, condition)

                if (res) {
                    if (res.length > 0) {

                        this.userd = true
                    } else {
                        this.userd = false
                    }
                }

                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>