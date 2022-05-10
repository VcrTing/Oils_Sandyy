<template>
    <div class="d-inline " v-html="pay_way">
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            order: {
                type: Object
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            pay_way() {
                let res = this.view.backend.view_pay_way(this.order.payment_method)

                console.log(this.order.payment_method_title, res)
                if (res.link == true) {
                    const api = this.conf.STRIPE_API

                    const stripe = this.order.stripe_transaction_id

                    res = stripe ? `
                        <a 
                        href="${api}${stripe}" target="_blank"
                        class="qiong-a link">${res.named}</a>
                    ` :
                    `
                        <span>${res.named}</span>
                    `
                } else if (res.link == false) {
                    res = res.named
                }
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
.link
    text-decoration: underline !important
</style>