<template>
    <pdf-content-layout :is_null="items.length > 0">
        
        <span slot="header">
            Sales bonus for retail
        </span>
        <div slot="body">
            
        </div>

        <pdf-common-footer :res="result"></pdf-common-footer>
    </pdf-content-layout>
</template>

<script>
import PdfCommonFooter from '../common/PdfCommonFooter.vue'
import PdfContentLayout from '../common/PdfContentLayout.vue'
    export default {
  components: { PdfContentLayout, PdfCommonFooter },
        name: '',
        props: {
            mine: {
                type: Object
            }
        },
        data() {
            return {
                
                items: [ ],
                result: null,

                usd_res: 0
            }
        },
        mounted() {
            this.fetchItems()
            
            this.switchRes()
        },
        methods: {
            fetchItems() {

            },
            
            switchRes() {
                let compu = 0

                this.result = [
                    {
                        txt: 'Compute:',
                        content: compu
                    },
                    {
                        txt: 'Total Bonus:',
                        content: 'US$&nbsp;' + this.usd_res
                    }
                ]
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>