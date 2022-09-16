<template>

        <pdf-layout id="pdf_bonus_statement">
            <pdf-simple-header slot="starter"></pdf-simple-header>
            
            <pdf-simple-inner :me="mine" v-if="mine" slot="content"></pdf-simple-inner>

            <widget-me-init ref="meInit" slot="extra"></widget-me-init>
        </pdf-layout>

</template>

<script>
import PdfSimpleHeader from './common/PdfSimpleHeader.vue'
import PdfLayout from '../../../components/Layout/PdfLayout.vue'
import PdfSimpleInner from './PdfSimpleInner.vue'
import WidgetMeInit from '../../../components/Init/Widget/WidgetMeInit.vue'

    export default {
  components: { PdfSimpleHeader,
    PdfLayout,
    PdfSimpleInner,
    WidgetMeInit },
        name: '',
        data() {
            return {
                member_code: null,
                chronu_id: null,

                mine: null,
                children: null
            }
        },
        created() {
            // const id = this.$route.query.member_code 
            // const chronu = this.$route.query.chronu_id 
            // this.valuation(id, chronu)
        },

        async mounted() {

            let code = this.$store.state.user_backend.member_code

            this.mine = this.$refs.meInit.locationMe()
            console.log('PDF mine =', this.mine)

        },
        methods: {
            
            valuation(id, chornu) {
                if (id) {
                    this.member_code = id
                } else {
                    this.member_code = this.$store.state.user_backend.member_code
                }

                if (chornu) {
                    this.chronu_id = chornu
                } else {
                    this.chronu_id = this.$store.state.chronus.id
                }
            },

            add_style(html) {
                let css = `
                <style>
                </style>`
                return css + html
            },

            async print_backend() {
                try {
                    const html = document.getElementById('pdf_bonus_statement').outerHTML
                    let res = await this.view.pdf.html_content(
                        this.view.pdf.serial_Html( this.add_style( html ) )
                    )
                    if (res) { this.download(res.data.pdf) }
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
                } catch(err) { }
            }
        },
    }
    /*

import domtoimage from 'dom-to-image';

            async saveImg() {

                let node = document.getElementById('app')

                let opt = { 
                    quality: 0.95
                }

                let img = await domtoimage.toJpeg(node, opt)

                return img
            },
            */
</script>

<style lang="sass" scoped>

</style>