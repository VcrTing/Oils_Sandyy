<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            

            add_style(doom) {
                let style = `
                <style>
                    table { width: 100%; }

                    .root { width: 100%; background: rgb(255, 255, 255); padding: 20px; line-height: 1.7; font-size: 16px; }
                    
                    .head { font-size: 1em; line-height: 1.4; }
                    .head td { padding: 0px 0px 0.5rem 0px; }
                    .content td { padding: 0.14rem 0px; }

                    .pet-footer { font-size: 1.12rem; padding-top: 0rem; line-height: 2.1; }
                    .pet-footer { display: block; width: 100%; text-align: right; }

                    .pti-index,.pti-index-zero { 
                        display: inline;
                        padding: 0 0.4rem;
                        margin-right: 3px;
                        border-radius: 100%;
                        border: 1px solid #989898;
                    }
                    .pti-index-zero { visibility: hidden !important; }
                </style>
                ` + doom
                return style
            },

            async printed() {
                
                try {
                    let doom = document.getElementById('pdf_pur')
                    let res = doom.outerHTML

                    res = this.add_style(res)
                    res = this.view.pdf.serial_Html(res)
                    
                    res = await this.view.pdf.html_content( res )

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
                    a.download = 'sandyy_tree_digram.pdf'
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