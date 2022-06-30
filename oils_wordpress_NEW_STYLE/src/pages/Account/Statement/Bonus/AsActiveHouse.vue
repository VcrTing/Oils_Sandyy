<template>

    <statement-pager>
        <qiong-title-element slot="header">
            {{ $t('HEADER.active_house') }}
        </qiong-title-element>

        <div slot="body">

            <div class="qiong-tr qiong-txt-tr">
                <div class="qiong-wide-13">
                    {{ $t('USER.member_code_another') }}
                    <sort-filter-trangle @sort_Father="member_code_sort" ref="sortMemberCode"></sort-filter-trangle>
                </div>
                <div class="qiong-wide-44">
                    {{ $t('USER.member_username_another') }}
                </div>
                <div class="qiong-wide-9">&nbsp;</div>
                <div class="qiong-wide-11">
                    {{ $t('BONUS.PUBLIC.layer') }}
                </div>
                <div class="qiong-wide-13">
                    {{ $t('ORDER.code') }}
                </div>
                <div class="qiong-wide-10">
                    {{ $t('ORDER.point') }}
                </div>
            </div>

            <qiong-space :space="'0.2vw'"></qiong-space>
            <qiong-space :space="'0.5vh'"></qiong-space>

            <div v-if="ordering.length > 0">
                <div class="qiong-td txt-td-result"
                    v-for="(v, i) in ordering" :key="i"
                >
                    <div class="qiong-wide-13">{{ v.member_code }}</div>
                    <div class="qiong-wide-44">{{ v.display_name }}</div>
                    <div class="qiong-wide-9">&nbsp;</div>
                    <div class="qiong-wide-11">{{ v.level }}</div>
                    <div class="qiong-wide-13">{{ v.order_uuid }}</div>
                    <div class="qiong-wide-10" :class="{ 'txt-sus': v.order_pv < limit }">{{ v.order_pv }}</div>
                </div>
            </div>
            <div class="qiong-pt-20 pb-3 empty-content" v-else>
                <qiong-loading v-if="loading"></qiong-loading>
                <qiong-empty :bigger="0" v-else></qiong-empty>
            </div>

        </div>
        
        <qiong-sub-result :res="result" slot="footer"></qiong-sub-result>

    </statement-pager>

</template>

<script>
import QiongTitleElement from '../../../../components/Qiong/Ele/QiongTitleElement.vue'
import QiongSubResult from '../../../../components/Qiong/Pager/QiongSubResult.vue'
import QiongPageLing from '../../../../components/Qiong/QiongPageLing.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import SortFilterTrangle from '../../../../components/Viewing/Filter/SortFilterTrangle.vue'
import StatementPager from '../Layout/StatementPager.vue'
    export default {
        components: {
            QiongTitleElement,
                QiongPageLing,
                QiongEmpty,
                QiongSpace,
                QiongLoading,
                QiongSubResult,
                SortFilterTrangle,
                StatementPager

        },
        props: {
            me: {
                type: Object
            },
            _item: {
                type: Object
            }
        },
        data() {
            return {
                limit: 130,
                pvs: 0,
                ordering: [ ],
                loading: true
            }
        },
        mounted() {
            this.limit = this.bonus.conf.USER_PV_LIMIT_ACTIVE_HOUSE

            this.switchOrders()
        },
        computed: {

            has() { if (this._item && this._item.active_branch_bonus_detail) { return true } },

            result() {
                let res = [ 
                        { txt: this.$t('BONUS.NORMAL.usd_active_house'), content: `US$ 0` },
                        { txt: this.$t('BONUS.PUBLIC.order_total_pv'), content: `0` } 
                ]
                if (this.has) {
                    let usd = this._item.total_bonus // const usd = this.me.bonu_period.active_branch_payout.toFixed(2)
                    let pv = this.pvs // this._item.total_active_branch
                    usd = usd ? usd : 0
                    pv = pv ? pv : 0
                    
                    res[1].content = pv
                    res[0].content = `US$ ${ usd }`
                } return res
            }
        },
        methods: {
            switchOrders() {
                this.loading = true
                this.ordering = this.has ? this._item.active_branch_bonus_detail : [ ]

                let _pvs = 0
                this.ordering.map(e => { _pvs += e.order_pv })
                this.pvs = _pvs ? _pvs : 0
                setTimeout(e => this.loading = false, 200)
            },

            //
            resetSort(typed) {
                if (typed != 12) { this.$refs.sortMemberCode.rest() }
            },
            member_code_sort(v) { this.sort(v, 12) },

            // 
            async sort_by_member_code(v) {
                if (v > 0) {
                    this.ordering.sort((n, o) => {
                        return Number.parseInt(n.member_code) - Number.parseInt(o.member_code)
                    })
                } else if (v < 0) {
                    this.ordering.sort((n, o) => {
                        return Number.parseInt(o.member_code) - Number.parseInt(n.member_code)
                    })
                } else { this.ordering = [ ]; this.switchOrders() }
            },
            sort(v, typed) {
                if (this.loading == false) {
                    this.loading = true
                    this.resetSort(typed)
                    
                    if (typed == 12) { this.sort_by_member_code(v) }
                    setTimeout(e => { this.loading = false }, 300)
                }
            },

        },
    }
    /*
                this.total = 0
                this.ordering = [ ]

                this.ordering = this.me.bonu_period.active_branch_bonus
                this.ordering.map(e => {
                    
                    this.total = this.view.floatAdd(
                        this.total,
                        e.order_pv
                    )
                })
                this.total = Math.ceil(this.total)

                for (let u of this.$store.state.user_collection) {
                    this.ordering.map( e => {
                        if (e.member_code == u.member_code) {
                            e.display_name = u.display_name
                        }
                        return e
                    })
                }

    */
</script>

<style lang="sass" scoped>
.empty-content
    // min-height: calc( 270px + 5vw )
</style>