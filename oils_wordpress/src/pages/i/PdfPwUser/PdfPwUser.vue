<template>
    <div>

        <div class="pti-go-pdf hand" @click="lockPrint">
            <v-icon v-if="!printing">mdi-file-outline</v-icon>
            <v-icon v-else class="circle-around">mdi-loading</v-icon>
        </div>

        <pdf-pw-user-inner :items="users" class="pdf_modal"></pdf-pw-user-inner>

        <pdf-buy-print ref="pdfBuyREF"></pdf-buy-print>
    </div>
</template>

<script>
import PdfBuyPrint from '../PdfRecord/PdfBuyPrint.vue'
import PdfPwUserInner from './PdfPwUserInner.vue'
export default {
        components: { PdfPwUserInner, PdfBuyPrint },
        props: [ 'users' ],
        data() {
            return {
                printing: false,
                loading: false
            }
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