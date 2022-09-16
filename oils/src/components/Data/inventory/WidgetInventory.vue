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
            async inventoryData(funnel = {}) {
                funnel._limit = 999
                try {
                    
                let res = await this.conn.get(
                    this.api.browse_stock,
                    this.$store.state.token,
                    funnel
                )
                if (res) { res = res ? res.message : res;  return res }
                } catch(err) { }
                return [ ]
            },
            
        }
    }
</script>

<style lang="sass" scoped>
    
</style>