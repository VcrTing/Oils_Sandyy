<template>
    
    <v-container fluid class="qiong-txt-td">
        <qiong-header>
            庫存變動
        </qiong-header>

        <qiong-panel-element :need_space="false">

            <div class="px-7 qiong-pt-20 ie-product-panel">
                <qiong-space :space="'2vh'"></qiong-space>
                <inner-tip-panel-layout :header="'產品信息'" :extra_class="'tip-health tip-health_in'">

                    <inventory-product slot="body" :product="inventory" v-if="inventory"></inventory-product>
                </inner-tip-panel-layout>
            </div>

            <ie-tool-tip></ie-tool-tip>

            <div class="px-7 qiong-pt-20 ie-inventory-panel">
                <inner-tip-panel-layout :header="'庫存詳情'" :extra_class="'tip-health'">
                    <ie-inventory-panel slot="body" :product="inventory" v-if="inventory"></ie-inventory-panel>
                </inner-tip-panel-layout>
            </div>

            <div class="px-7 qiong-pt-20 ">
                <inner-tip-panel-layout :header="'加貨'" :extra_class="'tip-health'">
                    <ie-tool-plus-btn slot="tool" @done_Father="ieNumPlus"></ie-tool-plus-btn>
                    <ie-num-add slot="body" ref="numPlusREF"></ie-num-add>
                </inner-tip-panel-layout>

                <inner-tip-panel-layout :header="'減貨'" :extra_class="'tip-health'">
                    <ie-tool-plus-btn slot="tool" @done_Father="ieNumMinus"></ie-tool-plus-btn>
                    <ie-num-sub slot="body" ref="numMinusREF"></ie-num-sub>
                </inner-tip-panel-layout>
            </div>
        </qiong-panel-element>

        <qiong-space :space="'3vh'"></qiong-space>

        <ie-tool-submit-panel class="mt-1" @submit_Father="submit"></ie-tool-submit-panel>

        <div class="pti-go-top hand" style="right: 28px" @click="$router.go(-1)">
            <v-icon>mdi-chevron-left</v-icon>
        </div>            
        
        <qiong-space :space="'14vh'"></qiong-space>

    </v-container>
</template>

<script>
import InnerTipPanelLayout from '../../../components/Layout/InnerTipPanelLayout.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import IeNumAdd from './IeNumAdd/IeNumAdd.vue'
import IeNumSub from './IeNumSub/IeNumSub.vue'
import IeInventoryPanel from './InventoryProduct/IeInventoryPanel.vue'
import InventoryProduct from './InventoryProduct/InventoryProduct.vue'
import IeToolPlusBtn from './Tool/IeToolPlusBtn.vue'
import IeToolSubmitPanel from './Tool/IeToolSubmitPanel.vue'
import IeToolTip from './Tool/IeToolTip.vue'
    export default {
  components: { InventoryProduct, QiongPanelElement, 
    QiongHeader,
    QiongSpace,
    IeNumAdd,
    IeNumSub,
    IeToolSubmitPanel,
    IeInventoryPanel,
    InnerTipPanelLayout,
    IeToolPlusBtn,
    IeToolTip },
        name: '',
        data() {
            return {
                id: '',

                inventory: null,

                results: [
                    {
                        name_en: 'Damask Rose Essential Oil', name_cn: '大馬士革玫瑰精油', sku: 'SY110100105',
                        pv: 480, price_vip: 2280, price: 3800, 
                        img: 'https://sandyy.com/wp-content/uploads/%E4%B8%80%E8%91%89round-1-32800.jpg',
                        link: 'https://sandyy.com/en/product/essential-oil-damask-rose/',
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
                        link: 'https://sandyy.com/en/product/essential-oil-thyme-linalol/',
                        all: 99999, change: 999999, is_add: false, broken: 333333, back: 333,
                        inventory: [
                            { typed: 1, res: 9999999, change: 13, is_add: true, broken: 33, back: 3 },
                            { typed: 2, res: 999999, change: 3, is_add: true, broken: 0, back: 0 }
                        ]
                    },
                ],
            }
        },
        mounted() {
            const _id = this.$route.query.id
            if (_id) {
                this.id = _id
                this.inventory = this.results[_id]
            }
        },

        methods: {
            switching() {

            },

            submit() {

                let res = this.switching()
            },

            ieNumPlus() {
                this.$refs.numPlusREF.optionPlus()
            },
            ieNumMinus() {
                this.$refs.numMinusREF.optionPlus()
            }
        }
    }
</script>

<style lang="sass" scoped>
.form-card-header
    color: #646464

.form-card
    margin-top: 2vh
    background: #fff

    border-radius: 12px
    box-shadow: 0px 2px 6px -3px rgba(0, 0, 0, 0.28)

.ie-inventory-panel
    background: #f1f1f1
</style>