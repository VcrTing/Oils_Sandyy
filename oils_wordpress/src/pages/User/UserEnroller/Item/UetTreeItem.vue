<template>
    <div class="qiong-td qiong-td-h-full qiong-line-hight-15">

        <div class="qiong-wide-11">{{ _item.member_code }}</div>
        <div class="qiong-wide-14">{{ view.if_def(_item.enroller_id) }}</div>
        <div class="qiong-wide-11 text-center pr-0">{{ _item.phone }}</div>

        <div class="qiong-wide-11 text-center pr-0">
            {{ _item.index }}
        </div>
        
        <div class="qiong-wide-10">{{ _item.bonu_period.individual_pv }}</div>
        <div class="qiong-wide-12 pr-0 flex-middle">
            <level-viewing :item="_item.vip.code" class="d-inline"
            ></level-viewing>
            <!-- leader-tag-viewing :rank="_item.bonu_period.Rank"></leader-tag-viewing -->
        </div>

        <div class="qiong-wide-13 text-center pr-0">{{ order_num(_item.orders_period) }}</div>

        <div class="qiong-wide-10">{{ view.if_def(_item.bonu_period.pv_recommend) }}</div>
        <div class="qiong-wide-8 pr-0">
            <qiong-icon-inset :color="''" 
                v-if="_item.index != 0 && ( _item.children.length > 0 )"
                :arg="_item" @done_Father="openCenter"
            ></qiong-icon-inset>
        </div>
    </div>
</template>

<script>
import QiongIconInset from '../../../../components/Qiong/Button/QiongIconInset.vue'
import PayIndexViewing from '../../../../components/Viewing/Bonus/PayIndexViewing.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import LeaderTagViewing from '../../../../components/Viewing/User/LeaderTagViewing.vue'
    export default {
        components: { QiongIconInset, LevelViewing, PayIndexViewing, LeaderTagViewing },
        inject: [ 'reload' ],
        props: {
            _item: {
                type: Object
            },
            me: {
                type: Object
            }
        },
        name: '',
        data() {
            return {
                ratios: [ ],
                index: 0,
            }
        },
        created() {
            // this.ratios = this.bonus.conf.RECOMMEND_RATIOS
        },
        mounted() {
            
        },
        methods: {
            order_num(op) {
                let res = 0
                if (op) {
                    res = op.length
                }
                return res
            },
            
            openCenter(item) {
                
                this.$router.push({
                    path: '/home/user/enroller', query: { 'member_code': item.member_code } })

                this.reload()
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>