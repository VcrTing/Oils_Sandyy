<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            image(sku) {
                let rec = this.$store.state.products
                rec = rec.filter(e => e.sku == sku)
                rec = (rec && rec.length > 0) ? rec[ 0 ] : { }
                return rec.product_image
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>