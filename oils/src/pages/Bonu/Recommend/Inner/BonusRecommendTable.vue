<template>
    <div class="" v-if="childs.length > 0">

        <div class="qiong-td qiong-line-hight-20"
            v-for="(v, i) in childs" :key="i"

            :class="{ 'qiong-td-zebra': v.index % 2 == 0 }"
        >
            <div class="qiong-wide-13 pl-7">{{ v.member_code }}</div>
            <div class="qiong-wide-23">{{ v.display_name }}</div>
            <div class="qiong-wide-9">
                <level-viewing :item="v.vip.code"></level-viewing>
            </div>

            <div class="qiong-wide-10">{{ v.bonu_period.order_recommend }}</div>
            <div class="qiong-wide-10">
                {{ view.ser_timed(v.bonu_period.order_date) }}
            </div>

            <div class="qiong-wide-5 text-center pr-0">{{ v.bonu_period.index_recommend }}</div>
            <div class="qiong-wide-11 text-center pr-0">{{ ser_ratio(v.bonu_period.index_recommend) }}</div>
            <div class="qiong-wide-7">
                {{ v.bonu_period.pv_first }}
            </div>
            <div class="qiong-wide-6 pr-0">
                <div v-if="v.bonu_period.usd_recommend">
                    <span>$&nbsp;</span>
                    {{ view.price_view( v.bonu_period.usd_recommend ) }}
                </div>
            </div>
            <div class="qiong-wide-6">
                <qiong-icon-inset :arg="v" @done_Father="openCenter"></qiong-icon-inset>
            </div>
        </div>
    
    </div>

    <qiong-empty v-else></qiong-empty>

</template>

<script>
import app_init from '@/common/es/app_init/index'

import QiongIconFlat from '../../../../components/Qiong/Button/QiongIconFlat.vue'
import QiongIconInset from '../../../../components/Qiong/Button/QiongIconInset.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import CountAddAnime from '../../../../components/Anime/Font/CountAddAnime.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
    export default {
        components: { LevelViewing, QiongIconFlat, QiongIconInset, CountAddAnime, QiongEmpty },
        props: {
            childs: {
                type: Array
            }
        },
        name: '',
        data() {
            return {
                ratios: [ ]
            }
        },
        created() {
            this.ratios = app_init.conf.RECOMMEND_RATIOS
        },
        methods: {
            openCenter(user) {
                this.$router.push({ path: '/home/bonus/recommend/' , query: { 'member_code': user.member_code } })
            },

            ser_ratio(index) {
                let res = ''
                if (index) {
                    res = this.ratios[ index - 1 ]
                }

                if (res) {
                    res *= 100
                    res += '%'
                }

                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>