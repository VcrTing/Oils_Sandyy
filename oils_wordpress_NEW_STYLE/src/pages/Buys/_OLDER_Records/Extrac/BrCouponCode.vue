<template>
    <div class="pt-1" v-if="buy.coupon_code && buy.discount_total > 0">

        <button class="btn btn-coupon-money">
            優惠價格:&nbsp;-&nbsp;${{ buy.discount_total }}
        </button>
        
        <button class="btn btn-coupon">
            優惠碼:&nbsp;{{ buy.coupon_code }}
        </button>
    </div>
    <div v-else></div>
</template>

<script>
    export default {
        name: '',
        props: {
            buy: {
                type: Object
            }
        },
    }
</script>