<template>
    <div class="pdf-fs"> 
        <ui-pdf-top-layout :header="'product information'" :start="'2021-11-28'" :end="'2021-12-28'"></ui-pdf-top-layout>
        <pdf-ppi-pro-msg></pdf-ppi-pro-msg>
        <pdf-ppi-pro-lp></pdf-ppi-pro-lp>
        <pdf-ppi-pro-invens></pdf-ppi-pro-invens>

        <pdf-ppi-pro-invens-datas></pdf-ppi-pro-invens-datas>
    </div>
</template>

<script>
import UiPdfTopLayout from '../layout/UiPdfTopLayout.vue'
import PdfPpiProInvensDatas from './IvenData/PdfPpiProInvensDatas.vue'
import PdfPpiProInvens from './TopMsg/PdfPpiProInvens.vue'
import PdfPpiProLp from './TopMsg/PdfPpiProLp.vue'
import PdfPpiProMsg from './TopMsg/PdfPpiProMsg.vue'
    export default {
  components: { UiPdfTopLayout, PdfPpiProMsg, PdfPpiProLp, PdfPpiProInvens, PdfPpiProInvensDatas },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>