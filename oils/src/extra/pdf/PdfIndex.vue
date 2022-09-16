<template>
    <div>
        <button class="pti-go-pdf hand" v-if="need_btn" @click="printed">
            <v-icon v-if="!prining">mdi-file-outline</v-icon>
            <v-icon v-else class="circle-around">mdi-loading</v-icon>
        </button>

        <div class="pdf-plate" id="_data" v-if="can">
            <pdf-bonus-statement v-if="page == 'bonus_statement'"></pdf-bonus-statement>
            <pdf-product-info v-else-if="page == 'product_info'"></pdf-product-info>

            <pdf-product-invens-list v-else-if="page == 'invent_list'"></pdf-product-invens-list>
            <pdf-product-change-record 
                :tops="data.tops" :items="data.items"
                v-else-if="page == 'pro_change_record'"></pdf-product-change-record>
        </div>
    </div>
</template>

<script>
import PdfBonusStatement from './PdfBonusStatement/PdfBonusStatement.vue'
import PdfProductChangeRecord from './PdfProductChangeRecord/PdfProductChangeRecord.vue'
import PdfProductInfo from './PdfProductInfo/PdfProductInfo.vue'
import PdfProductInvensList from './PdfProductInvensList/PdfProductInvensList.vue'
    export default {
  components: { PdfBonusStatement, PdfProductInfo, PdfProductInvensList, PdfProductChangeRecord },
        name: '',
        props: [ 'page', 'need_btn', 'data' ],
        data() {
            return {
                can: true,
                prining: false
            }
        },
        methods: {
            _style(html) {
                let css = `<style>
                
                
                </style>`
                return css + html
            },

            async printed() {
                this.prining = true
                setTimeout(e => this.prining = false, 1200)

                try {
                    let html = document.getElementById('_data').outerHTML
                    html = this.view.pdf._html(
                            this.view.pdf._css_theme_blue(
                                html
                            )
                        )
                    let res = await this.view.pdf.html_content( html )
                    if (res) {
                        this.download(res.data.pdf)
                    }
                } catch (err) {
                    this.$store.commit('saveDialog', 700)
                    setTimeout(() => { this.$store.commit('saveDialog', 0) }, 4000)
                }
            },

            download(res) {
                try {
                    let a = document.createElement('a')
                    a.download = 'sandyy_bonus_statement.pdf'
                    a.href = res
                    a.target = '_blank'
                    a.click()

                } catch(err) {
                    
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>