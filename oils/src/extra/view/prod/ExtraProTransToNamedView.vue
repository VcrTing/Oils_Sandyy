<template>
    <span>{{ named }}</span>
</template>

<script>
    export default {
        name: '',
        props: [
            'trans'
        ],
        data() {
            return {
                lan: 'hk'
            }
        },
        computed: {
            named() {

                let res = '（新品上架）'
                if (this.trans) {
                    res = this.trans
                    res.map(e => {
                        if (e.language_key == this.lan) {
                            res = e.product_name
                        }
                    })
                    res = res ? res : res[0].product_name
                }
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>