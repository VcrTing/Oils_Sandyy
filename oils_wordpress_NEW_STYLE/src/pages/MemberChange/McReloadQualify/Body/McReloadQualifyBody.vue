<template>
    <div>

        <div class="lh-18 pb-2 td-def" v-if="_items && _items.length > 0">

            <div class="qiong-pt-3 pb-1 td-hr px-7"
                v-for="(v, i) in _items" :key="i">

                <nav class="qiong-td qiong-txt-td ">
                    <div class="qiong-wide-8 fw-b">
                        {{ v.user.member_code }}
                    </div>
                    <div class="qiong-wide-20">
                        {{ v.user.display_name }}
                    </div>
                    <div class="qiong-wide-11">
                        <rank-txt-viewing :num="v.rank"></rank-txt-viewing>
                    </div>
                    <div class="qiong-wide-15">
                        {{ v.changer }}
                    </div>
                    <div class="qiong-wide-10 pr-0">
                        {{ view.ser_timed( v.date, false ) }}
                    </div>
                    <div class="qiong-wide-15 pr-0">
                        {{ v.change_display }}
                    </div>
                    <div class="qiong-wide-15 fx-s pr-0">
                        {{ v.remark }}
                    </div>
                    <div class="qiong-wide-6 t-r pr-0">
                        <v-icon class="qiong-txt-14 td-opt-icon">mdi-pencil</v-icon>
                    </div>
                </nav>
            </div>
        </div>
        <qiong-empty v-else></qiong-empty>
    </div>
</template>

<script>
import QiongEmpty from '@/components/Qiong/Ui/QiongEmpty.vue'
import RankTxtViewing from '@/components/Viewing/User/RankTxtViewing.vue'
    export default {
  components: { QiongEmpty, RankTxtViewing },
        props: [ '_items' ],
        data() {
            return {
                itemss: [ ],
                items: [
                    { member_code: '202001', display_name: 'ERic', rank: 2, changer: 'sandy@admin.com', in_date: '2021-12-12 12:12', published_at: '2021-12-12 12:10', mark: '就診' },
                    { member_code: '202002', display_name: 'ERic 2', rank: 8, changer: 'sandy@admin.com', in_date: '2021-01-12 12:12', published_at: '2021-01-12 12:10', mark: '留學' },
                    { member_code: '202003', display_name: 'ERic 3', rank: 4, changer: 'sandy@admin.com', in_date: '2021-02-12 12:12', published_at: '2021-02-12 12:10', mark: '有事出門' },
                    { member_code: '202004', display_name: 'ERic 4', rank: 0, changer: 'sandy@admin.com', in_date: '2021-07-12 12:12', published_at: '2021-07-12 12:10', mark: '有事出門' },
                    
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>