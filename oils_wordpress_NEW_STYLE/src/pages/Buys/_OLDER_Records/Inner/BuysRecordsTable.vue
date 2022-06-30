<template>
    <div v-if="buy.length > 0">
            <v-expansion-panels accordion flat class="qiong-td qiong-br-0 w-full qiong-ex-panels py-0"
                v-for="(v, i) in buy" :key="i"
                :class="{ 'qiong-td-hui': i % 2 == 0, 'qiong-td-light': i % 2 != 0 }"
                :id="`pro_${v.uuid}`"
            >
                <v-expansion-panel class="qiong-br-0">
                    <v-expansion-panel-header class="qiong-txt-td qiong-td-exp">
                        <div class="qiong-wide-11 pl-7 fw-b txt-vider">
                            {{ v.uuid }}&nbsp;
                        </div>
                        <div class="qiong-wide-10">{{ v.customer_uuid.member_code }}</div>
                        <div class="qiong-wide-27">{{ v.customer_uuid.display_name }}</div>
                        <div class="qiong-wide-11">{{ view.ser_timed(v.ordered_date) }}</div>
                        <div class="qiong-wide-6">{{ v.total_pv }}</div>
                        <div class="qiong-wide-12">
                            {{ v.product_total }}
                            <!-- span class="tag tag-hight" v-if="v.product_total >= 2000">高消費</!-->
                        </div>
                        <div class="qiong-wide-10" v-html="status(v)"></div>
                        <div class="qiong-wide-6">
                            <first-buy-viewing :first="v.is_new"></first-buy-viewing>
                        </div>
                        <div class="qiong-wide-7 fx-c">
                            <v-icon class="txt-sec i-ex-down">
                                mdi-chevron-down
                            </v-icon>
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="qiong-primary-shadow-inset">
                        
                        <div class="px-15 pt-4 pb-2">

                            <br-coupon-code :buy="v"></br-coupon-code>

                            <buys-records-every-product class="qiong-pt-5"  v-for="(p, i) in v.ordered_product" :key="i" :item="p" :order="v"></buys-records-every-product>

                            <!-- buys-records-logo class="qiong-pt-15" :order="v"></!-->

                            <buys-records-every-msg :order="v" class="qiong-pt-20"></buys-records-every-msg>

                            <buys-records-every-result :order="v"></buys-records-every-result>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
    </div>
    <div v-else class="w-full h-full mb-4">
        <qiong-empty class="mb-4"></qiong-empty>
        <qiong-space :space="'4vh'"></qiong-space>
    </div>
</template>

<script>
import QiongIconFlat from '../../../../components/Qiong/Button/QiongIconFlat.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import FirstBuyViewing from '../../../../components/Viewing/Orders/FirstBuyViewing.vue'
import BuysRecordsEveryMsg from '../Data/BuysRecordsEveryMsg.vue'
import BuysRecordsEveryProduct from '../Data/BuysRecordsEveryProduct.vue'
import BuysRecordsEveryResult from '../Data/BuysRecordsEveryResult.vue'
import BrCouponCode from '../Extrac/BrCouponCode.vue'
import BuysRecordsLogo from '../Logo/BuysRecordsLogo.vue'
    export default {
  components: { QiongIconFlat,
    QiongSpace, BuysRecordsEveryProduct, BuysRecordsEveryMsg, BuysRecordsEveryResult, QiongEmpty,
    BrCouponCode,
    FirstBuyViewing,
    BuysRecordsLogo },
        props: {
            buy: {
                type: Array
            }
        },
        methods: {
            
            status(v) {
                let res = ''
                if (v.status) { res = this.view.backend.view_pay_status(v.status) }
                if (res) { res = '<span class="'+ res.status_class + '">' + res.named + '</span>' }
                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
.qiong-td-hui
    

.i-ex-down
    color: #aaada8 !important
</style>