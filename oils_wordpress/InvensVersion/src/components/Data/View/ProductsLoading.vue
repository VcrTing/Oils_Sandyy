<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            id: {
                type: String
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            async productLoading() {
                
                return await this.conn.get(this.api.products, this.$store.state.token, { _limit: 999 })
            }
        },
    }
</script>

<style lang="" scoped>
    
</style>