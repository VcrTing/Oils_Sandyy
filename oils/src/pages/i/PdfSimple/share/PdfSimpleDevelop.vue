<template>
    <pdf-content-layout :is_null="is_view">

        <span slot="header">
            Leader Dividend - Development Bonus
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
                <div style="width: 15%; float: left;">{{ v.development_pt }}&nbsp;PT</div>

                <div style="width: 16%; padding-left: 1rem; text-align: left; float: left;">{{ v.development_bonus }}</div>

                <!--div style="width: 7%; float: left;">&nbsp;<span>
                        {{ view.floatMul(conf.SHARE_RATIO, global_pv).toFixed(2) }}
                    </span>&nbsp;</div-->
                <!--div style="width: 9%; float: left;">{{ get_total_lead_pt }}&nbsp;PT</div-->

            </div>
        </div>

        <pdf-common-footer :res="result" slot="footer"></pdf-common-footer>
        <user-develop-list slot="extra" ref="devREF"></user-develop-list>
    </pdf-content-layout>
</template>

<script>
import UserDevelopList from '../../../../components/Data/Leader/UserDevelopList.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import PdfCommonFooter from '../common/PdfCommonFooter.vue'
import PdfContentLayout from '../common/PdfContentLayout.vue'
    export default {
  components: { PdfContentLayout, PdfCommonFooter, UserDevelopList, QiongSpace },
        name: '',
        props: {
            mine: { type: Object  },
            _item: { type: Object }
        },
        data() {
            return {
                // get_total_lead_pt: 0,
                // my_lead_pt: 0,
                // global_pv: 0,
                items: [ ],
                usd_res: 0,
                result: null,
            }
        },
        computed: {
            is_view() {
                return true
            }
        },
        mounted() {
            this.fetchItems()
            this.switchRes()

            console.log('this.bonuss =', this._item)
        },
        methods: {
            async fetchItems() {
                if (this._item && this._item.development_bonus) {
                    if (this._item.development_bonus.development_bonus > 0) { this.items = [ this._item.development_bonus ] }
                    this.usd_res = this._item.development_bonus.total_bonus
                    this.usd_res = this.usd_res ? this.usd_res : 0
                }
            },
            switchRes() {
                this.result = [ { txt: 'Total Bonus:', content: 'US$&nbsp;' + this.usd_res } ]
            },
        },
    }
                /*

            init() {

                const chronu = this.$store.state.chronus
                
                this.global_pv = chronu.period_total_pv ? chronu.period_total_pv : 0
                this.get_total_lead_pt = chronu.period_total_development_point ? chronu.period_total_development_point : 0

                if (this.mine) {
                    this.usd_res = this.mine.bonu_period.DPV
                    this.my_lead_pt = this.mine.bonu_period.development_point
                }

                this.collection = this.$store.state.user_enroller
            }

                let res = await this.$refs.devREF.fetchingList(this.mine)
                if (res) {
                    // this.items = res
                    // this.switchRes()
                }
                */
</script>

<style lang="sass" scoped>
    
</style>