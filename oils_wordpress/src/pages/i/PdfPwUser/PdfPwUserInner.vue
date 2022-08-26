<template>
    <div id="pdf_buy" class="root" style="line-height: 1.7em">
        <pdf-buy-header :start="'29 Sept 2021'" :end="'28 Oct 2021'"></pdf-buy-header>
        
        <table class="table-buy" border="1" style="width: 100%;">
            <pdf-pw-user-table-header></pdf-pw-user-table-header>
            <pdf-pw-user-table-content :_items="items"></pdf-pw-user-table-content>
        </table>
    </div>
</template>

<script>
import PdfBuyHeader from '../PdfRecord/PdfBuy/Tool/PdfBuyHeader.vue'
import PdfPwUserTableContent from './inner/PdfPwUserTableContent.vue'
import PdfPwUserTableHeader from './inner/PdfPwUserTableHeader.vue'
    export default {
        components: { 
            PdfBuyHeader,
                PdfPwUserTableContent,
                PdfPwUserTableHeader
        },
        props: { items: Array }
    }
</script>

<style lang="sass" scoped>
.table-buy
    border: 1px solid #e3e3e3
    border-collapse: collapse
</style>