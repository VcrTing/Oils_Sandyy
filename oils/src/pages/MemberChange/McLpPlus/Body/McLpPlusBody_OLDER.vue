<template>
    <div>

        <div class="lh-18 pb-2 td-def" v-if="_items && _items.length > 0">

            <div class="qiong-pt-3 pb-1 td-hr px-7"
                v-for="(v, i) in _items" :key="i">

                <nav class="qiong-td qiong-txt-td ">
                    <div class="qiong-wide-8 fw-b">
                        {{ v.member_code }}
                    </div>
                    <div class="qiong-wide-20">
                        {{ v.display_name }}
                    </div>
                    <div class="qiong-wide-11">
                        <span v-if="v.is_plus" class="txt-sub_x2">+&nbsp;</span>
                        <span v-else class="txt-sub_x2">-&nbsp;</span>
                        {{ v.lp }}&nbsp;LP
                    </div>
                    <div class="qiong-wide-15">
                        sandyy@123.com
                    </div>
                    <div class="qiong-wide-10 pr-0">
                        {{ view.ser_timed( v.in_date, false ) }}
                    </div>
                    <div class="qiong-wide-15 pr-0">
                        {{ view.ser_timed( v.published_at, false, false ) }}
                    </div>
                    <div class="qiong-wide-15 fx-s pr-0">
                        {{ v.mark }}
                    </div>
                    <div class="qiong-wide-6 t-r pr-0">
                        <!--v-icon class="qiong-txt-14 td-opt-icon">mdi-pencil</!--v-icon-->
                    </div>
                </nav>
            </div>
        </div>
        <qiong-empty v-else></qiong-empty>
    </div>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
    export default {
  components: { QiongEmpty },
        name: '',
        props: [ '_items' ],
        data() {
            return {
                itemss: [ ],
                items: [
                    { member_code: '202001', display_name: 'ERic', lp: '20', is_plus: true, in_date: '2021-12-12 12:12', published_at: '2021-12-12 12:10', mark: '參加講座獲得了積分' },
                    { member_code: '202002', display_name: 'ERic 2', lp: '20', is_plus: true, in_date: '2021-12-12 12:12', published_at: '2021-12-12 12:10', mark: '積極推薦sandyy獲得積分' },
                    { member_code: '202003', display_name: 'ERic 3', lp: '9999', is_plus: true, in_date: '2021-12-12 12:12', published_at: '2021-12-12 12:10', mark: '參加講座獲得了積分' },
                    { member_code: '202004', display_name: 'ERic 4', lp: '9999', is_plus: true, in_date: '2021-12-12 12:12', published_at: '2021-12-12 12:10', mark: '參加講座獲得了積分' },
                    { member_code: '202005', display_name: 'ERic 5', lp: '9999', is_plus: true, in_date: '2021-12-12 12:12', published_at: '2021-12-12 12:10', mark: '參加講座獲得了積分' },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>