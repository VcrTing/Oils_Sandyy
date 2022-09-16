<template>
    <div>
        <div class="qiong-td ps-r">
            <div class="qiong-wide-23 mobie-wide-38 pr-0">
                <img :src="pro.product_image" class="img" v-if="pro && pro.product_image"/>
                <div v-else class="img-inset fx-c">
                    
                </div>
            </div>
            <div class="qiong-wide-4"></div>

            <qiong-space :space="'24px'" class="mobie-show"></qiong-space>

            <div class="qiong-wide-73 mobie-wide-100 pr-0">

                <qiong-space :space="'2vw'"></qiong-space>
                <div class="qiong-td mobie-td" v-if="pro">

                        <div class="qiong-wide-32 ">
                            <pd-title-with-cont :header="'產品中文名'">
                                {{ pro.translation[1].product_name }} 
                            </pd-title-with-cont>
                        </div>
                        <div class="qiong-wide-38 ">
                            <pd-title-with-cont :header="'產品英文名'">
                                {{ pro.translation[0].product_name }} 
                            </pd-title-with-cont>
                        </div>
                        <div class="qiong-wide-30  h-fill">
                            <pd-title-with-cont :header="'SKU'">
                                {{ pro.sku }} 
                            </pd-title-with-cont>
                        </div>
                </div>
                <qiong-space :space="'2vw'"></qiong-space>

                <div class="qiong-td">
                    <div class="qiong-wide-32  mobie-wide-45">
                            <pd-title-with-cont :header="'PV'">
                                {{ pro.pv }} 
                            </pd-title-with-cont>
                    </div>
                    <div class="qiong-wide-68  mobie-wide-50">
                            <pd-title-with-cont :header="'單價'">
                                <span class="mr-3">
                                    HK$&nbsp;{{ pro.price }} 
                                </span>
                                
                                <span class="kill fw-n qiong-txt-14 pl-1 txt-sub">
                                    <qiong-space :space="'0px'" class="mobie-show"></qiong-space>
                                    原價&nbsp;{{ pro.retail_price }}
                                </span>
                            </pd-title-with-cont>
                    </div>
                </div>
            </div>
            
            <qiong-space :space="'7vw'" class="mobie-show"></qiong-space>

            <!-- div class="t-r pd-buy-bar pr-0">
                <button class="py-1 btn-sec-thin btn-op mr-2 " @click="printed">
                    <v-icon class="qiong-txt-16">mdi-file-outline</v-icon>
                    導出 Pdf 
                </button>

                <button class="btn-shop btn-shop_buy qiong-txt-12 py-1 px-5">
                    <v-icon class="qiong-txt-16">
                        mdi-currency-usd
                    </v-icon>
                    購買
                </button>
            </!-->
        </div>

        <pdf-index :page="'product_info'" ref="pdfREF"></pdf-index>
    </div>
</template>

<script>
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import PdfIndex from '../../../../extra/pdf/PdfIndex.vue'
import PdTitleWithCont from './common/PdTitleWithCont.vue'
    export default {
        name: '',
        components: {
            PdTitleWithCont,
                QiongSpace,
                PdfIndex,
        },
        props: [ 'pro' ],
        mounted() {
        },
        data() {
            return {
                
            }
        },
        methods: {
            printed() {
                this.$refs.pdfREF.printed()
            }
        }
    }
</script>

<style lang="sass" scoped>
.img
    max-width: calc(8vw + 170px)
    border-radius: 2px
    border: 1px solid #f2f2f2

.btn-shop_buy
    
.pd-buy-bar
    position: absolute
    bottom: 0px
    right: 0px
</style>