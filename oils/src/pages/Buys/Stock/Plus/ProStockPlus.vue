<template>
    <div class="input-in-table-wrapper py-3 pt-5 px-7 time">
        
        <div class="qiong-td qiong-txt-td fx-l">
            <div class="qiong-wide-5 tb-in-img">
                <img class="img" v-if="pro" :src="pro.product_image" />
            </div>   
            <div class="qiong-wide-30 pl-2">
                <pro-search-with-choise @choise="(v) => pro = v" :vid="form_vid.pro"></pro-search-with-choise>
            </div>  
            
            <div class="qiong-wide-9 pr-0 txt-sus">
                (無法編輯)
            </div>

            <div class="qiong-wide-8">
                <pro-invent-select ref="stockREF"></pro-invent-select>
            </div>
            <div class="qiong-wide-7 pr-0">
                <span v-if="!pro">(自動檢索)</span>
                <nav v-else>
                    <qiong-loading :bigger="-1" v-if="invens == -1"></qiong-loading>
                    <span v-else>{{ invens }}&nbsp;(件)</span>
                </nav>
            </div>
            <div class="qiong-wide-8 pl-2">
                <input v-model="num" type="text" placeholder="請輸入" 
                    :class="{ 'input-error': !form_vid.num }"
                />
            </div>

            <div class="qiong-wide-10">
                <pro-invent-opera-select ref="operaREF"></pro-invent-opera-select>
            </div>
            <div class="qiong-wide-22">
                    <div class="qiong-td fx-l">
                        <div class="qiong-wide-50 d-ib">
                            <input v-model="remark" type="text" placeholder="請輸入備註" />
                        </div>
                        <div class="qiong-wide-50 t-r pr-0">
                            <nav v-if="success == 0">
                                <button class="submit btn-save fw-b" @click="save()">
                                    儲存
                                </button>
                                <button class="btn-cancel ml-3 txt-sub" @click="$emit('cancel_Father')">
                                    關閉
                                </button>
                            </nav>
                            <nav v-if="success == 1" class="an_lefter hand" @click="$emit('cancel_Father')">
                                <p class="txt-succ">新增成功！</p>
                            </nav>
                        </div>
                    </div>
            </div> 
        </div>

        <net-stock ref="netStockREF"></net-stock>
        <net-products ref="productREF"></net-products>
    </div>
</template>

<script>
import { now } from 'moment'
import ProInventOperaSelect from '../../../../components/Qiong/Form/ProInventOperaSelect.vue'
import ProInventSelect from '../../../../components/Qiong/Form/ProInventSelect.vue'
import ProSearchWithChoise from '../../../../components/Qiong/Form/ProSearchWithChoise.vue'
import QiongImage from '../../../../components/Qiong/Ui/QiongImage.vue'
import NetProducts from '../../../../extra/net/NetProducts/NetProducts.vue'
import NetStock from '../../../../extra/net/NetStock/NetStock.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
  components: { QiongImage,
        ProInventSelect,
    ProInventOperaSelect,
    ProSearchWithChoise,
    NetProducts,
    NetStock,
    QiongLoading
    },
        name: '',
        data() {
            return {
                pro: null,
                opera: null,
                invens: 0,
                stock: null,
                num: '',
                remark: '',

                form_vid: {
                    pro: true,
                    num: true,
                },

                success: 0
            }
        },
        watch: {
            num(n, o) {
                let res = Number.parseInt(n)
                this.valid() 
                this.num = (res && res > 0) ? res : 0 
            },
            async pro(n, o) {
                this.invens = 0
                if (n && n.id) {
                    this.invens = -1
                    let ori = await this.$refs.productREF.one(n.id)
                    if (ori) {
                        this.invens = 0
                        if (ori.stock) {
                            ori.stock.map(r => { this.invens += Number.parseInt(r.in_stock) })
                        }; this.valid()
                    }
                }
            }
        },
        methods: {
            collct() {
                this.stock = this.$refs.stockREF.now
                this.opera = this.$refs.operaREF.now
                this.stock.quantity = this.opera.add ? this.num : (0 - this.num)

                return this.valid() ? {
                    product_sku: this.pro.sku,
                    stock: [ this.stock ]
                } : null
            },
            valid() {
                this.form_vid.pro = (this.pro && this.pro.sku) ? true : false
                this.form_vid.num = (this.num && this.num > 0) ? true : false
                return this.form_vid.pro && this.form_vid.num
            },
            async save() {
                let res = this.collct()

                if (res) {
                    this.success = 0
                    const _res = await this.$refs.netStockREF.plus(res)
                    if (_res) { 
                        this.success = 1
                        setTimeout(e => this.$emit('refresh'), 400) }
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
.input-in-table-wrapper
    margin-top: -3px
</style>