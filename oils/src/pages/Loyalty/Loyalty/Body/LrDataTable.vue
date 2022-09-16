<template>
    <div class="qiong-line-hight-21 pb-3" v-if="items && items.length > 0">

        <div class="qiong-td fx-l extra-td py-2 px-7 lp-td-br" v-for="(v, i) in items" :key="i"
        
            :class="{ 'br-none': i == (items.length - 1) }"
        >

            <div class="qiong-wide-10 pr-0">
                <in-money-viewing :status="v.type" :is_sue_time="v.issue_date ? true : false"></in-money-viewing>
            </div>

            <div class="qiong-wide-13 t-l pr-0 pl-3">
                <loyalty-code-viewing v-if="v.order_uuid" :sku="v.order_uuid + ''"></loyalty-code-viewing>
            </div>

            <div class="qiong-wide-18 pl-3">
                <span v-if="v.ordered_date">
                    {{ view.ser_timed(v.ordered_date, false, false) }}
                </span>
            </div>

            <div class="qiong-wide-7">
                {{ v.order_pv }}
            </div>
            <div class="qiong-wide-10">
                <span v-if="v.LP_percentage">
                    {{ v.LP_percentage * 100 }}&nbsp;%
                </span>
            </div>
            <div class="qiong-wide-13">
                <loyalty-pv-viewing class="fx-l" :lp="v.LP_difference" :is_add="v.is_add"></loyalty-pv-viewing>
            </div>

            <!--div class="qiong-wide-13">
                <span v-if="!v.issue_date" class="txt-sus">
                    {{ view.ser_timed(v.expected_issue_date) }}
                </span>
                <span v-else>
                    {{ view.ser_timed(v.issue_date) }}
                </span>
            </div-->

            <div class="qiong-wide-12">
                <span v-if="v.is_add">
                    <loyalty-issue-date-viewing :_issue="v.issue_date">
                        {{ v.expire_date }}
                    </loyalty-issue-date-viewing>
                </span>
            </div>

            <div class="qiong-wide-17">
                {{ v.remark }}
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
        mounted() {
        }
    }
</script>

<style lang="sass" scoped>
.ex tra-td
    border-top-left-radius: 0px
    border-bottom-left-radius: 0px
    border-top-right-radius: 2em
    border-bottom-right-radius: 2em
    &:hover
        // background: #f8f8f8
</style>