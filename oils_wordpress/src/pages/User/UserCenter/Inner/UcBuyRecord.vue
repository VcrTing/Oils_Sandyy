<template>
    <div>
        <qiong-header class="an_upper mt-6">{{ $t('HEADER.member_buy') }}</qiong-header>
        <qiong-panel-element class="an_upper ov-hide-fix" :need_space="false">
            
                <div v-if="!loading">
                    <div v-if="items.length > 0">
                        <div 
                            class="clearfix"
                            v-for="(v, i) in items" :key="i"
                        >
                            <v-expansion-panels accordion flat class="pa-0 qiong-ex-panel" 
                            >
                                <v-expansion-panel
                                :class="{ 'br-none': i == (items.length - 1) }"
                                >
                                    <v-expansion-panel-header
                                        :class="{ 'me-buy-row': (i % 2 != 0) }">
                                        
                                        <uc-order-item-header :index="i" :buy="v"></uc-order-item-header>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="item-border pb-3"
                                >
                                        <uc-order-item-content :index="i" :buy="v"></uc-order-item-content>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </div>

                    <div v-else class="pt-3 mb-2">
                        <qiong-empty :bigger="0"></qiong-empty>
                    </div>
                </div>
                <qiong-loading v-else></qiong-loading>
                
                <buy-me ref="buyMe"></buy-me>
        </qiong-panel-element>

        <qiong-space :space="'10vh'"></qiong-space>
    </div>
</template>

<script>
import BuyMe from '../../../../components/Data/Using/BuyMe.vue'
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../../components/Qiong/Pager/QiongHeader.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue' 
import UcOrderItemContent from '../Order/UcOrderItemContent.vue'
import UcOrderItemHeader from '../Order/UcOrderItemHeader.vue'

    export default {
        components: { 
            BuyMe,
            QiongSpace,
            QiongEmpty,
            QiongLoading,
                UcOrderItemContent,
                UcOrderItemHeader,
                QiongHeader,
                QiongPanelElement
        },
        name: '',
        data() {
            return {
                items: [ ],

                buying: [ ],
                buying_die: [ ],
                loading: true
            }
        },
        mounted() {
            this.dataLoading()
        },
        methods: {
            change(f) {
                this.loading = true
                if (f == 2) { this.items = this.buying_die } else { this.items = this.buying }
                setTimeout(() => { this.loading = false }, 300)
            },
            
            serial_buy(buy) {
                let status = this.view.backend.view_pay_status(buy.status)
                if (status && status.status_code > 0) {
                    return true
                }
                return false
            },

            build_buy(buying) {

                return new Promise((rej, rev) => {

                    let res = [ ]
                    if (buying.length > 0) {
                        buying.map(e => {
                            
                            let outter = {
                                buyer_phoned: e.billing_phone,
                                buyer_named: this.view.backend.view_shipping_named(e.shipping_address),
                                buyer_addr: this.view.backend.view_shipping_address(e.shipping_address),
                                role: e.role,
                                status: e.status,
                                pay_way: e.payment_method_title,
                                Origin_buyer_number_code: e.customer_uuid.member_code,
                                Origin_buyer_named: this.view.backend.view_shipping_named(e.billing_address),
                                order_code: e.uuid,
                                ordered_date: e.ordered_date,
                                payment_method: e.payment_method,
                                stripe_transaction_id: e.stripe_transaction_id,
                                coupon_code: e.coupon_code,
                                is_ewallet: e.is_ewallet,
                                ewallet_pay: e.ewallet_detail ? e.ewallet_detail.ewallet_used : 0
                            }

                            e.ordered_product.map(m => {
                                m.price = m.discounted_price
                                const data = {
                                    ...outter,
                                    ...m,
                                    how_many_buy: e.length
                                }

                                const inner = this.serial_buy(data)
                                if (inner) res.push(data)
                            })
                        })
                    }

                    rej( res )
                })
            },
            async dataLoading() {
                
                this.loading = true
                let res = await this.$refs.buyMe.buyLoading()
                res = await this.build_buy(res)
                
                if (res) {
                    this.buying = res.filter(e => e.status != 'cancelled')
                    this.buying_die = res.filter(e => e.status == 'cancelled')

                    this.change()
                    if (this.buying.length > 4) { this.$emit('long_Father', true) }
                    
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
.ov-hide-fix
    &,
    .qpe_inner,
    .v-expansion-panels
        // overflow: hidden !important
        // border-radius: 0px 0px 12px 12px

.item-border
    // border-bottom: 1px solid #e7e7e7

.item-border
    background: #fafafa

.br-none
    border: none !important
</style>