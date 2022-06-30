<template>
    
    <v-container fluid class="qiong-txt-td">

        <irb-top-bar></irb-top-bar>   

        <qiong-header-filter>
            <div slot="header">{{ $t('HEADER.inventory_record') }}</div>

            <inventory-header-filter slot="filter" @sign_Father="fiterLoading"></inventory-header-filter>
        </qiong-header-filter>

        <qiong-panel-element :need_space="false" class="mobie-table">

            <div v-if="!loading">
                <ir-filter-panel-layout v-if="page == 0">
                    <irh-tr slot="tr"></irh-tr>
                    <irb-body slot="td" :inventorys="results" :items="invens"></irb-body>
                </ir-filter-panel-layout>

                <ir-filter-panel-layout v-else-if="page == 1">
                    <irh-tr-jsz slot="tr"></irh-tr-jsz>
                    <irb-table-body-jsz slot="td" :inventorys="results" :items="invens"></irb-table-body-jsz>
                </ir-filter-panel-layout>

                <ir-filter-panel-layout v-else-if="page == 2">
                    <irh-tr-ht slot="tr"></irh-tr-ht>
                    <irb-table-body-ht slot="td" :inventorys="results" :items="invens"></irb-table-body-ht>
                </ir-filter-panel-layout>
            </div>
            
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <qiong-sub-result :res="footer" :bigger="0" :need_line="false" class="mt-3 px-5">
            <div class="next-header qiong-txt-14 mb-1">Total</div>
        </qiong-sub-result>

        <widget-inventory ref="invenREF"></widget-inventory>
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
    WidgetInventory  },
        name: '',
        data() {
            return {
                page: 0,
                invens: [

                ],  
                loading: true,

                results: [
                    {
                        name_en: 'Damask Rose Essential Oil', name_cn: '大馬士革玫瑰精油', sku: 'SY110100105',
                        pv: 480, price_vip: 2280, price: 3800, 
                        img: 'https://sandyy.com/wp-content/uploads/%E4%B8%80%E8%91%89round-1-32800.jpg',
                        all: 100, change: 10, is_add: true, broken: 3, back: 3,
                        inventory: [
                            { typed: 1, res: 50, change: 13, is_add: true, broken: 3, back: 3 },
                            { typed: 2, res: 50, change: 3, is_add: false, broken: 0, back: 0 }
                        ]
                    },
                    {
                        name_en: 'Thymus Vulgaris CT Linalol', name_cn: '沈香醇百裏香精油', sku: 'SY110103807',
                        pv: 120, price_vip: 245, price: 408, 
                        img: 'https://sandyy.com/wp-content/uploads/%E4%B8%80%E8%91%89round-1-22800.jpg',
                        all: 99999, change: 999999, is_add: false, broken: 333333, back: 333,
                        inventory: [
                            { typed: 1, res: 9999999, change: 13, is_add: true, broken: 33, back: 3 },
                            { typed: 2, res: 999999, change: 3, is_add: true, broken: 0, back: 0 }
                        ]
                    },
                ],

                total: 0,
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
            this.fiterLoading(0)
        },
        methods: {
            async fiterLoading(v) {
                this.loading = true
                this.page = v

                let res = await this.$refs.invenREF.inventoryData()

                if (res) {
                    this.invens = res
                    this.loading = false
                    console.log('RES Inventory =', res)
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>