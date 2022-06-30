<template>
    <div class="qiong-td qiong-product-result qiong-sub_header qiong-pt-5">
        
        <div class="qiong-wide-70">
            <div class="qiong-td">
                <div class="qiong-wide-47">
                    付款人信息:&nbsp;{{ order.customer_uuid.username }}
                    <br/>

                    <div class="qiong-pt-5">付款方式:&nbsp;{{ order.payment_method_title }}</div>
                </div>
                <div class="qiong-wide-53 pr-0">
                    
                    <phone-icon-viewing :rec="order.billing_address.billing_phone" :icon="true"></phone-icon-viewing>
                    
                    <span v-if="order.billing_email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    {{ order.billing_email }}
                    <br/>

                    <div class="qiong-pt-5">
                        付款日期:&nbsp;{{ view.ser_timed(order.ordered_date, true, true) }}
                    </div>
                </div>
            </div>
            <div class="qiong-pt-15">
                <pay-way-code-link-viewing :order="order"></pay-way-code-link-viewing>
            </div>
        </div>

        <div class="qiong-wide-13 text-right qiong-txt-19 fw-b qiong-next_header pr-0">
            <div class="yunf qiong-txt-12" v-if="order.shipping_total && order.shipping_total > 0">運費</div>
            結算
            <br/>
            <div class="qiong-pt-7 qiong-txt-primary-sub">Total PV</div>
        </div>
        <div class="qiong-wide-17 text-right qiong-txt-19 fw-b qiong-next_header pr-0">
            <div class="yunf qiong-txt-12" v-if="order.shipping_total && order.shipping_total > 0">HK${{ order.shipping_total }}</div>
            <span class="t-money">
                HK${{ order.product_total }}
            </span>
            <br/>
            <div class="qiong-pt-7 qiong-txt-primary-sub">{{ order.total_pv }}</div>
        </div>
    </div>
</template>

<script>
import PhoneIconViewing from "../../../../components/Viewing/Msg/PhoneIconViewing.vue"
import PayWayCodeLinkViewing from '../../../../components/Viewing/Orders/PayWayCodeLinkViewing.vue'

    export default {
        components: { PhoneIconViewing, PayWayCodeLinkViewing },
        props: {
            item: {
                type: Object
            },
            order: {
                type: Object
            }
        },
        name: '',
        mounted() {
            
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
.qiong-product-a
    color: #787878 !important
    text-decoration: underline
.qiong-product-a:hover
    color: #555 !important

.yunf
    margin-bottom: 0.7vw

.t-money
    color: #dfa625 // #c57a2e // #cb7f32
</style>