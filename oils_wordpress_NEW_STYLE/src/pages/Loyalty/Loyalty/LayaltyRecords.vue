<template>
    <v-container fluid class="qiong-txt-td">
            <member-msg-widget :_code="mine.member_code"></member-msg-widget>
            <div class="pt-6"></div>

                    <loyalty-count-msg :_item="my_lps" :_page="page" :_code="member_code" v-if="!init"></loyalty-count-msg>

                    <div class="pt-6">
                        <qiong-header-filter>
                            <span slot="header">
                                <span v-if="page == 1">LP 入賬總結</span>
                                <span v-if="page == 2">LP 等級概覽</span>
                            </span>
                            <div slot="filter">
                                <button class="btn-filter an_lefter" @click="page = 1" :class="{ 'btn-filter_active': page == 1 }">LP 總結</button>
                                <button class="btn-filter" @click="page = 2" :class="{ 'btn-filter_active': page == 2 }">等級概覽</button>
                            </div>
                        </qiong-header-filter>

                        <my-feng-record class="mobie-table" :_item="my_lps" v-if="page == 1"></my-feng-record>
                        <my-level-course class="mobie-table" :_item="my_lps" v-if="page == 2"></my-level-course>
                    </div>

                    <div class="pt-6"></div>

                    <qiong-header-filter>
                        <div slot="header">{{ $t('HEADER.loyalty_record') }}</div>
                        <lr-header-filter class="mobie-pt-12" slot="filter" @sign_Father="fiterLoading"></lr-header-filter>
                    </qiong-header-filter>

                    <qiong-panel-element class="mobie-table" :need_space="false">

                        <lr-tr class="extra-tr px-7"></lr-tr>
                        <lr-data-table v-if="!loading" :items="records"></lr-data-table>
                        <qiong-loading v-else></qiong-loading>
                    </qiong-panel-element>

                    <qiong-sub-result :res="result" :bigger="1" :need_line="false" class="pr-4">
                        <div class="next-header qiong-txt-14 mb-1">Total</div>
                    </qiong-sub-result>

            <qiong-space :space="'5vh'"></qiong-space>
            <qiong-space :space="'5vw'"></qiong-space>

            <loyalty-wallet-me ref="walletREF"></loyalty-wallet-me>
            <loyalty-records-me ref="recordREF"></loyalty-records-me>

            <tool-ready @sign="initMe" v-if="mine && mine.member_code"></tool-ready>
            <table-pager-footer class="mobie-show"></table-pager-footer>
    </v-container>
</template>

<script>
import LoyaltyRecordsMe from '../../../components/Data/Loyalty/LoyaltyRecordsMe.vue'
import LoyaltyWalletMe from '../../../components/Data/Loyalty/LoyaltyWalletMe.vue'
import ToolReady from '../../../components/Init/Ready/ToolReady.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongSubResult from '../../../components/Qiong/Pager/QiongSubResult.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import LrDataTable from './Body/LrDataTable.vue'
import LoyaltyCountMsg from './CountMsg/LoyaltyCountMsg.vue'
import LrHeaderFilter from './Inner/LrHeaderFilter.vue'
import LrTr from './Inner/LrTr.vue'
import MyFengRecord from './MyRecord/MyFengRecord.vue'
import MyLevelCourse from './MyRecord/MyLevelCourse.vue'

    export default {
        name: '',
        components: {
            MemberMsgWidget,
            QiongPanelElement,
            QiongHeaderFilter,
                LrHeaderFilter,
                LrDataTable,
                LrTr,
                QiongSpace,
                QiongSubResult,
                LoyaltyCountMsg,
                QiongLoading,
                LoyaltyRecordsMe,
                TablePagerFooter,
                MyFengRecord,
                MyLevelCourse,
                LoyaltyWalletMe,
                ToolReady
        },
        data() {
            return {
                page: 1,

                init: true,
                loading: true,

                member_code: null,

                records: [ ],

                records_ORIGIN: [ ],

                in_res: 0,
                out_res: 0,
                res_res: 0,
                issue_res: 0,

                my_lps: null
            }
        },
        inject: [ 'reload' ],
        watch: { 
            $route(to, from) { if (from.query) { this.init = false; this.reload(); this.init = true } }
        },
        computed: {
            mine() { return this.$store.state.user_backend },
            result() {
                let res = [
                    {
                        txt: '總計',
                        content: this.in_res
                    },
                    {
                        txt: '支出',
                        content: this.out_res
                    },
                    {
                        txt: '現可用的積分',
                        content: this.res_res
                    }
                ]
                return res
            },
            
        },
        async created() { console.log(' ') },
        methods: {
            async initMe() {
                this.valuation()
                try {
                    await this.lunchingRecord()
                    this.my_lps = await this.$refs.walletREF.lunching(this.member_code)
                    console.log('我的 LP 账户 =', this.my_lps)
                } catch(err) { }
                this.init = false
            },
            valuation() { this.member_code = this.mine.member_code },

            _runRes(res) {
                this.in_res = res.res_in
                this.out_res = res.res_ot
                this.issue_res = res.res_issue

                res = this.view.floatSub( this.in_res, this.out_res.toFixed(1) )
                res = res ? this.view.floatSub( res, res.res_issue ) : 0
                this.res_res = (res && res > 0) ? res : 0 
            },

            async lunchingRecord() {
                this.loading = true
                let res = await this.$refs.recordREF.lunchingMonthly(this.member_code)

                if (res) {
                    this.records = res.records
                    this.records_ORIGIN = res.records
                    this._runRes(res)
                    this.loading = false
                }
            },

            fiterLoading(v) {
                this.loading = true
                let res = this.records_ORIGIN

                if (v) { res = this._Filter(v) }
                res = res.map(e => { e.LP_difference = e.LP_difference_ORIGIN; return e })
                res = this.$refs.recordREF.serial_Record(res)

                this._runRes(res)
                this.records = res.records

                setTimeout(e => { this.loading = false }, 600)
            },

            _Filter(v) {
                return this.records_ORIGIN.filter(e => {
                    let inner = true 
                    for (let k in v) {
                        const i = v[k]
                        if (k == 'issue_date') {
                            inner = (e.issue_date.toString().startsWith('f') == !i)
                        } else if (k == 'type') {
                            inner = (i.indexOf(e.type) > -1)
                        } else if (k == 'is_add') {
                            inner = (e.is_add == i)
                        }
                    }
                    return inner
                })
            },
        }
    }
                    /*

                    let aa = JSON.parse(JSON.stringify(
                        res.records
                    ))
                    aa[0].type = 'reward'
                    aa[1].type = 'LP_reward'
                    res.records[0].type = 'other'
                    res.records.push(aa[0], aa[1])


                        <!--v-row class="fx-s bg-FFF extra-page-header px-7 py-3">
                            <div>
                                <div class="bonus-tip">&nbsp;&nbsp;&nbsp;                          
                                    <span v-if="page == 1">LP 入賬記錄</span>
                                    <span v-if="page == 2">會員等級概覽</span>
                                </div>
                            </div>
                            <div>
                                <button class="btn-filter" @click="page = 1" :class="{ 'btn-filter_active': page == 1 }">LP記錄</button>
                                <button class="btn-filter" @click="page = 2" :class="{ 'btn-filter_active': page == 2 }">等級概覽</button>
                            </div>
                        </!--v-row-->
                    */
</script>

<style lang="sass" scoped>
    
</style>