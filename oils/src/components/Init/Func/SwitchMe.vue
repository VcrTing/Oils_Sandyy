<template>
    
</template>

<script>
    export default {
        name: '',
        props: {
            member_code: {
                type: String
            }
        },
        data() {
            return {
                
            }
        },
        mounted() {
            this.switchMe(this.member_code)
        },
        methods: {
            switchMe(code, mode = 'SPONSOR') {
                const users = this.$store.state.user_sponsor
                for (let u of users) {
                    if (u.member_code == code) {
                        this.$emit('mine_Father', u)
                        break
                    }
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>