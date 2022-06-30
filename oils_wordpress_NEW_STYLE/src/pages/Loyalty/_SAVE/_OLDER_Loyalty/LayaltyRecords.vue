<template>
    <v-container fluid class="qiong-txt-td">

        <v-row>
            <v-col :cols="12" :sm="3" class="mobie-col">
                <loyalty-count-panel class="pc-pr-3"></loyalty-count-panel>

                <qiong-space :space="'24px'" class="mobie-view"></qiong-space>
            </v-col>
            <v-col :cols="12" :sm="9" class="mobie-col">
                

                <member-msg-widget :_code="member_code" v-if="!init"></member-msg-widget>
                <div  class="pt-6"></div>

                <!-- v-row>
                    <v-col :cols="4">
                        <loyalty-my-feng></loyalty-my-feng>
                    </v-col>
                    <v-col :cols="8" -->
                        <loyalty-count-msg :_code="member_code" v-if="!init"></loyalty-count-msg>

                        <div  class="pt-6"></div>

                        <qiong-header-filter>
                            <div slot="header">{{ $t('HEADER.loyalty_record') }}</div>
                            <lr-header-filter slot="filter" @sign_Father="fiterLoading"></lr-header-filter>
                        </qiong-header-filter>

                        <qiong-panel-element class="mobie-table" :need_space="false">

                            <div class="px-7 qiong-pb-10">

                                <qiong-space :space="'0.2vw'"></qiong-space>
                                <lr-tr></lr-tr>
                                <qiong-space :space="'0.1vw'"></qiong-space>

                                <lr-data-table v-if="!loading" :items="records"></lr-data-table>
                                <qiong-loading v-else></qiong-loading>
                            </div>

                        </qiong-panel-element>

                        <qiong-sub-result :res="result" :bigger="1" :need_line="false" class="pr-4">
                            <div class="next-header qiong-txt-14 mb-1">Total</div>
                        </qiong-sub-result>
                <!--
                    </v-col>
                </v-row -->

                <qiong-space :space="'5vh'"></qiong-space>
                <qiong-space :space="'5vw'"></qiong-space>
            </v-col>
        </v-row>

            <location-me ref="locaMe"></location-me>
            <loyalty-records-me ref="recordREF"></loyalty-records-me>

            <collection-ready @sign_Father="initMe" v-if="init"></collection-ready>

            <table-pager-footer class="mobie-show"></table-pager-footer>
    </v-container>
</template>

<script>
import LoyaltyRecordsMe from '../../../components/Data/Loyalty/LoyaltyRecordsMe.vue'
import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
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
import LoyaltyCountPanel from './MyFeng/LoyaltyCountPanel.vue'
import LoyaltyMyFeng from './MyFeng/LoyaltyMyFeng.vue'
    export default {
        name: '',
        components: {
            MemberMsgWidget,
            QiongPanelElement,
            QiongHeaderFilter,
                LrHeaderFilter,
                CollectionReady,
                LocationMe,
                LrDataTable,
                LrTr,
                QiongSpace,
                QiongSubResult,
                LoyaltyCountMsg,
                QiongLoading,
                LoyaltyMyFeng,
                LoyaltyCountPanel,
                LoyaltyRecordsMe,
                TablePagerFooter
        },
        data() {
            return {
                init: true,
                loading: true,

                mine: null,
                member_code: null,

                records: [ ],

                records_ORIGIN: [ ],

                in_res: 0,
                out_res: 0,
                res_res: 0,
            }
        },
        inject: [ 'reload' ],
        watch: {
            $route(to, from) {
                if (from.query) {
                    this.init = false
                    this.reload()
                    this.init = true
                }
            }
        },
        computed: {
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
                        txt: '忠誠度總積分',
                        content: this.res_res
                    }
                ]

                return res
            },
            
        },
        mounted() {

        },
    
        methods: {
            async initMe() {
                this.valuation()

                this.mine = await this.$refs.locaMe.locationMe(this.member_code, 'COLLECTION')

                this.lunchingRecord()

                this.init = false
            },
            valuation() {
                this.member_code = this.$store.state.user_backend.member_code
            },

            _runRes(res) {
                this.in_res = res.res_in
                this.out_res = res.res_ot

                res = this.view.floatSub( this.in_res, this.out_res.toFixed(1) )
                
                this.res_res = (res && res > 0) ? res : 0 
            },

            async lunchingRecord() {
                this.loading = true
                let res = await this.$refs.recordREF.lunching(this.member_code)

                if (res) {
                console.log(
                    'table RES =',
                    res.records
                )

                    let aa = JSON.parse(JSON.stringify(
                        res.records
                    ))
                    aa[0].type = 'reward'
                    aa[1].type = 'LP_reward'
                    res.records[0].type = 'other'
                    res.records.push(aa[0], aa[1])

                    this.records = res.records
                    this.records_ORIGIN = res.records


                    this._runRes(res)
                    this.loading = false
                }
            },

            fiterLoading(v) {
                this.loading = true
                let res = this.records_ORIGIN

                if (v) {
                    res = this._Filter(v)
                }

                res = res.map(e => { e.LP_difference = e.LP_difference_ORIGIN; return e })
                res = this.$refs.recordREF.serial_Record(res)

                this._runRes(res)
                this.records = res.records

                this.loading = false
            },

            _Filter(v) {
                return this.records_ORIGIN.filter(e => {
                    let inner = true 

                    for (let k in v) {
                        const i = v[k]

                        if (k == 'issue_date') {
                            inner = (e.issue_date.toString().startsWith('f') == !i)
                        }
                    }

                    return inner
                })
            },
        }
    }
</script>

<style lang="sass" scoped>
    
</style>