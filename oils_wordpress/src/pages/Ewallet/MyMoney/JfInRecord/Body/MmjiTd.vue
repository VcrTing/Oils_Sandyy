<template>
    <div class="px-7" v-if="items && items.length > 0">
        <div class="qiong-td qiong-txt-td py-3 lh-def"
            v-for="(v, i) in many" :key="i"
        >
            <div class="qiong-wide-11">
                <extra-lp-opera-view :v="v.type"></extra-lp-opera-view>
            </div>
            <div class="qiong-wide-8 t-c pr-0">{{ v.order_uuid ? v.order_uuid : '--' }}</div>
            <div class="qiong-wide-4">&nbsp;</div>

            <div class="qiong-wide-12">
                <span v-if="v.order_pv">
                    {{ v.order_pv ? v.order_pv : 0 }}&nbsp;PV
                </span>
            </div>
            <div class="qiong-wide-8">
                <span v-if="v.LP_percentage">
                    {{ v.LP_percentage * 100 }} %
                </span>
            </div>

            <div class="qiong-wide-15">
                <loyalty-pv-viewing :lp="v.lp" :is_add="v.is_add"></loyalty-pv-viewing>
            </div>

            <div class="qiong-wide-13">{{ v.wallet_after }}</div>
            
            <div class="qiong-wide-16">{{ view.ser_timed( v.date, false, false ) }}</div>
            <div class="qiong-wide-13">{{ v.remark }}</div>
        </div>
        <qiong-space :space="'12px'"></qiong-space>
    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
import QiongEmpty from '../../../../../components/Qiong/Ui/QiongEmpty.vue'
import LoyaltyPvViewing from '../../../../../components/Viewing/Record/LoyaltyPvViewing.vue'
import ExtraLpOperaView from '../../../../../extra/view/lp/ExtraLpOperaView.vue'
    export default {
        props: [ 'items' ],
        computed: {
            many() {
                let res = this.items
                res = res ? res.map(e => {
                    e.is_add = e.LP_difference.startsWith('+')
                    const n = Number.parseFloat(e.LP_difference)
                    e.lp = n > 0 ? n : (0 - n); return e
                }) : []
                return res
            }
        },
        components: { QiongSpace, QiongEmpty, LoyaltyPvViewing, ExtraLpOperaView },
    }
</script>