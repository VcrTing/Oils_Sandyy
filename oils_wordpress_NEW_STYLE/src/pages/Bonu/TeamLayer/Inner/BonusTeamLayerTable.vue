<template>
    <div class="" v-if="childs.length > 0">
        <div class="qiong-td qiong-line-hight-20"
            v-for="(v, i) in childs" :key="i"
            :class="{ 'qiong-td-zebra': v.index % 2 == 0 }"
        >

            <div class="qiong-wide-13 pl-7">{{ v.member_code }}</div>
            <div class="qiong-wide-30"
                    :class="{ 'txt-leader': v.bonu_period.Rank > conf.RANK_LEAD }"
            >{{ v.display_name }}</div>

            
            <div class="qiong-wide-9">
                <level-viewing :item="v.vip.name + '_' + v.vip.star" class="d-inline"
                    :class="{ 'txt-leader': v.bonu_period.Rank > conf.RANK_LEAD }"
                ></level-viewing>
                <!-- leader-tag-viewing :rank="v.bonu_period.Rank"></leader-tag-viewing -->
            </div>
            <div class="qiong-wide-1 pr-0">&nbsp;</div>

            <div class="qiong-wide-6 pr-0">{{ v.bonu_period.team_contribution.order_pv }}</div>
            <div class="qiong-wide-9 text-center pr-0">{{ v.bonu_period.team_contribution.payment_level }}</div>

            <div class="qiong-wide-10 text-center pr-0">
                <up-comp-viewing :ipv="v.bonu_period.team_contribution.order_pv"></up-comp-viewing>
            </div>
            <div class="qiong-wide-10 text-center pr-0">{{ v.bonu_period.team_contribution.bonus_percentage }}</div>
            <div class="qiong-wide-1 pr-0">&nbsp;</div>

            <div class="qiong-wide-7 pr-0">
                <div v-if="v.bonu_period.team_contribution.bonus_pv">
                    <span>$&nbsp;</span>
                    {{ view.price_view( v.bonu_period.team_contribution.bonus_pv) }}
                </div>
            </div>
            <div class="qiong-wide-4 pr-0">
                <qiong-icon-inset :arg="v" @done_Father="openCenter"></qiong-icon-inset>
            </div>

        </div>
    </div>

    <qiong-empty v-else></qiong-empty>
</template>

<script>
import CountAddAnime from '../../../../components/Anime/Font/CountAddAnime.vue'
import QiongIconFlat from '../../../../components/Qiong/Button/QiongIconFlat.vue'
import QiongIconInset from '../../../../components/Qiong/Button/QiongIconInset.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import UpCompViewing from '../../../../components/Viewing/Bonus/UpCompViewing.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import LeaderTagViewing from '../../../../components/Viewing/User/LeaderTagViewing.vue'

    export default {
        components: { LevelViewing, QiongIconFlat, QiongIconInset, QiongEmpty, UpCompViewing, CountAddAnime, LeaderTagViewing },
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
        computed: {
        },
        methods: {
            

            openCenter(user) {
                this.$router.push({ path: '/home/bonus/active_layer/' , query: { 'member_code': user.member_code } })
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>