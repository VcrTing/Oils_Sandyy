<template>
    <v-container fluid class="qiong-txt-td">

        <qiong-header-filter>
            <div slot="header">購買記錄</div>
            <!--go-down-trigger slot="filter"></!--go-down-trigger -->
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <div>
                <qiong-space :space="'0.2vw'"></qiong-space>
                <buy-records-table-header @sort_Father="sort" ref="tbHeader"></buy-records-table-header>
                <qiong-space :space="'0.1vw'"></qiong-space>

                <buys-records-table :buy="buys" v-if="!loading"></buys-records-table>
                <qiong-loading v-else :bigger="1" class="qiong-mt-20"></qiong-loading>
            </div>
        </qiong-panel-element>

        <qiong-sub-result :res="footer" :need_line="false" class="mt-3 px-7">
            <div class="next-header">Total</div>
        </qiong-sub-result>
            
        <qiong-space :space="'7vh'"></qiong-space>
        <pdf-buy :records="buys" v-if="!loading"></pdf-buy>

        <table-pager-footer></table-pager-footer>
    </v-container>
</template>

<script>
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'

import QiongPageLing from '../../../components/Qiong/QiongPageLing.vue'
import QiongPagePanel from '../../../components/Qiong/QiongPagePanel.vue'
import BuysRecordsTable from './Inner/BuysRecordsTable.vue'
import BuyRecordsTableHeader from './Inner/BuyRecordsTableHeader.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import PdfBuy from '../../i/PdfRecord/PdfBuy/PdfBuy.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongSubResult from '../../../components/Qiong/Pager/QiongSubResult.vue'

import GoDownTrigger from '../../../components/Qiong/Tool/GoDownTrigger.vue'

    export default {
  components: { QiongHeaderFilter, QiongPageLing, QiongPagePanel, BuyRecordsTableHeader, 
        BuysRecordsTable, QiongLoading, QiongPanelElement,
        PdfBuy ,
        QiongSpace ,
        TablePagerFooter,
        QiongSubResult,
        GoDownTrigger
    },
        name: '',
        data() {
            return {
                buys: null,
                buys_origin: [ ],

                total: 0,
                total_new: 0,
                loading: true
            }
        },
        async mounted() {
            await this.buysLoading()
        },
        computed: {
            need_down() {
                let res = this.buys ? this.buys.length : 0
                res = res > 5 ? true : false
                return res
            },
            footer() {

                if (this.buys) {

                    return [
                        {
                            txt: '首購金額',
                            content: 'HK$ ' + this.total_new
                        },
                        {
                            txt: '金額總計',
                            content: 'HK$ ' + this.total
                        },
                    ]
                }
            }
        },
        methods: {
            _scroll() {
                let pt = this.$route.fullPath.split('#')
                pt = pt.length > 1 ? pt[1] : null

                setTimeout(e => { this.view.scrollTo(pt) }, 400)
            },

            _num_footer(buys) {
                buys = buys.map(e => { 

                    this.total = this.view.floatAdd(this.total, e.product_total)
                    if (e.is_new) {
                        this.total_new = this.view.floatAdd(this.total_new, e.product_total)
                    }
                    return e 
                })

                this.total = this.total ? this.total : 0
                this.total_new = this.total_new ? this.total_new : 0

                return buys
            },
            
            async buysLoading() {
                    const res = await this.conn.get(this.api.orders, this.$store.state.token, {
                        'time_period': this.$store.state.chronus.id, '_sort': 'ordered_date:DESC',
                        '_limit': 999
                    })
                    if (res) {
                        this.buys = [ ]
                        const transfer = this.$store.state.user_collection
                        if (transfer) {
                            for (let j= 0; j< res.length; j++ ) {
                                for (let i= 0; i< transfer.length; i++ ) {
                                    const item = transfer[i]
                                    if (item.member_code == res[j].customer_uuid.member_code) {
                                        this.buys.push(res[j])
                                    }
                                } 
                            }
                        }
                    }

                    this.buys_origin = this._num_footer(this.buys)

                    this.loading = false

                    this._scroll()
                try {
                } catch (err) {
                    this.$store.commit('saveDialog', 500)
                    setTimeout(() => { this.$store.commit('saveDialog', 0) }, 4000)

                    this.$store.commit('saveLoading', true)
                    setTimeout(() => { this.$store.commit('saveLoading', false) }, 4000)
                    this.loading = false
                }
            },

            sort_by_uuid(v) {
                if (v > 0) {
                    this.buys.sort((n, o) => o.uuid - n.uuid )
                } else if (v < 0) {
                    this.buys.sort((n, o) => n.uuid - o.uuid )
                } else {
                    this.buysLoading()
                }
            },
            sort_by_member_code(v) {
                if (v > 0) {
                    this.buys.sort((n, o) => {
                        const n_rec = Number.parseInt(n.customer_uuid.member_code)
                        const o_rec = Number.parseInt(o.customer_uuid.member_code)
                        return n_rec - o_rec
                    })
                } else if (v < 0) {
                    this.buys.sort((n, o) => {
                        const n_rec = Number.parseInt(n.customer_uuid.member_code)
                        const o_rec = Number.parseInt(o.customer_uuid.member_code)
                        return o_rec - n_rec
                    })
                } else {
                    this.buysLoading()
                }
            },

            sort(v, typed) {

                if (this.loading == false) {
                    this.loading = true
                    this.$refs.tbHeader.resetSort(typed)

                    if (typed == 11) {
                        this.sort_by_uuid(v)
                    } else if (typed == 12) {
                        this.sort_by_member_code(v)
                    }

                    this.loading = false
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>