<template>
    <div class="px-7" v-if="items && items.length > 0">
        <div class="qiong-td qiong-txt-td py-2 lh-def fx-l"
            v-for="(v, i) in many" :key="i"
        >
            <div class="qiong-wide-12">
                <extra-lp-opera-view :v="v.change_type"></extra-lp-opera-view>
            </div>

            <div class="qiong-wide-10">{{ v.user }}</div>
            <div class="qiong-wide-11">
                <span v-if="v.order_id">{{ v.order_id }}</span><span v-else>--</span>
            </div>

            <div class="qiong-wide-11">
                {{ v.wallet_original_value }}
            </div>

            <div class="qiong-wide-15 fw-b">
                <span v-if="v.is_add">+</span>
                <span v-else>-</span>
                <span class="px-1">
                    {{ v.hkd }}
                </span>
            </div>

            <div class="qiong-wide-12">{{ v.wallet_new_value }}</div>
            
            <div class="qiong-wide-15">{{ view.ser_timed( v.date, false, false ) }}</div>
            <div class="qiong-wide-13">
                {{ view.view_remark(v.change_detail) }}
            </div>
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
                    e.is_add = !(e.wallet_change.startsWith('-'))
                    const n = Number.parseFloat(e.wallet_change)
                    e.hkd = n > 0 ? n : (0 - n); return e
                }) : []
                return res
            }
        },
        mounted() { },
        components: { QiongSpace, QiongEmpty, LoyaltyPvViewing, ExtraLpOperaView },
    }
</script>