<template>
    <div class="qiong-td qiong-td-h-full qiong-line-hight-15">

        <div class="qiong-wide-11">{{ _item.member_code }}</div>
        <div class="qiong-wide-15">{{ view.if_def(_item.sponsor_id) }}</div>
        <div class="qiong-wide-11 text-center pr-0">{{ _item.phone }}</div>

        <div class="qiong-wide-11 text-center pr-0">
            {{ _item.index }}
        </div>
        
        <div class="qiong-wide-9">{{ _item.bonu_period.individual_pv }}</div>
        <div class="qiong-wide-12 pr-0">
            <level-viewing :item="_item.vip.code"></level-viewing>
        </div>

        <div class="qiong-wide-13 text-center pr-0">{{ order_num(_item.orders_period) }}</div>

        <div class="qiong-wide-10">{{ _item.bonu_period.organization_pv }}</div>
        <div class="qiong-wide-8 pr-0">
            <qiong-icon-inset :color="''" 
                v-if="_item.index != 0 && _item.has_child"
                :arg="_item" @done_Father="openCenter"
            ></qiong-icon-inset>
        </div>
    </div>
</template>

<script>
import QiongIconInset from '../../../../components/Qiong/Button/QiongIconInset.vue'
import PayIndexViewing from '../../../../components/Viewing/Bonus/PayIndexViewing.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
    export default {
        components: { QiongIconInset, LevelViewing, PayIndexViewing },
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
                // /home/user/sponser
                

                this.$router.push({
                    path: '/home/user/sponser', query: { 'member_code': item.member_code } })

                this.reload()
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>