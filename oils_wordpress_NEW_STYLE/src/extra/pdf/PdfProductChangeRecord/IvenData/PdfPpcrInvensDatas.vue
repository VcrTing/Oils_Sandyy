<template>
    <div>
        <ui-pdf-panel :header="'全部'" :class="'ma-0'">
            <div class="td b_son">
                <div class="w-17">SKU</div>
                <div class="w-21">中文名</div>
                <div class="w-21">更新日期</div>
                <div class="w-7">類別</div>
                <div class="w-8">店鋪</div>
                <div class="w-8">數量</div>
                <div class="w-18">備註</div>
            </div>
            <div class="pt_s"></div>
            <div class="td td-data fx-l"
                v-for="(v, i) in _items" :key="i"
            >
                <div class="w-17 pr_s t-wrap">{{ v.product.sku }}</div>
                <div class="w-21 pr_s">{{ named(v) }}</div>
                <div class="w-21 pr_s">{{ view.ser_timed(v.date, false , false) }}</div>
                <div class="w-7">
                    <inventory-opera-viewing></inventory-opera-viewing>
                </div>
                <div class="w-8">
                    <span class="tag-inven">
                        <company-named-viewing :named="v.stock_location" v-if="v.stock_location"></company-named-viewing>
                    </span>
                </div>
                <div class="w-8">{{ v.difference }}</div>
                <div class="w-18">
                    {{ v.mark }}
                    <!--
                    <span class="fx-l"><span class="tag-inven">全部</span>&nbsp;{{ v.invens.all }}</span>
                    <span class="fx-l"><span class="tag-inven">火炭</span>&nbsp;{{ v.invens.fire }}</span>
                    <span class="fx-l"><span class="tag-inven">尖沙咀</span>&nbsp;{{ v.invens.salt }}</span>-->
                </div>
            </div>
        </ui-pdf-panel>
    </div>
</template>

<script>
import CompanyNamedViewing from '../../../../components/Viewing/Company/CompanyNamedViewing.vue'
import InventoryOperaViewing from '../../../../components/Viewing/Record/Inventory/InventoryOperaViewing.vue'
import UiPdfPanel from '../../layout/UiPdfPanel.vue'
    export default {
        components: { UiPdfPanel, CompanyNamedViewing, InventoryOperaViewing },
        name: '',
        props: [ '_items' ],
        mounted() {
            console.log('傳來的數據 =', this._items)
        },
        data() {
            return {
                
                datas: [
                    { sku: 'SY10000222', named_en: 'BASIL GOOD PRODUCT', named_ch: '檸檬精油，好的精油', price: '333.3', pv: 120, date: '2012-12-12 23:23', invens: '火炭', num: 50, typed: '加貨', mark: '客人訂單預定' },  
                    { sku: 'SY10000223', named_en: 'BASIL GOOD PRODUCT 2', named_ch: '檸檬精油，好的精油 2', price: '333.3', pv: 120, date: '2012-12-13 23:23', invens: '尖沙咀', num: 1, typed: '減貨', mark: '客人訂單消費' },  
                    { sku: 'SY10000224', named_en: 'BASIL GOOD PRODUCT 3', named_ch: '檸檬精油，好的精油 3', price: '333.3', pv: 120, date: '2012-12-14 23:23', invens: '火炭', num: 1, typed: '壞貨', mark: '產品檢查' },  
                    { sku: 'SY10000225', named_en: 'BASIL GOOD PRODUCT 4', named_ch: '檸檬精油，好的精油 4', price: '333.3', pv: 120, date: '2012-12-15 23:23', invens: '尖沙咀', num: 999, typed: '加貨', mark: '客人訂單預定' },  
                ]
            }
        },
        methods: {
            named(v) {
                let res = v.product.translation[1].product_name
                v.product.translation.map(e => {
                    if (e.language_key == 'hk') {
                        res = e.product_name
                    }
                 })
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>