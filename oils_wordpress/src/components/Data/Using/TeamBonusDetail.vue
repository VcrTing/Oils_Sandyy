<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            async tbdLoading() {

                return await this.conn.get(
                    this.api.team_bonus_detail,
                    this.$store.state.token,
                )
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>