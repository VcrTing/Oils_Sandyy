<template>
    <div class="pdf-fs">
        <ui-pdf-top-layout :header="'product change record'" :start="tops.start" :end="tops.end"></ui-pdf-top-layout>

        <pdf-ppcr-invens-datas :_items="items"></pdf-ppcr-invens-datas>

        <ui-pdf-total-layout :_items="items"></ui-pdf-total-layout>
    </div>
</template>

<script>
import UiPdfTopLayout from '../layout/UiPdfTopLayout.vue'
import UiPdfTotalLayout from '../layout/UiPdfTotalLayout.vue'
import PdfPpcrInvensDatas from './IvenData/PdfPpcrInvensDatas.vue'
    export default {
    components: { UiPdfTopLayout,
        PdfPpcrInvensDatas,
        UiPdfTotalLayout          
    },
    props: [ 'tops', 'items' ],
        name: '',
        mounted() {

        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>