<template>
    <div>
        <div class="pti-go-pdf hand" @click="lockPrint">
            <v-icon v-if="!loading">mdi-file-outline</v-icon>
            <v-icon v-else class="circle-around">mdi-loading</v-icon>
        </div>
        <div class="pdf_modal" id="_data" v-show="print">
            <!-- pdf-user></pdf-user-->
            <!--iframe :src="link">
            </iframe-->

            <pdf-simple ref="pdf_simple"></pdf-simple>
        </div>

        <location-me ref="localMe"></location-me>
    </div>
</template>

<script>
import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import PdfSimple from '../PdfSimple/PdfSimple.vue'
import PdfUser from '../PdfUser/PdfUser.vue'

    export default {
  components: { PdfUser,
    LocationMe,
    PdfSimple },
        name: '',
        props: {

            icon: {
                type: String,
                default: 'mdi-download'
            },
            color: {
                type: String,
                default: ''
            },
            extra_calss: {
                type: String,
                default: ''
            },
            is_fixed: {
                type: Boolean,
                default: true
            },
            l_or_r: {
                type: Boolean,
                default: false
            },
            is_small: {
                type: Boolean,
                default: false
            },

            useless: {
                type: Boolean
            },


            target_id: {
                type: String
            }
        },
        data() {
            return {
                print: true,

                head: 'http://127.0.0.1:8080',
                link: '',

                loading: false,

                member_code: null
            }
        },
        created() {
            this.link = this.head + '/#/writing?layout=WIDGET'
        },
        mounted() {
            if (!this.conf.TEST) {
                this.head = this.conf.distURL
            }

            this.member_code = this.target_id
            if (!this.member_code) {
                this.member_code = this.$store.state.user_backend.member_code
            }
        },  
        methods: {
            lockPrint() {
                if (this.print) {
                    // console.log('进入')
                    this._loading()
                    this.$refs.pdf_simple.print_backend()
                }

                /*
                this.printReay()
                
                // 可能报错
                const uri = this.head + '/#/pdf?menu=false&layout=WIDGET&member_code=' + this.member_code
                this._loading()
                
                this.link = uri
                */
            },

            async printReay() {
                this.print = false
                this.link = this.head + '/#/?layout=WIDGET'

                this.loading = true
                this.$emit('useless_Father', true)

                const me = await this.$refs.localMe.locationMe_Async(this.member_code, 'COLLECTION')
                delete me.commissions
                delete me.confirmed
                delete me.createdAt
                delete me.enrolled
                delete me.bonuses
                delete me.orders
                delete me.provider
                delete me.sponsored
                delete me.updatedAt
                localStorage.setItem('pdf_oil_me', JSON.stringify(me))
            },

            _loading() {       
                this.print = false      
                this.loading = true

                setTimeout(() => {
                    this.print = true   
                    this.$emit('useless_Father', false)
                    this.loading = false
                }, 3400)
            }
        },
    }
</script>

<style lang="sass" scoped>
.pdf-fixed-iframe
    position: fixed
    top: 102vh
    left: 0
    z-index: 999
    height: 20vh !important
    overflow: scroll // !important
    visibility: visible

    width: 100vw
    // transform: translateX(-50%)

.pdf-fixed-iframe iframe
    width: 100%
    height: 100%


.iframe_refreash
    display: none
.iframe_view
    display: block
</style>