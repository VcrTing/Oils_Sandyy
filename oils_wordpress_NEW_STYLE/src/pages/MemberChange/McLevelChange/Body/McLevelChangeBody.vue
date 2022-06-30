<template>
    <div>

        <div class="lh-18 pb-2 td-def" v-if="_items && _items.length > 0">

            <div class="qiong-pt-3 pb-1 td-hr px-7"
                v-for="(v, i) in _items" :key="i">

                <nav class="qiong-td qiong-txt-td fx-l">
                    <div class="qiong-wide-8 fw-b">
                        {{ v.user.member_code }}
                    </div>
                    <div class="qiong-wide-24">
                        {{ v.user.display_name }}
                    </div>
                    <div class="qiong-wide-9 pl-1">
                        <rank-txt-viewing v-if="v.change" :num="v.change.origin" :class="{ 'txt-sus': (v.change.origin == 0) }"></rank-txt-viewing>
                    </div>
                    <div class="qiong-wide-10">
                        <rank-txt-viewing v-if="v.change" :num="v.change.now" :class="{ 'txt-sus': (v.change.now == 0) }"></rank-txt-viewing>
                    </div>
                    <div class="qiong-wide-10 pr-0">
                        {{ v.change_period }}
                    </div>
                    <div class="qiong-wide-15 pr-0">
                        {{ view.ser_timed( v.date, false, false ) }}
                    </div>
                    <div class="qiong-wide-24 fx-s pr-0">
                        {{ v.remark }}
                    </div>
                </nav>
            </div>
        </div>
        <qiong-empty v-else></qiong-empty>
    </div>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import RankTxtViewing from '../../../../components/Viewing/User/RankTxtViewing.vue'
    export default {
  components: { QiongEmpty, RankTxtViewing },
        name: '',
        props: [ '_items' ],
        data() {
            return {
                itemss: [ ],
                items: [
                    { member_code: '202001', display_name: 'ERic', rank: 2, rank_origin: 1, in_date: '2021-12-12 12:12', published_at: '2021-12-12 12:10', mark: '參加講座獲得了積分' },
                    { member_code: '202002', display_name: 'ERic 2', rank: 8, rank_origin: 1, in_date: '2021-01-12 12:12', published_at: '2021-01-12 12:10', mark: '參加講座獲得了積分' },
                    { member_code: '202003', display_name: 'ERic 3', rank: 4, rank_origin: 3, in_date: '2021-02-12 12:12', published_at: '2021-02-12 12:10', mark: '參加講座獲得了積分' },
                    { member_code: '202004', display_name: 'ERic 4', rank: 0, rank_origin: 2, in_date: '2021-07-12 12:12', published_at: '2021-07-12 12:10', mark: '參加講座獲得了積分' },
                    
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>