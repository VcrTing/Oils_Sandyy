<template>
    <div v-if="me">
        <pdf-simlpe-member-msg :mine="me" :_item="bonuss" v-if="!loading"></pdf-simlpe-member-msg>

        <pdf-simple-bonus-eligibility :mine="me" :_item="bonuss" v-if="!loading"></pdf-simple-bonus-eligibility>

        <pdf-simple-payment-order :mine="me" :_item="bonuss" v-if="!loading"></pdf-simple-payment-order>

        <pdf-simple-recommend :mine="me" :_item="bonuss" v-if="!loading"></pdf-simple-recommend>

        <pdf-simple-active-house :mine="me" :_item="bonuss" v-if="!loading"></pdf-simple-active-house>

        <pdf-simple-team :mine="me" :_item="bonuss" v-if="!loading"></pdf-simple-team>

        <!-- -->
        <pdf-simple-manage :mine="me" :_item="bonuss" v-if="!loading"></pdf-simple-manage>

        <pdf-simple-develop :mine="me" :_item="bonuss" v-if="!loading"></pdf-simple-develop>

        <pdf-simple-sale-retail :mine="me"></pdf-simple-sale-retail>

        <pdf-simple-bonus-transfer :mine="me"></pdf-simple-bonus-transfer>

        <!-- -->
        <pdf-simple-footer :_me="me" :_item="bonuss" v-if="!loading"></pdf-simple-footer>

        <!-- 拿取数据 -->
        <net-bonus-statement ref="netBonuREF"></net-bonus-statement>
    </div>
    <div v-else>

    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import PdfSimpleActiveHouse from './bonus/PdfSimpleActiveHouse.vue'
import PdfSimpleRecommend from './bonus/PdfSimpleRecommend.vue'
import PdfSimpleTeam from './bonus/PdfSimpleTeam.vue'
import PdfSimlpeMemberMsg from './member/PdfSimlpeMemberMsg.vue'
import PdfSimpleBonusEligibility from './member/PdfSimpleBonusEligibility.vue'
import PdfSimplePaymentOrder from './member/PdfSimplePaymentOrder.vue'
import PdfSimpleFooter from './common/PdfSimpleFooter.vue'
import PdfSimpleManage from './share/PdfSimpleManage.vue'
import PdfSimpleDevelop from './share/PdfSimpleDevelop.vue'
import PdfSimpleSaleRetail from './share/PdfSimpleSaleRetail.vue'
import PdfSimpleBonusTransfer from './share/PdfSimpleBonusTransfer.vue'
import NetBonusStatement from '../../../extra/net/NetBonus/NetBonusStatement.vue'
    export default {
        components: { PdfSimlpeMemberMsg, PdfSimpleBonusEligibility, PdfSimplePaymentOrder, PdfSimpleRecommend, PdfSimpleActiveHouse, PdfSimpleTeam, PdfSimpleFooter, PdfSimpleManage, PdfSimpleDevelop, PdfSimpleSaleRetail, PdfSimpleBonusTransfer, NetBonusStatement },
        name: '',
        props: {
            me: {
                type: Object
            }
        },
        data() {
            return {
                bonuss: null,

                loading: true,

                children: [ ]
            }
        },
        async mounted() {
            this.children = await this.switchChildern()
            this.fetchingBonus()
        },
        methods: {

            switchChildern() {
                return new Promise((rej, rev) => {
                    let res = [ ]
                    if (this.me) {
                        app_init._build([ this.me ], function(u) {
                            res.push(u)
                        })
                        res = res.filter(e => e.member_code != this.me.member_code)
                    }
                    rej( res )
                })
            },

            async fetchingBonus() {
                this.loading = true
                let res = await this.$refs.netBonuREF.fetching(this.me)
                this.bonuss = res // this.$store.state.bonus_statement
                console.log('奖金报表 =', res, this.me)
                setTimeout(e => this.loading = false, 200)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>