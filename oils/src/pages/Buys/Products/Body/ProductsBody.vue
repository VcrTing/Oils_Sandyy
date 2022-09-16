<template>
    <div class="px-7 pb-3 extra-td" v-if="pros && pros.length > 0">

        <div class="qiong-td qiong-txt-td fx-l td-line-with-img mt-1"
        
            v-for="(v, i) in pros" :key="i"
        >
            <div class="qiong-wide-6 tb-in-img pr-0">
                <div class=" pro-img-wrapper fix-img">

                    <qiong-image :src="v.product_image"></qiong-image>

                    <!--div class="piw-alert fx-c">
                        <img class="img" :src="pro.product_image">
                    </div -->
                </div>
            </div>

            <div class="qiong-wide-94 pr-0">
                <div class="qiong-td fx-l">

                    <div class="qiong-wide-16 pl-2">
                        {{ v.sku }}
                    </div>
                    <div class="qiong-wide-26">
                        <extra-pro-trans-to-named-view :trans="v.translation"></extra-pro-trans-to-named-view>
                    </div>

                    <div class="qiong-wide-12">
                        HK$&nbsp;{{ v.price }}
                    </div>
                    <div class="qiong-wide-8">
                        {{ v.pv }}
                    </div>
                    <div class="qiong-wide-14 t-c">
                        <extra-pro-cate-view :v="v.category"></extra-pro-cate-view>
                    </div>
                    <div class="qiong-wide-12 t-c" v-html="invent(v.has_stock, v.stocks)"></div>

                    <div class="qiong-wide-12 t-r">
                        <span class="qiong-txt-10 link_son hand"
                        
                            @click="$router.push({
                                path: 'product_detail',
                                query: {
                                    'invent': v
                                }
                            })"
                        >
                            查看详情
                            <v-icon class="qiong-txt-18">mdi-chevron-right</v-icon>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongImage from '../../../../components/Qiong/Ui/QiongImage.vue'
import ExtraProCateView from '../../../../extra/view/prod/ExtraProCateView.vue'
import ExtraProTransToNamedView from '../../../../extra/view/prod/ExtraProTransToNamedView.vue'
    export default {
        components: { QiongImage, QiongEmpty, ExtraProCateView, ExtraProTransToNamedView },
        props: [
            'pros'
        ],
        name: '',
        data() {
            return {
                
            }
        },

        methods: {
            invent(has, stocks) {
                let res = '<span class="txt-sub">缺貨</span>'
                if (has) {
                    res = 0
                    stocks = stocks ? stocks : [ ]
                    stocks.map(e => {
                        res += e.in_stock
                    })
                }

                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
.pro-img-wrapper
    z-index: 100

.tb-in-img
    padding-right: 1.8vw
</style>