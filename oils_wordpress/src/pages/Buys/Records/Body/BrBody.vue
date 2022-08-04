<template>
    <div class="qiong-pt-10">

        <div class="txt-sub qiong-pt-10 pb-1">
            共&nbsp;{{ item.ordered_product.length }}&nbsp;種商品，數量&nbsp;{{ nums }}&nbsp;件
        </div>

        <div>
            <div v-for="(v, i) in item.ordered_product" :key="i" class="pt-3 pb-2">
                <product-inline :_product="v"></product-inline>
            </div>
        </div>
        
        <buys-records-logo :order="item"></buys-records-logo>

        <div class="qiong-tr qiong-txt-16 mobie-td pb-1">
            <div class="qiong-wide-38">
                收貨地址：{{ view.backend.view_shipping_address(item.shipping_address) }}
            </div>
            <div class="qiong-wide-32 mobie-pt-6 pc-pl-3">
                收貨人姓名：{{ view.backend.view_shipping_named(item.shipping_address) }}
            </div>

            <div class="qiong-wide-30 mobie-pt-12 t-r">
                <span v-if="item.shipping_total">運費：{{ item.shipping_total }}</span>
            </div>
        </div>

        <hr class="my-2"/>

        <div class="fx-s buy-footer">
            <div class="qiong-wide-70 ">
                <div>付款地址：&nbsp;&nbsp;{{ view.backend.view_shipping_address(item.billing_address) }}</div>

                    <div class="wide-100 mt-1">付款人姓名：{{ view.backend.view_shipping_named(item.billing_address) }}</div>

                    <div class="qiong-td mobie-td mt-1">

                        <icon-with-text class="qiong-wide-35" :icon="'mdi-email-outline'" :extra_class="'qiong-txt-14'">
                            ：{{ item.billing_address.billing_email }}
                        </icon-with-text>
                        <icon-with-text class="qiong-wide-65" :icon="'mdi-phone-outline'" :extra_class="'qiong-txt-14'">
                            ：{{ item.billing_address.billing_phone }}
                        </icon-with-text>
                    </div>

                <div class="qiong-td mobie-td mt-3 mobie-pt-12">

                    <div class="qiong-wide-35 " :class="{ 'pay-title': item.stripe_transaction_id }">付款方式：
                        <buy-way-viewing :order="item"></buy-way-viewing>
                        <buy-way-ewallet-viewing v-if="item.is_ewallet"></buy-way-ewallet-viewing>
                    </div>
                    <div class="qiong-wide-65 mobie-pt-6 txt-timed">
                        付款時間：{{ view.ser_timed(item.ordered_date, true, false) }}
                    </div>
                </div>
                <div class="qiong-td mobie-td mt-1 mobie-pt-12">
                    
                </div>
            </div>
            <div class="qiong-wide-30 mobie-pt-12 t-r qiong-txt-18 fw-b">

                <div class="qiong-td" v-for="(v, i) in result" :key="i">
                    <div class="qiong-wide-60">{{ v.txt }}</div>
                    <div class="qiong-wide-40 pr-0">
                        <span v-if="i == 0">HKD&nbsp;</span>
                        {{ v.content }}</div>
                </div>
            </div>
        </div>

        <div class="qiong-pt-15"></div>
    </div>
</template>

<script>
import QsrWrapper from '../../../../components/Qiong/Pager/Inner/QsrWrapper.vue'
import QiongSubResult from '../../../../components/Qiong/Pager/QiongSubResult.vue'
import IconWithText from '../../../../components/Qiong/Tool/IconWithText.vue'
import BuysRecordsLogo from '../Extra/BuysRecordsLogo.vue'
import ProductInline from '../Common/ProductInline.vue'
import BuyWayViewing from '../../../../components/Viewing/Msg/BuyWayViewing.vue'
import BuyWayEwalletViewing from '../../../../components/Viewing/Msg/BuyWayEwalletViewing.vue'
    export default {
  components: { ProductInline, BuysRecordsLogo, QiongSubResult, QsrWrapper, IconWithText, BuyWayViewing, BuyWayEwalletViewing },
        props: [ 'item' ],
        data() {
            return {
                
            }
        },
        computed: {
            nums() {
                let res = 0
                const rec = this.item.ordered_product
                if (rec) {
                    rec.map(e => { res += e.quantity })
                }
                return res
            },
            result() {
                let res = this.item.is_ewallet ? [
                    {
                        txt: 'eWallet 賬戶扣款',
                        content: this.item.ewallet_detail.ewallet_used // product_total
                    }
                ] : [ ]

                res.push({
                        txt: this.item.is_ewallet ? '銀行卡/現金' : '結算',
                        content: this.item.payed_total ? this.item.payed_total : 0 // product_total
                    })
                res.push({
                        txt: 'PV',
                        content: this.item.total_pv
                    })

                return res
            }
        },
        mounted() {

        }
    }
</script>

<style lang="sass" scoped>
.fx-s
    flex-wrap: wrap

.buy-footer
    align-items: end

.txt-timed
    color: #949599
</style>