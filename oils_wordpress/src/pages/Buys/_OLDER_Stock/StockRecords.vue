<template>
    <v-container fluid class="qiong-txt-td">
        <stock-top-bar :_funnl="funnl" @submit_Father="stockLoading"></stock-top-bar>

        <qiong-header-filter>
            <div slot="header">庫存操作記錄</div>
            <div slot="filter">
                <stock-top-filter></stock-top-filter>
                <pagenation v-if="!loading" :_limit="limit" :_count="count" @page_Father="sliceData"></pagenation>
            </div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            
            <stock-records-logo-header class="px-7"></stock-records-logo-header>

            <stock-records-body class="px-7" :items="logos" v-if="!loading"></stock-records-body>
            <qiong-loading v-else :bigger="1" class="qiong-mt-20"></qiong-loading>

            <qiong-space :space="'2vw'"></qiong-space>            
        </qiong-panel-element>

        <!--qiong-sub-result :res="footer" :bigger="0" :need_line="false" class="mt-3 px-5">
            <div class="next-header qiong-txt-14 mb-1">Total</div>
        </qiong-sub-result-->
        
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
                StockTopFilter 
        },
        data() {
            return {
                total: 0,

                limit: 60,
                count: 0,

                funnl: {
                    sku: '',
                    user: '',
                    date_lt: '',
                    date_gte: ''
                },
                logos: [ ],
                logos_origin: [ ],

                loading: true
            }
        },
        mounted() {
            // this.init()
        },
        computed: {

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
            
            async stockLoading(res = null) {
                this.total = 0
                this.loading = true
                res = await this.$refs.stockREF.lunch(res)

                if (res) {
                    this.count = res.length
                    this.logos_origin = res.map(e => {
                        this.total += e.original_quantity
                        // console.log('E =', e)
                        return e
                    })
                    this.sliceData()
                    this.loading = false

                }
            },
            sliceData(start = 0, end = this.limit) {
                this.logos = this.logos_origin.slice(start, end)
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>