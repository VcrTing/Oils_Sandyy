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
                    table { width: 100%; border-width: 1px !important; border-collapse: collapse !important; border-color: #f9f9f9 !important; }
                    .fl { float: left }
                    .fs-c { text-align: center }

            .root { width: 100%; background: rgb(255, 255, 255); color: #000000; }
.td-buy td { padding: 4px 6px }

.thead-buy {
    color: #FFF;
    background: #404040;
    border: none !important; }

.thead-buy td { 
    padding: 4px  6px;
    line-height: 1.7em;
    border: none !important; }
                </style>
                ` + doom
                return style
            },

            async printed() {
                
                // try {
                    this.$emit('start')
                    let doom = document.getElementById('pdf_buy')
                    let res = doom.outerHTML

                    res = this.add_style(res)
                    res = this.view.pdf.serial_Html(res)
                    
                    // 'https://pdf02.svr.up5d.com/api/pdf/fiie/default_20220919072019_139'//// 
                    res = await this.view.pdf.html_content( res )

                    if (res) {
                        console.log('PDF RES =', res)
                        this.download( res ) // res.data.pdf
                    }
                    /*
                } catch (err) {
                    this.$store.commit('saveDialog', 700)
                    setTimeout(() => { this.$store.commit('saveDialog', 0) }, 4000)
                }
                this.$emit('finish')
                */
            },

            download(res) {
                // try {
                    let a = document.createElement('a')
                    a.download = 'sandyy_tree_digram.pdf'
                    a.href = res
                    a.target = '_blank'
                    a.click()
                // } catch(err) { }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>