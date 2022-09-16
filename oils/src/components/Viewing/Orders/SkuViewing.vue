<template>
    <span>
        {{ sku }}
    </span>
</template>

<script>
    export default {
        name: '',
        props: {

            product_id: {
                type: Number
            }
        },
        data() {
            return {
                sku: ''
            }
        },
        async mounted() {
            if (this.$store.state.products) {

                await this.skuFind()
            }
        },
        methods: {
            
            skuFind() {
                return new Promise((rej, rev) => {
                    let res = ''
                    const products = this.$store.state.products
                    products.map(e => {
                        if (e.id == this.product_id) {
                            this.sku = e.sku
                        }
                    })

                    rej(res)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>