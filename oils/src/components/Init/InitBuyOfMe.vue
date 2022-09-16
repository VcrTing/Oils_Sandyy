<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        async mounted() {
            await this.buying()
        },
        methods: {
            async buying() {
                let res = await this.conn.get(
                    this.api.orders,
                    this.$store.state.token,
                    {
                        'time_period': this.$store.state.chronus.id,
                        'customer_uuid': this.$store.state.user_backend.id
                    }
                )
                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>