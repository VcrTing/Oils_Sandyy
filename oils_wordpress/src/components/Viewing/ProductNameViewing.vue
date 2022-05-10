<template>
    <div v-html="named">
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            id: {
                type: Number
            },
            product: {
                type: Object
            }
        },
        data() {
            return {
                named: '&nbsp;'
            }
        },
        computed: {
            
        },
        async mounted() {
            if (this.$store.state.products) {
                this.named = await this.nameFind()
            }
        },

        methods: {
            nameFind() {
                const that = this
                return new Promise((rej, rev) => {
                    let res = ''
                    const products = that.$store.state.products
                    products.map(e => {
                        if (e.id == that.product.id) {

                            if (e.translation && e.translation.length > 1) {
                                e.translation.map(j => {
                                    if (j.language_key.toUpperCase() == that.$store.state.lang) {
                                        res = j.product_name
                                    }
                                })
                            } else {
                                res = e.translation[0].product_name
                            }
                        }
                    })

                    rej(res)
                })
            }
        },
    }
</script>