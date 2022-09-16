<template>
    <pdf-content-layout :is_null="items.length > 0">

        <span slot="header">
            Leader Dividend - Management Bonus
        </span>
        <div slot="body">
                        <qiong-space :space="'1px'"></qiong-space>

            <div style="overflow: hidden;">
                <div style="width: 55%; float: left;">
                    <pdf-equal-content :bigger="1">
                        <span slot="k">Global Monthly Total Pv:</span>
                        <div slot="v">
                            {{ global_pv }}
                        </div>
                    </pdf-equal-content>
                </div>
                <div style="width: 30%; float: left;">
                    <pdf-equal-content :bigger="2">
                        <span slot="k">Management PT:</span>
                        <div slot="v">
                            {{ my_lead_pt }}
                        </div>
                    </pdf-equal-content>
                </div>
                <div style="width: 15%; float: left;">&nbsp;</div>


                <div style="width: 55%; float: left;">
                    <pdf-equal-content :bigger="1">
                        <span slot="k">Management Pv:</span>
                        <div slot="v">
                            {{ pv_res }}&nbsp;({{ global_pv }}*{{ view.floatMul(ratio, 100) }}%)
                        </div>
                    </pdf-equal-content>
                </div>
                <div style="width: 30%; float: left;">
                    <pdf-equal-content :bigger="2">
                        <span slot="k">Total PT:</span>
                        <div slot="v">
                            {{ get_total_lead_pt }}
                        </div>
                    </pdf-equal-content>
                </div>
                <div style="width: 15%; float: left;">&nbsp;</div>
            </div>

            <div>&nbsp;</div>

            <div style="overflow: hidden;">
                <div style="width: 25%; float: left;">Global Member Level</div>
                <div style="width: 23%; float: left;">Management PT Rule</div>
                <div style="width: 25%; float: left;">Number of Member </div>
                <div style="width: 15%; float: left;">PT</div>
                <div style="width: 12%; float: left;">&nbsp;</div>
            </div>

            <qiong-space :space="'0.1rem'"></qiong-space>

            <div style="overflow: hidden; line-height: 1.8rem;"
                v-for="(v, i) in items" :key="i"
            >
                <div style="width: 25%; float: left;">{{ v.globel_vip.nick }}</div>
                <div style="width: 23%; float: left;">
                    Each&nbsp;{{ v.get_lead_pv }} PT
                </div>
                <div style="width: 25%; float: left;">{{ v.child_num }}</div>
                <div style="width: 15%; float: left;">
                    <span v-if="v.total_lead_pv > 0">{{ v.total_lead_pv }}</span>
                </div>
                <div style="width: 12%; float: left;">&nbsp;</div>
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
        name: '',
        props: {
            mine: {
                type: Object
            }
        },
        data() {
            return {
                get_total_lead_pt: 0,
                my_lead_pt: 0,
                global_pv: 0,
                ratio: 0.015,
                
                items: [ ],
                result: null,

                pv_res: 0,
                usd_res: 0
            }
        },
        mounted() {
            this.fetchItems()
        },
        methods: {

            init() {
                const chronu = this.$store.state.chronus
                this.global_pv = chronu.period_total_pv ? chronu.period_total_pv : 0
                this.get_total_lead_pt = chronu.period_total_management_point ? chronu.period_total_management_point : 0

                if (this.mine) {
                    this.my_lead_pt = this.mine.bonu_period.management_point
                    this.usd_res = this.mine.bonu_period.MPV
                }
            },
            
            async fetchItems() {
                let res = await this.$refs.umlREF.fetchingList()

                if (res) {
                    this.items = res
            
                    this.init()
                    this.switchRes()
                }
            },
            
            switchRes() {

                let pv = this.view.floatMul(this.global_pv, this.ratio)
                this.pv_res = (pv) ? pv.toFixed(2) : 0.00

                this.result = [
                    {
                        txt: 'Calculation:',
                        content: this.pv_res + ' * ' + this.my_lead_pt + ' / ' + this.get_total_lead_pt
                    },
                    {
                        txt: 'Total Bonus:',
                        content: 'US$&nbsp;' + this.usd_res
                    }
                ]
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>