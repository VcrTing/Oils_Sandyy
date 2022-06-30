<template>
    <pdf-content-layout :is_null="items.length > 0">
        
        <span slot="header">
            Organization Branch Bonus
        </span>

        <div slot="body">

            <div style="overflow: hidden;">
                <div style="width: 11%; float: left;">Member ID</div>
                <div style="width: 24%; float: left;">Member Name</div>

                <div style="width: 11%; text-align: center; float: left;">Payment<br/>Level</div>

                <div style="width: 10%; float: left;">Order No.</div>
                <div style="width: 17%; float: left;">Order Date</div>
                
                <div style="width: 9%; text-align: center; float: left;">Order Pv</div>

                <div style="width: 9%; text-align: center; float: left;">Bonus %</div>
                <div style="width: 9%; padding-left: 0.8rem; float: left;">Bonus</div>
            </div>
            
            <qiong-space :space="'0.15rem'"></qiong-space>

            <div style="overflow: hidden; padding: 0.24rem 0px" v-for="(v, i) in items" :key="i">
                <div style="width: 11%; float: left;">
                    {{ v.member_code }}
                </div>
                <div style="width: 24%; float: left;">
                    {{ v.display_name }}&nbsp;
                </div>

                <div style="width: 11%; text-align: center; float: left;">
                    {{ v.payment_level }}
                </div>

                <div style="width: 10%; float: left;">
                    {{ v.order_uuid }}
                </div>
                <div style="width: 17%; float: left;">
                    {{ view.ser_timed_en(v.ordered_date) }}
                </div>
                <div style="width: 9%; text-align: center; float: left;">
                    {{ v.order_pv }}
                </div>

                <div style="width: 9%; text-align: center; float: left;">
                    {{ v.bonus_percentage }}
                </div>
                <div style="width: 9%; padding-left: 0.8rem; float: left;">
                    {{ v.bonus_pv }}
                </div>
            </div>
        </div>

        <pdf-common-footer slot="footer" :res="result"></pdf-common-footer>
    </pdf-content-layout>
</template>

<script>
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import PdfCommonFooter from '../common/PdfCommonFooter.vue'
import PdfContentLayout from "../common/PdfContentLayout.vue"

    export default {
        components: { PdfContentLayout, PdfCommonFooter, QiongSpace },
        props: {
            mine: { type: Object },
            _item: { type: Object }
        },
        name: '',
        data() {
            return {
                pv_res: 0,
                usd_res: 0,

                items: [ ],
                result: null
            }
        },
        mounted() {
            this.fetchItems()

            this.switchRes()
        },
        methods: {
            fetchItems() {
                if (this._item && this._item.organisation_detail) {
                    
                    this.items = this._item.organisation_detail.organisation_bonus_detail
                    this.usd_res = this._item.organisation_detail.total_bonus
                    this.pv_res = this._item.organisation_detail.total_pv
                }
            },

            switchRes() {
                this.result = [

                    {
                        txt: 'Total PV:',
                        content: this.pv_res
                    },
                    {
                        txt: 'Total Bonus:',
                        content: 'US$&nbsp;' + this.usd_res
                    }
                ]
            }
        },
    }
    /* 
                this.pv_res = 0
                this.usd_res = 0

                this.items = this.mine.bonu_period.organisation_bonus


                for (let u of this.$store.state.user_collection) {
                    for (let i of this.items) {
                        if (u.member_code == i.member_code) {
                            i.display_name = u.display_name
                        }
                    }
                }               

                this.items.map(e => {

                    this.pv_res = this.view.floatAdd(
                        this.pv_res, e.order_pv
                    )
                    e.bonus_pv = (e.bonus_pv) ? e.bonus_pv : 0
                    this.usd_res = this.view.floatAdd(
                        this.usd_res, e.bonus_pv
                    ).toFixed(2)
                })
    */
</script>

<style lang="sass" scoped>
    
</style>