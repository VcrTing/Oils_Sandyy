<template>
    <div style="">

        <div style="font-size: 1.12em !important; line-height: 1.94rem;">
            <div style="overflow: hidden; font-weight: bold">
                <div style="width: 40%; float: left;">
                    Payment this Month
                </div>
                <div style="width: 16%; float: left;">
                    US$&nbsp;{{ usd }}
                </div>
                <div style="width: 19%; float: left;">
                    HK$&nbsp;{{ usd_hk }}
                </div>
                <div style="width: 25%; float: left;">

                </div>
            </div>
            <div style="overflow: hidden;">
                <div style="width: 40%; float: left;">
                    Closing Balance
                </div>
                <div style="width: 16%; float: left;">
                    US$&nbsp;{{ close }}
                </div>
                <div style="width: 19%; float: left;">
                    HK$&nbsp;{{ close_hk }}
                </div>
                <div style="width: 25%; float: left;">
                    
                </div>
            </div>
        </div>

        <div style="height: 2.2rem"></div>
        <div style="line-height: 1.62rem;">
            <div style="font-size: 1.12rem; line-height: 2.5rem;">
                Notes:
            </div>
            <div>
                1. Current month excahnge rate&nbsp;
                US$&nbsp;to&nbsp;HK$&nbsp;is&nbsp;<span>
                        {{
                            ratio
                        }}
                    </span>
                                
            </div>
            <div>
                2. Please examine this statement at once. If no error is reported within 14 days, it will be considered as correct.
            </div>
            <div>
                3. Please print out this statement for your own retention.
            </div>
        </div>

        <div cols="12">
            <qiong-space :space="'4rem'"></qiong-space>
        </div>
    </div>
</template>

<script>
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import PdfEmptyContent from './inner/PdfEmptyContent.vue'
    export default {
  components: { QiongSpace, PdfEmptyContent },
        name: '',
        props: {
            _me: {
                type: Object
            },
            _item: { type: Object }
        },
        data() {
            return {
                ratio: 7.7,
                usd: 0,
                close: 0
            }
        },
        mounted() {
            this.ratio = this.conf.HK_RATIO

            // this._me.bonu_period.usd_result
            this.usd = this._item.payment_total ? this._item.payment_total.USD.toFixed(2) : '0.00'
            this.close = 0
        },
        computed: {
            usd_hk() {
                let res = this.usd
                res = this.view.floatMul(
                    res,
                    this.ratio
                ).toFixed(2)

                return res
            },
            close_hk() {
                let res = this.view.floatMul(
                    this.close,
                    this.ratio
                ).toFixed(2)

                return res
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>