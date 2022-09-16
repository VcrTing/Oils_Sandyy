<template>
    
    <div>
        <a class="btn btn-stripe" target="_blank"
            v-if="order.stripe_transaction_id"
            :href="`https://dashboard.stripe.com/payments/${order.stripe_transaction_id}`">
            <span>
                code:&nbsp;{{ order.stripe_transaction_id }}
            </span>
        </a>
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
        }
    }
</script>

<style lang="sass" scoped>
    
</style>