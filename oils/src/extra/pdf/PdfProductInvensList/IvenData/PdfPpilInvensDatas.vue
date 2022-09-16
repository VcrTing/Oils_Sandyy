<template>
    <div>
        <ui-pdf-panel :header="'全部'">
            <div class="td b_son">
                <div class="w-15">SKU</div>
                <div class="w-21">中文名</div>
                <div class="w-15">產品類別</div>
                <div class="w-10">價格</div>
                <div class="w-8">PV</div>
                <div class="w-30">庫存</div>
            </div>
            <div class="pt_s"></div>
            <div class="td td-data fx-l"
                v-for="(v, i) in datas" :key="i"
            >
                <div class="w-15 pr_s">{{ v.sku }}</div>
                <div class="w-21 pr_s">{{ v.named_ch }}</div>
                <div class="w-15 pr_s">{{ v.category }}</div>
                <div class="w-10">{{ v.price }}</div>
                <div class="w-8">{{ v.pv }}</div>
                <div class="w-30">
                    <span class="fx-l"><span class="tag-inven">全部</span>&nbsp;{{ v.invens.all }}&nbsp;&nbsp;</span>
                    <span class="fx-l"><span class="tag-inven">火炭</span>&nbsp;{{ v.invens.fire }}&nbsp;&nbsp;</span>
                    <span class="fx-l"><span class="tag-inven">尖沙咀</span>&nbsp;{{ v.invens.salt }}&nbsp;&nbsp;</span>
                </div>
            </div>
        </ui-pdf-panel>
    </div>
</template>

<script>
import UiPdfPanel from '../../layout/UiPdfPanel.vue'
    export default {
  components: { UiPdfPanel },
        name: '',
        data() {
            return {
                
                datas: [
                    { sku: 'SY10000222', named_en: 'BASIL GOOD PRODUCT', category: 'Sandyy Oils', named_ch: '檸檬精油', price: '333.3', pv: 120, invens: { all: 1998, fire: 999, salt: 999 } },  
                    { sku: 'SY10000333', named_en: 'BASIL GOOD PRODUCT 2', category: 'Sandyy Oils', named_ch: '檸檬精油 2', price: '333.3', pv: 120, invens: { all: 1998, fire: 999, salt: 999 } }, 
                    { sku: 'SY10000444', named_en: 'BASIL GOOD PRODUCT 3', category: 'Super Gift', named_ch: '檸檬精油 3', price: '333.3', pv: 120, invens: { all: 1998, fire: 999, salt: 999 } }, 
                    { sku: 'SY10000555-free', named_en: 'BASIL GOOD PRODUCT 4', category: 'Sandyy Oils', named_ch: '檸檬精油 4', price: '333.3', pv: 120, invens: { all: 1998, fire: 999, salt: 999 } },  
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>