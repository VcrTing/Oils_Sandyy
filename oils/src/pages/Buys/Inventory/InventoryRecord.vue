<template>
    
    <v-container fluid class="qiong-txt-td">

        <irb-top-bar @search="searchFilter"></irb-top-bar>   

        <qiong-header-filter>
            <div slot="header">
                產品庫存
            </div>

            <inventory-header-filter slot="filter" @sign_Father="fiterLoading"></inventory-header-filter>
        </qiong-header-filter>

        <qiong-panel-element :need_space="false" class="mobie-table">
            <ir-filter-panel-layout v-if="filter == 0">
                <irh-tr slot="tr" :items="invens" @sort="sortOption"></irh-tr>
                <irb-body slot="td" v-if="!loading" :inventorys="results" :items="invens"></irb-body>
                <qiong-loading slot="td" v-else></qiong-loading>
            </ir-filter-panel-layout>
        </qiong-panel-element>

        <qiong-sub-result :res="footer" :bigger="0" :need_line="false" class="mt-3 px-5">
            <div class="next-header qiong-txt-14 mb-1">Total</div>
        </qiong-sub-result>

        <widget-inventory ref="invenREF"></widget-inventory>

        <!--pdf-index :page="'invent_list'" :need_btn="true"></!--pdf-index-->

        <table-pager-footer></table-pager-footer>
        <qiong-space :space="'2vw'"></qiong-space>
    </v-container>
</template>

<script>
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'

import IrhTr from './LayerAll/Tr/IrhTr.vue'
import IrbBody from './LayerAll/Body/IrbBody.vue'

import IrbTopBar from './Top/IrbTopBar.vue'
import InventoryHeaderFilter from './Top/InventoryHeaderFilter.vue'
import IrhTrJsz from './LayerJsz/Tr/IrhTrJsz.vue'
import IrbTableBodyJsz from './LayerJsz/Body/IrbTableBodyJsz.vue'
import QiongSubResult from '../../../components/Qiong/Pager/QiongSubResult.vue'
import IrhTrHt from './LayerHt/Tr/IrhTrHt.vue'
import IrbTableBodyHt from './LayerHt/Body/IrbTableBodyHt.vue'
import IrFilterPanelLayout from './Tool/IrFilterPanelLayout.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import WidgetInventory from '../../../components/Data/inventory/WidgetInventory.vue'
import PdfIndex from '../../../extra/pdf/PdfIndex.vue'

    export default {
  components: { QiongHeaderFilter, QiongPanelElement, InventoryHeaderFilter, IrhTr, IrbBody, QiongSpace, QiongLoading,
    IrbTopBar,
    QiongHeader,
    IrhTrJsz,
    IrbTableBodyJsz,
    QiongSubResult,
    IrhTrHt,
    IrbTableBodyHt,
    IrFilterPanelLayout,
    TablePagerFooter,
    WidgetInventory,
    PdfIndex  },
        data() {
            return {
                filter: 0,
                invens: [ ],  
                invens_ORIGIN: [ ],
                loading: true,

                results: [
                    
                ],

                total: 0,

                funnel: { }
            }
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
        mounted() {
            this.fiterLoading()
        },
        methods: {
            _Filter( res ) {
                /*
                if (this.filter != 0) {
                    let inn = false
                    res = res.filter(e => {
                        inn = false
                        e.location.map(lc => { if (lc.sort_code == this.filter) { inn = true } })
                        return inn
                    })
                }
                */
                return res
            },

            async fiterLoading(v = 0) {
                this.loading = true

                let res = await this.$refs.invenREF.inventoryData(this.funnel)

                if (res) {
                    this.total = 0
                    this.invens_ORIGIN = this._Filter(res)
                    this.invens = Object.assign(this.invens_ORIGIN)
                    this.invens.map(e => { this.total = this.view.floatAdd(e.total, this.total) })
                    this.loading = false
                }
            },

            async searchFilter(data) {
                this.funnel = data
                this.fiterLoading()
            },

            sortOption(func) {
                this.invens = func(this.invens, this.invens_ORIGIN)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>