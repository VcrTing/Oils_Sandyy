<template>
    <div id="pdf_pur" class="root">
    
        <pdf-simple-header :title="'Sponsor Statement'"></pdf-simple-header>

        <pdf-simlpe-member-msg :mine="me" v-if="me"></pdf-simlpe-member-msg>
        <pdf-simple-bonus-eligibility :mine="me" v-if="me"></pdf-simple-bonus-eligibility>
        <pdf-simple-payment-order :mine="me" v-if="me"></pdf-simple-payment-order>


        <pdf-content-layout>
            <span slot="header">Sponsor Tree Digram</span>

            <div slot="body">
                <table class="w-full" style="margin-top: 2px;">
                    <tr class="head">
                        <td width="12%">    
        Member Number</td>
                        <td width="37%">
            <div class="pti-index-zero">0</div>
        Member Name</td>
                        <td width="12%">  
        Sponsor ID</td>
                        <td width="10%">
        Phone</td>
                        <td width="9%" style="text-align: center;">
        Layer</td>
                        <td width="9%" style="padding-left: 8px">
        PV</td>
                        <td>
        Payment Level</td>
                        <!--td width="10%" style="text-align: center;">
        Order Number</td>
                        <td style="text-align: center;">
        Recommend PV</td -->
                    </tr>

                    <tr v-for="(v, i) in datas" :key="i" class="content">


                        <td>
                            {{ v.member_code }}
                        </td>
                        
                        <td>
                            <div v-if="v.index != 0" class="pti-index">{{ v.index }}</div>
                            <div v-else class="pti-index-zero">0</div>
                            {{ v.display_name }}
                        </td>

                        <td>
                            {{ v.sponsor_id }}
                        </td>
                        <td>
                            {{ v.phone }}
                        </td>
                        <td style="text-align: center;">
                            {{ v.index }}
                        </td>
                        <td style="padding-left: 8px">
                            {{ v.bonu_period.individual_pv }}
                        </td>
                        <td>
                            {{ txt(v.vip) }}
                        </td>

                        <!-- td style="text-align: center;">
                            {{ order_num(v.orders_period) }}
                        </td>

                        <td style="text-align: center;">
                            {{ v.bonu_period.pv_recommend }}
                        </td -->
                    </tr>
                </table>

                <div colspan="9" class="pet-footer">
                    &nbsp;
                    <div style="font-size: 14px;">Total</div>
                    <div>
                        Number of Child Member:&nbsp;&nbsp;&nbsp;&nbsp;{{ nocm() }}
                    </div>
                    <!-- div>
                        Member Number:&nbsp;&nbsp;{{ datas.length }}
                    </div -->
                </div>
            </div>
        </pdf-content-layout>

    </div>
</template>

<script>

import app_init from '@/common/es/app_init/index'
import PdfSimpleHeader from '../../PdfSimple/common/PdfSimpleHeader.vue'
import PdfSimlpeMemberMsg from '../../PdfSimple/member/PdfSimlpeMemberMsg.vue'
import PdfSimplePaymentOrder from '../../PdfSimple/member/PdfSimplePaymentOrder.vue'
import PdfContentLayout from '../../PdfSimple/common/PdfContentLayout.vue'
import PdfSimpleBonusEligibility from '../../PdfSimple/member/PdfSimpleBonusEligibility.vue'

    export default {
        components: { 
            PdfSimpleHeader, 
            PdfSimplePaymentOrder,
            PdfSimlpeMemberMsg,
            PdfContentLayout,
                PdfSimpleBonusEligibility   },
        name: '',
        props: {
            datas: {
                type: Array
            }
        },
        data() {
            return {
                me: null
            }
        },
        mounted() {
            this.me = this.datas[ 0 ]
        },
        methods: {
            txt(v) {
                let res = this.$t('USER.level_null')
                if (v.star != 0) {
                    res = app_init.vip_view.vip_now(v.code)
                    res = res ? res.nick : ''
                }
                return res
            },
            order_num(ord) {
                if (ord) {
                    return ord.length
                }
                return ''
            },
            nocm() {
                let res = 0
                
                if (this.datas) {
                    if (this.datas.length > 1) {
                        res = this.datas.length - 1
                    }
                }
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
.head
    line-height: 1.4
    td
        padding-bottom: 0.2em

.content
    line-height: 1.8

.pet-footer
    line-height: 2.4

.pti-index,
.pti-index-zero
    display: inline 
    padding: 0 0.2rem
    margin-right: 2px
    border-radius: 100% 
    border: 1px solid #929292
    
</style>