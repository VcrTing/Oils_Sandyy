<template>
    <div>
        
        <div class="pti-go-pdf hand" @click="lockPrint">
            <v-icon v-if="!printing">mdi-file-outline</v-icon>
            <v-icon v-else class="circle-around">mdi-loading</v-icon>
        </div>

        <div class="pdf_modal" v-if="mode == 'ENROLLER'">
            <enroller-pdf-inner :datas="items" v-if="!loading"></enroller-pdf-inner>
        </div>
        <div class="pdf_modal" v-if="mode == 'SPONSER'">
            <sponser-pdf-inner :datas="items" v-if="!loading"></sponser-pdf-inner>
        </div>

        <pur-print ref="printDom"></pur-print>
    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import PurPrint from './PurPrint.vue'
import EnrollerPdfInner from './EnrollerPdfInner/EnrollerPdfInner.vue'
import PdfSimpleHeader from '../PdfSimple/common/PdfSimpleHeader.vue'
import SponserPdfInner from './SponserPdfInner/SponserPdfInner.vue'

    export default {
        components: { 
            PurPrint, EnrollerPdfInner, PdfSimpleHeader, SponserPdfInner      
        },
        name: '',
        props: {
            mode: {
                type: String
            },

            users: {
                type: Array
            }
        },
        mounted() {
            this.lunchingItems()
        },
        data() {
            return {
                useless: true,
                loading: true,

                items: [ ],

                printing: false
            }
        },
        methods: {
            _items(u) {
                this.items.push(u)
            },
            lunchingItems() {
                this.loading = true
                
                this.items = [ ]
                app_init._build(this.users, this._items)

                this.loading = false
            },

            async lockPrint() {
                if (! this.printing) {

                    this.printing = true
                    this.$refs.printDom.printed()

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