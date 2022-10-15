<template>
    <v-container fluid class="qiong-txt-td">
        <qiong-header-filter>
            <span slot="header">購買記錄</span>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <br-tr></br-tr>

            <buy-records-inner v-if="!loading" :items="buys"></buy-records-inner>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <widget-buys ref="buysREF"></widget-buys>
        <net-buy-order ref="orderREF"></net-buy-order>

        <table-pager-footer></table-pager-footer>
        <pdf-buy :records="buys" v-if="allow && $store.state.is_admin"></pdf-buy>
        <tool-ready @sign="init" v-if="$store.state.user_backend && !$store.state.loading"></tool-ready>
    </v-container>
</template>

<script>
import WidgetBuys from '../../../components/Data/Buys/WidgetBuys.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import ToolReady from '../../../components/Init/Ready/ToolReady.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import NetBuyOrder from '../../../extra/net/NetBuy/NetBuyOrder.vue'
import PdfBuy from '../../i/PdfRecord/PdfBuy/PdfBuy.vue'
import BrBody from './Body/BrBody.vue'
import BrTd from './Body/BrTd.vue'
import BuyRecordsInner from './BuyRecordsInner.vue'
import BrTr from './Top/BrTr.vue'

    export default {
        components: { QiongHeaderFilter
        ,BuyRecordsInner, QiongPanelElement, BrTr, BrBody, QiongSpace, WidgetBuys, QiongLoading, BrTd, PdfBuy, TablePagerFooter, NetBuyOrder,
                CollectionReady,
                ToolReady },
        data() {
            return {
                buys_origin: [ ],
                loading: true
            }
        },
        computed: {
            user_back() { return this.$store.state.user_backend },
            
            coii() { return this.$store.state.user_collection },
            allow() { return (this.coii && this.coii.length > 0) },
            buys() { return this.buys_origin ? this.meBuying(this.buys_origin) : [ ] }
        },
        methods: {
            async init() {
                this.loading = true
                this.buys_origin = await this.$refs.buysREF.swicthing()
                
                setTimeout(e => this.loading = false, 200)
            },

            meBuying(res) {
                let bu = [ ]
                if (res) {
                    let tsf = this.coii
                    tsf = tsf ? tsf : [ ]
                    if (tsf.length > 0) {
                        res.map(e => {
                            if (e.customer_uuid) {
                                let item = {}
                                for (let i= 0; i< tsf.length; i++ ) {
                                    item = tsf[i];
                                    (item.member_code == e.customer_uuid.member_code) ? bu.push(e) : undefined
                                } 
                            }
                        })
                    } else {
                        res.map(e => {
                            const cc = e.customer_uuid;
                            cc ? (cc.member_code == this.user_back.member_code) ? bu.push(e) : undefined : undefined
                        })
                    }
                }
                // bu.map(e => { e.is_ewallet ? console.log(e) : 0 ; return e})
                return bu
            }
        }
    }
</script>