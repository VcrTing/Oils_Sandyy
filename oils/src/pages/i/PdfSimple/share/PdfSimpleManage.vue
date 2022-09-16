<template>
    <pdf-content-layout :is_null="items.length > 0">

        <span slot="header">
            Leader Dividend - Management Bonus
        </span>
        <div slot="body" style="text-align: center">
            <div style="overflow: hidden;">
                <div style="width: 14%; float: left; text-align: left">Member ID</div>
                <div style="width: 40%; float: left; text-align: left">Member Name</div>

                <div style="width: 15%; float: left;">Payment&nbsp;Title</div>
                <div style="width: 15%; float: left;">Your&nbsp;PT</div>

                <div style="width: 16%; padding-left: 1rem; text-align: left; float: left;">Bonus</div>

                
                <!-- div style="width: 9%; float: left;">Total PT</div -->
            </div>
            
            <qiong-space :space="'0.15rem'"></qiong-space>

            <div style="overflow: hidden; padding: 0.24rem 0px" v-for="(v, i) in items" :key="i">

                <div style="width: 14%; float: left; text-align: left">{{ v.member_code }}</div>
                <div style="width: 40%; float: left; text-align: left">{{ v.display_name }}</div>

                <div style="width: 15%; float: left;">Level&nbsp;{{ v.rank }}</div>
                <div style="width: 15%; float: left;">{{ v.management_pt }}&nbsp;PT</div>

                <div style="width: 16%; padding-left: 1rem; text-align: left; float: left;">{{ v.management_bonus }}</div>

                <!--div style="width: 7%; float: left;">&nbsp;<span>
                        {{ view.floatMul(conf.SHARE_RATIO, global_pv).toFixed(2) }}
                    </span>&nbsp;</div-->
                <!--div style="width: 9%; float: left;">{{ get_total_lead_pt }}&nbsp;PT</div-->

            </div>
        </div>

        <pdf-common-footer :res="result" slot="footer"></pdf-common-footer>

        <user-management-list ref="umlREF" slot="extra"></user-management-list>
    </pdf-content-layout>
</template>

<script>
import UserManagementList from '../../../../components/Data/Leader/UserManagementList.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import PdfCommonFooter from '../common/PdfCommonFooter.vue'
import PdfContentLayout from '../common/PdfContentLayout.vue'
import PdfEqualContent from '../common/PdfEqualContent.vue'
    export default {
  components: { QiongSpace, PdfContentLayout, PdfCommonFooter, UserManagementList, PdfEqualContent },
        props: {
            mine: { type: Object },
            _item: { type: Object }
        },
        data() {
            return {
                // get_total_lead_pt: 0,
                // global_pv: 0,
                // ratio: 0.015,
                // pv_res: 0,
                items: [ ],
                result: null,
                usd_res: 0
            }
        },
        mounted() {
            this.fetchItems()
            this.switchRes()
        },
        methods: {
            async fetchItems() {
                if (this._item && this._item.management_bonus) {
                    
                    if (this._item.management_bonus.management_bonus > 0) { this.items = [ this._item.management_bonus ] }
                    this.usd_res = this._item.management_bonus.total_bonus
                    this.usd_res = this.usd_res ? this.usd_res : 0
                }
            },
            switchRes() {
                this.result = [
                    { txt: 'Total Bonus:', content: 'US$&nbsp;' + this.usd_res }
                ]
            },
        },
    }
                
                /*
                    /* { txt: 'Total Pv:', content: this.pv_res  },  * /

            init() {
                const chronu = this.$store.state.chronus
                this.global_pv = chronu.period_total_pv ? chronu.period_total_pv : 0
                this.get_total_lead_pt = chronu.period_total_management_point ? chronu.period_total_management_point : 0
            },

                // this.pv_res = (this.pv_res) ? this.pv_res.toFixed(2) : 0.00

                let res = [ this.mine ] // this.$store.state.user_enroller


                res = res.filter(e => {
                    return (e.bonu_period.MPV > 0)
                })
                
                this.items = res.map(e => {
                    this.pv_res = this.view.floatAdd(
                        this.pv_res,
                        this.view.floatMul(this.conf.SHARE_RATIO, this.global_pv)
                    )
                    this.usd_res = this.view.floatAdd(
                        this.usd_res,
                        e.bonu_period.MPV
                    )

                    return e
                })
                */
</script>

<style lang="sass" scoped>
    
</style>