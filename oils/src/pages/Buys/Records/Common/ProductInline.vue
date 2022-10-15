<template>
    <div>
        <div class="fx-s pro-ine qiong-txt-td">
            <div class="qiong-wide-6 mobie-wide-15 pro-img-wrapper fx-c fix-img-XL">
                <img class="img img-in-hui" :src="pro.product_image">

                <!--div class="piw-alert fx-c">
                    <img class="img" :src="pro.product_image">
                </div -->
            </div>
            <div class="qiong-wide-70 pl-5">
                <qiong-space :space="'0.2vw'" class="mobie-hide"></qiong-space>

                <div class="qiong-txt-20 pro-named">
                    {{ named(pro) }}
                </div>
                <div class="qiong-td pt-1 qiong-txt-12">
                    <div class="d-ib pr-4 txt-sub_x2 ">
                        單價：HK$&nbsp;{{ _product.unit_price }}，
                    </div>
                    <div class="d-ib mini-wide-100 txt-sub_x2 ">
                        數量：{{ _product.quantity }}，
                    </div>
                    <div class="d-ib mobie-wide-100 sus_ipt">
                        SKU：{{ pro.sku }}
                    </div>

                    <div class="qiong-txt-16 mobie-wide-100 pt-2 mobie-show">
                        <div class="mobie-show txt-menu">
                            {{ _product.pv }}&nbsp;PV</div>
                    </div>
                </div>
            </div>
            <div class="extra qiong-wide-24 mobie-wide-20  t-r">
                <qiong-space :space="'0.5vw'" class="mobie-hide"></qiong-space>
                
                <div class="qiong-txt-20">&nbsp;</div>
                <div class="qiong-txt-16 pt-1 fw-b mobie-hide">
                    {{ _product.pv }}&nbsp;PV
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
    export default {
  components: { QiongSpace },
        name: '',
        props: [ '_product' ],
        data() {
            return {
                
            }
        },
        computed: {
            pro() {
                const pros = this.$store.state.products
                let res = this._product.product_uuid

                if (pros) {
                    pros.map(e => {
                        if (e.sku == res.sku) { res = e }
                    }); return res
                }
                return res
            }
        },
        methods: {
            named(v, lang = 'hk') {
                let res = ''
                v = v.translation ? v.translation : [ ]
                v.map(e => { if (lang == e.language_key) { res = e.product_name } })
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
.pro-ine
    align-items: flex-start
.txt-menu
    font-weight: 500

.pro-named
    font-weight: 450
    color: #0c100d !important

.txt-sub_x2 
    color: #434346 !important
</style>