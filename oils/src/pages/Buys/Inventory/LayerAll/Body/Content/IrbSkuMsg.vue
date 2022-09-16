<template>
    <div class="lrb-sku-msg">
        <div>PV:&nbsp;{{ pv }}</div>
        <div>會員價:&nbsp;HK$&nbsp;{{ price_vip }}</div>
        <div>零售價:&nbsp;HK$&nbsp;{{ price }}</div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            pv: Number,
            price: Number,
            price_vip: Number
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.lrb-sku-msg
    line-height: 2.1
</style>