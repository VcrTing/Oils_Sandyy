<template>
    <v-container fluid class="qiong-txt-td">
        <stock-top-bar ref="topBarREF" :_funnl="funnl" @submit_Father="stockLoading"></stock-top-bar>

        <qiong-header-filter class="bg-none mt-0">
            <div slot="header">庫存操作記錄</div>
            <div slot="filter">
                <!--stock-top-filter @plus_Father="plus = true"></stock-top-filter-->
            </div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            
           <div class="ps-r">
                <stock-records-logo-header @sort="sortRecords" :_plus="plus" class="px-7"></stock-records-logo-header>

                <!--pro-stock-plus  
                    v-if="plus" :class="{ 'iitw-active': plus, 'iitw-hide': !plus }"
                    @cancel_Father="() => plus = false"
                    @refresh="plusFinish"
                ></pro-stock-plus-->
           </div>

            <stock-records-expanel :records="logos" v-if="!loading"></stock-records-expanel>
            <qiong-loading v-else :bigger="1" class="qiong-mt-20"></qiong-loading>

            <qiong-space :space="'2vw'"></qiong-space>            
        </qiong-panel-element>

        <div class="fx-c mt-3 qiong-pt-10">
            <pagenation v-if="!loading" ref="pageREF" :_limit="limit" :_count="count" @page_Father="sliceData"></pagenation>
        </div>
        <!--qiong-sub-result :res="footer" :bigger="0" :need_line="false" class="mt-3 px-5">
            <div class="next-header qiong-txt-14 mb-1">Total</div>
        </qiong-sub-result-->
        
        <!--pdf-index v-if="!loading" :need_btn="true" :page="'pro_change_record'" :data="pdf_data"></pdf-index-->

        <qiong-space :space="'7vh'"></qiong-space>      
        <table-pager-footer></table-pager-footer>

        <widget-count ref="countREF"></widget-count>
        <widget-logo-stock ref="stockREF"></widget-logo-stock>
    </v-container>
</template>

<script>
import WidgetLogoStock from '../../../components/Data/Log/WidgetLogoStock.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'

import StockRecordsBody from './Body/StockRecordsBody.vue'
import StockRecordPager from './Header/StockRecordPager.vue'
import StockRecordsLogoHeader from './Header/StockRecordsLogoHeader.vue'
import StockTopBar from './Top/StockTopBar.vue'

import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongSubResult from '../../../components/Qiong/Pager/QiongSubResult.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import WidgetCount from '../../../components/Data/Count/WidgetCount.vue'
import Pagenation from '../../../components/Bar/Pagenation/Pagenation.vue'
import StockTopFilter from './Top/StockTopFilter.vue'
import ProStockPlus from './Plus/ProStockPlus.vue'
import PdfIndex from '../../../extra/pdf/PdfIndex.vue'
import StockRecordsExpanel from './Body/StockRecordsExpanel.vue'

    export default {
        name: '', 
        components: {
                QiongPanelElement,
                StockRecordsBody,
                QiongSpace,
                StockRecordsLogoHeader,
                WidgetLogoStock,
                QiongLoading,
                QiongSubResult,
                StockTopBar,
                TablePagerFooter,
                QiongHeaderFilter,
                StockRecordPager,
                WidgetCount,
                Pagenation,
                StockTopFilter,
                ProStockPlus,
                PdfIndex,
                StockRecordsExpanel
        },
        data() {
            return {
                total: 0,
                plus: false,

                limit: 60,
                count: 0,

                funnl: {
                    sku: '',
                    user: '',
                    date_lt: '',
                    date_gte: ''
                },
                top: {
                    star: '', end: '' },
                logos: [ ],
                logos_origin: [ ],

                loading: true
            }
        },
        mounted() {
            // this.init()
        },
        computed: {
            pdf_data() {
                return {
                    tops: this.top,
                    items: this.logos_origin
                }
            },

            footer() {
                return [
                    {
                        txt: '庫存總計',
                        content: this.total
                    }
                ]
            }
        },
        methods: {
            sortRecords(func) {
                this.logos_origin = func(this.logos, this.logos_origin)
                this.$refs.pageREF.now = 1
                this.sliceData( )
            },

            insert_Top(res) {
                this.top = {
                    start: res.date_gte,
                    end: res.date_lt
                }
            },
            async stockLoading(res = null) {
                this.total = 0
                this.loading = true
                this.insert_Top(res)
                res = await this.$refs.stockREF.lunch(res)

                if (res) {
                    this.count = res.length
                    this.logos_origin = res.map(e => { this.total += e.original_quantity; return e })
                    this.sliceData()
                    this.loading = false
                }
            },
            sliceData(start = 0, end = this.limit) {
                this.logos = this.logos_origin.slice(start, end)

                console.log('库存记录 =', this.logos_origin)
            },

            plusFinish() {
                this.plus = false
                this.$refs.topBarREF.submit()
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>