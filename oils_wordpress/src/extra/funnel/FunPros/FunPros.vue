<template>
    
</template>
<script>
export default {
    computed: {
        src() {
            let _src = this.$store.state.products
            if (_src) {
                return _src.map(e =>{
                    e.named = ''
                    if (e.translation) {
                        e.translation.map(t => {
                            e.named += t.product_name
                        })
                    }; return e
                })
            }
        }
    },
    methods: {
        inn(k, srcs) {
            return srcs.filter( e => e.indexOf(k) >= 0).length > 0
        },
        search(q) {
            return this.src.filter(e => this.inn(q, [
                e.sku,
                e.named
            ]))
        }
    }
}
</script>