<template>
    <div id="pdf_buy" class="root" style="line-height: 1.7em">
        <pdf-buy-header :start="'29 Sept 2021'" :end="'28 Oct 2021'"></pdf-buy-header>
        
        <table class="table-buy" border="1" style="width: 100%;">
            <pdf-buy-table-header></pdf-buy-table-header>
            <pdf-buy-table-content :_items="items" v-if="items"></pdf-buy-table-content>
        </table>
    </div>
</template>

<script>
import PdfBuyTableHeader from './Inner/PdfBuyTableHeader.vue'
import PdfBuyTableContent from './Inner/PdfBuyTableContent.vue'
import PdfBuyHeader from './Tool/PdfBuyHeader.vue'
    export default {
        components: { 
            PdfBuyHeader, 
            PdfBuyTableHeader,
            PdfBuyTableContent
        },
        props: { items: Array }
    }
</script>

<style lang="sass" scoped>
.table-buy
    border: 1px solid #e3e3e3
    border-collapse: collapse
</style>