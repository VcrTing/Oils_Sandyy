<template>
    <div class="qiong-line-hight-21" v-if="items.length > 0">

        <div class="qiong-td" v-for="(v, i) in items" :key="i">
            <div class="qiong-wide-11">
                <loyalty-code-viewing v-if="v.order_uuid" :sku="v.order_uuid + ''"></loyalty-code-viewing>
            </div>
            <div class="qiong-wide-12">
                {{ view.ser_timed(v.date) }}
            </div>

            <div class="qiong-wide-7">
                {{ v.order_pv }}
            </div>
            <div class="qiong-wide-8">
                <span v-if="v.LP_percentage">
                    {{ v.LP_percentage * 100 }}&nbsp;%
                </span>
            </div>
            <div class="qiong-wide-13">
                <loyalty-pv-viewing :lp="v.LP_difference" :is_add="v.is_add"></loyalty-pv-viewing>
            </div>

            <div class="qiong-wide-10 text-center pr-0">
                <in-money-viewing :status="v.type" :is_sue_time="v.issue_date ? true : false"></in-money-viewing>
            </div>
            <div class="qiong-wide-3 pr-0"></div>

            <div class="qiong-wide-12">
                <loyalty-issue-date-viewing :is_sue="v.issue_date ? true : false">
                    {{ v.issue_date }}
                </loyalty-issue-date-viewing>
            </div>

            <div class="qiong-wide-11">
                {{ v.expire_date }}
            </div>

            <div class="qiong-wide-13">
                備註
            </div>
        </div>
    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import InMoneyViewing from '../../../../components/Viewing/Record/InMoneyViewing.vue'
import LoyaltyCodeViewing from '../../../../components/Viewing/Record/LoyaltyCodeViewing.vue'
import LoyaltyIssueDateViewing from '../../../../components/Viewing/Record/LoyaltyIssueDateViewing.vue'
import LoyaltyPvViewing from '../../../../components/Viewing/Record/LoyaltyPvViewing.vue'
    export default {
  components: { InMoneyViewing, LoyaltyPvViewing, LoyaltyCodeViewing, QiongEmpty, LoyaltyIssueDateViewing },
        name: '',
        props: {
            items: {
                type: Array,
                default: [ ]
            }
        },
        data() {
            return {
                data: [
                    {
                        sku: 'HK0000001', order_date: '2021年10月29日', inmoney_date: '2021年10月29日', out_date: '',
                        pv: '', pv_ratio: '', typed: 1, lp: 300, is_add: false
                    },
                    {
                        sku: 'HK0000002', order_date: '2021年10月28日', inmoney_date: '2021年10月29日', out_date: '2021年11月19日',
                        pv: 20, pv_ratio: 7, typed: 0, lp: 200, is_add: true
                    },
                    {
                        sku: 'HK0000002', order_date: '2021年10月28日', inmoney_date: '2021年10月29日', out_date: '2021年11月19日',
                        pv: 20, pv_ratio: 7, typed: 2, lp: 200, is_add: true
                    },
                    {
                        sku: 'HK0000002', order_date: '2021年10月28日', inmoney_date: '2021年10月29日', out_date: '2021年11月19日',
                        pv: 20, pv_ratio: 7, typed: 3, lp: 200, is_add: true
                    },
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="sass" scoped>
    
</style>