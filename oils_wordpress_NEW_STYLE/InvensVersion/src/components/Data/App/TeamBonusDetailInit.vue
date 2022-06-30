<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                ranks: [
                    6, 7, 8, 9, 10
                ]
            }
        },
        methods: {
            async tbdLoading() {
                return await this.conn.get(
                    this.api.team_bonus_detail,
                    this.$store.state.token
                )
            },
        },
    }
</script>

<style lang="sass" scoped>
    
</style>