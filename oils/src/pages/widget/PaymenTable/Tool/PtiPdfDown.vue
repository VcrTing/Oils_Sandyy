<template>
    <div class="pti-go-pdf hand"
        @click="toPdf">

        <v-icon v-if="!printing">mdi-file-outline</v-icon>
        <v-icon v-else class="circle-around">mdi-loading</v-icon>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                printing: false
            }
        },
        mounted() {
            
        },
        methods: {

            add_header(doom) {
                let res = `
                <div>
                    <div style="overflow: hidden;">
                    <div style="float: left; width: 7%; padding: 0px; margin: 0px;">
                        <img  src="https://sandyy.com/wp-content/uploads/invoice_logo_small.png" style="width: 100%; max-height: 90px;">
                    </div> 
                    <h2 style="float: left; width: 86%; text-align: center; line-height: 2.4;">
                        Essence Global Co. Limited
                    </h2> 
                    <div style="float: left; width: 7%; padding: 0px; margin: 0px;">&nbsp;</div></div>
                    <div style="height: 0.6em;"></div>
                    <div >Accounting Settlement</div> 
                    <div style="height: 1em;"></div>
                </div>
                ` + doom 
                return res
            },

            add_item(doom) {
                let rec = '<div style="font-size: 1.12rem; margin-top: 24px;">Monthly Balance</div><div style="height: 0.45rem;"></div>'

                let res = document.getElementById('comm_item').outerHTML
                res = res + rec + doom 
                return res
            },

            add_style(doom) {
                let style = `
                <style>
                #pti_table { padding-left: 1.2rem; }

                .pti-content { margin-top: 8px; }
                
                table { width: 100%; line-height: 2.1; text-align: center; }
                tr { line-height: 1.4; }
                tr td { padding: 8px 0px; }

                .qiong-td { width: 100%; overflow: hidden; text-align: center; line-height: 1.8rem; }
                .qiong-td > div { float: left; }
                .qiong-wide-12 { width: 12%; }
                .qiong-wide-13 { width: 13%; }
                .qiong-wide-14 { width: 14%; }

                .pti-sub-msg { line-height: 2.1; }
                .pti-tr-footer { font-weight: bold; }

                .i-chronu-edit, #pti_tr_fixed { display: none !important; }

                </style>
                ` + doom
                return style
            },

            async toPdf() {
                if (!this.printing) {
                    this.printing = true

                    try {
                        let doom = document.getElementById('pti_table')
                        let res = doom.outerHTML

                        res = this.add_item(res)
                        res = this.add_header(res)
                        res = this.add_style(res)
                        res = this.view.pdf.serial_Html(res)
                        res = await this.view.pdf.html_content( res )
                        if (res) this.download(
                            res // .data.pdf
                        );
                        
                    } catch (err) {
                        this.$store.commit('saveDialog', 700)
                        setTimeout(() => { this.$store.commit('saveDialog', 0) }, 4000)
                    }

                    setTimeout(() => {
                        this.printing = false
                    }, 2400)
                }
            },

            download(res) {

                try {
                    let a = document.createElement('a')
                    a.download = 'sandyy_accounting_statement.pdf'
                    a.href = res
                    a.target = '_blank'
                    a.click()

                } catch(err) {
                    
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>