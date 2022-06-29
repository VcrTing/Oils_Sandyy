<template>
    <div class="px-7" v-if="items && items.length > 0">
        <div class="qiong-td qiong-txt-td py-2 lh-def"
            v-for="(v, i) in items" :key="i"
        >
            <div class="qiong-wide-12">
                <extra-lp-opera-view :v="v.typed"></extra-lp-opera-view>
            </div>
            <div class="qiong-wide-8 t-c">{{ v.numb }}</div>
            <div class="qiong-wide-4 pr-0">&nbsp;</div>

            <div class="qiong-wide-18">{{ view.ser_timed( v.date_order, false, false ) }}</div>
            <div class="qiong-wide-12">{{ v.price }}<span>&nbsp;HKD</span></div>
            <div class="qiong-wide-12">
                <loyalty-pv-viewing :lp="v.lp" :is_add="v.is_add"></loyalty-pv-viewing>
            </div>
            <div class="qiong-wide-19">{{ view.ser_timed( v.date_transfer, false, false ) }}</div>
            <div class="qiong-wide-15">{{ v.local }}</div>
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
  components: { QiongSpace, QiongEmpty, LoyaltyPvViewing, ExtraLpOperaView },
        name: '',
        data() {
            return {
                items: [
                    { 
                        typed: 'issue', numb: '8682', date_order: '2021-12-12 12:23', price: '120', is_add: true, lp: 12, date_transfer: '2012-12-12 12:23', local: '火炭'
                    },
                    { 
                        typed: 'deactivate', numb: '8683', date_order: '2021-12-12 12:23', price: '120', is_add: false, lp: 12, date_transfer: '2012-12-12 12:23', local: '火炭'
                    },
                    { 
                        typed: 'reward', numb: '8684', date_order: '2021-12-12 12:23', price: '120', is_add: false, lp: 12, date_transfer: '2012-12-12 12:23', local: '尖沙咀'
                    },
                    { 
                        typed: 'LP_reward', numb: '8685', date_order: '2021-12-12 12:23', price: '120', is_add: true, lp: 12, date_transfer: '2012-12-12 12:23', local: '火炭'
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>