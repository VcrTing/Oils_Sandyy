<template>
    <div v-if="this.$store.state.share_type && this.$store.state.share_type >= 2">
        
        <div class="pti-go-pdf hand" @click="lockPrint">
            <v-icon v-if="!printing">mdi-file-outline</v-icon>
            <v-icon v-else class="circle-around">mdi-loading</v-icon>
        </div>

        <pdf-buy-inner class="pdf_modal" v-if="!loading" :items="records"></pdf-buy-inner>

        <pdf-buy-print ref="pdfBuyREF"></pdf-buy-print>
    </div>
</template>

<script>
import PdfBuyPrint from '../PdfBuyPrint.vue'
import PdfBuyInner from './PdfBuyInner.vue'
    export default {
  components: { PdfBuyInner, PdfBuyPrint },
        name: '',
        props: {
            records: {
                type: Array,
                default: null
            }
        },
        data() {
            return {
                printing: false,
                loading: false
            }
        },
        mounted() {
        },
        methods: {
            lockPrint() {
                if (! this.printing) {

                    this.printing = true
                    this.$refs.pdfBuyREF.printed()

                    setTimeout(() => {
                        this.printing = false
                    }, 2400)
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>