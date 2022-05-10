<template>
    <div class="" v-if="childs.length > 0">

        <div class="qiong-td qiong-line-hight-20"
            v-for="(v, i) in childs" :key="i"
            :class="{ 'qiong-td-zebra': v.index % 2 == 0 }"
        >
            <div class="qiong-wide-14 pl-7 pr-0">{{ v.member_code }}</div>
            <div class="qiong-wide-40">{{ v.display_name }}</div>
            <div class="qiong-wide-10">
                <level-viewing :item="v.vip.name + '_' + v.vip.star"></level-viewing>
            </div>
    
            <div class="qiong-wide-10">
                {{ v.sponsor_id }}
            </div>
            <div class="qiong-wide-10 text-center pr-0">{{ house_level(v) }}</div>
            <div class="qiong-wide-8">
                {{ order_pv(v) }}
            </div>
            <div class="qiong-wide-6">
                <qiong-icon-inset :arg="v" @done_Father="openCenter"></qiong-icon-inset>
            </div>
        </div>
    
    </div>
    
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongIconFlat from '../../../../components/Qiong/Button/QiongIconFlat.vue'
import QiongIconInset from '../../../../components/Qiong/Button/QiongIconInset.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import ActiveHouseViewing from '../../../../components/Viewing/Bonus/ActiveHouseViewing.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
    export default {
  components: { LevelViewing, QiongIconFlat, QiongIconInset, ActiveHouseViewing,
    QiongEmpty },
        props: {
            childs: {
                type: Array
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            order_pv(v) {
                let res = 0
                v.bonu_period.active_contribution.map(e => {
                    res = this.view.floatAdd(
                        e.order_pv,
                        res
                    )
                })
                res = (res > 0) ? res : ''
                return res
            },
            house_level(v) {
                return v.bonu_period.active_contribution[0].level
            },

            usd(v) {
                let res = 0
                v.bonu_period.active_contribution.map(e => {
                    res = this.view.floatAdd(
                        e.order_pv,
                        res
                    )
                })
                return res
            },

            openCenter(user) {
                this.$router.push({ path: '/home/bonus/active_house/' , query: { 'member_code': user.member_code } })
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>