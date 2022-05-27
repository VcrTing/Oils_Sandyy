<template>
    <div class="pdf-fs">
        <ui-pdf-top-layout :header="'product list'" :start="'2021-11-28'" :end="'2021-12-28'"></ui-pdf-top-layout>

        <pdf-ppil-invens-datas></pdf-ppil-invens-datas>
    </div>
</template>

<script>
import UiPdfTopLayout from '../layout/UiPdfTopLayout.vue'
import PdfPpilInvensDatas from './IvenData/PdfPpilInvensDatas.vue'
    export default {
  components: { UiPdfTopLayout, PdfPpilInvensDatas },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>