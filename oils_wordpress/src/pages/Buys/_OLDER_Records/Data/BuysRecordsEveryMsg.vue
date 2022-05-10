<template>
    <div class="qiong-product-msg">

        <div class="qiong-td ">
            <div class="qiong-wide-32">
                收貨人姓名:&nbsp;{{ view.backend.view_shipping_named(order.shipping_address) }}
            </div>
            <div class="qiong-wide-68">
                收貨人地址:&nbsp;{{ view.backend.view_shipping_address(order.shipping_address) }}
            </div>
        </div>

        <div class="qiong-td">
            <div class="qiong-wide-32">
                付款人姓名:&nbsp;{{ view.backend.view_shipping_named(order.billing_address) }}
            </div>
            <div class="qiong-wide-68">
                付款人地址:&nbsp;{{ view.backend.view_shipping_address(order.billing_address) }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object
            },
            order: {
                type: Object
            }
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>