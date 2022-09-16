<template>
    <bonus-layout :_root="root" :_need_top="!root">

        <member-msg-widget :_code="member_code" v-if="!init"></member-msg-widget>
        
        <qiong-space :space="'24px'"></qiong-space>  
    
        <!-- qiong-header >{{ $t('BONUS.NORMAL.usd_recommend') }}</qiong-header -->

        <qiong-header-filter>
            <div slot="header">{{ $t('BONUS.NORMAL.usd_recommend') }}</div>
            <!--go-down-trigger slot="filter"></!--go-down-trigger -->
        </qiong-header-filter>
        
        <qiong-panel-element :need_space="false" class="mobie-table">

            <bonus-recommend-table-header @sort_Father="sort" ref="tbHeader"></bonus-recommend-table-header>
            <bonus-recommend-table :childs="childrens" v-if="!loading"></bonus-recommend-table>
            <qiong-loading v-else></qiong-loading>

        </qiong-panel-element>

        <qiong-sub-result :res="footer" :need_line="false" class="mt-3 px-7">
            <div class="next-header">Total</div>
        </qiong-sub-result>


        <location-me ref="locaMe"></location-me>

        <collection-ready @sign_Father="initMe" v-if="init"></collection-ready>

    </bonus-layout>
</template>

<script>

import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongPagePanel from '../../../components/Qiong/QiongPagePanel.vue'

import BonusRecommendTable from './Inner/BonusRecommendTable.vue'
import BonusRecommendTableHeader from './Inner/BonusRecommendTableHeader.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import QiongIconFixed from '../../../components/Qiong/Button/QiongIconFixed.vue'
import QiongSubResult from '../../../components/Qiong/Pager/QiongSubResult.vue'
import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import BonusLayout from '../Layout/BonusLayout.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import BonuDownTrigger from '../Bar/BonuDownTrigger.vue'
import GoDownTrigger from '../../../components/Qiong/Tool/GoDownTrigger.vue'

    export default {
        components: {
            QiongHeader,
            QiongPagePanel,
            BonusRecommendTable,
            BonusRecommendTableHeader,
            QiongPanelElement, 
            QiongSpace,
            LocationMe,
            QiongLoading,
            QiongIconFixed,
            QiongSubResult,
                MemberMsgWidget,
                CollectionReady,
                BonusLayout,
                QiongHeaderFilter,
                BonuDownTrigger,
                GoDownTrigger,   
        },
        name: '',
        inject: [ 'reload' ],
        watch: {
            $route(to, from) {
                if (from.query) {
                    this.init = false
                    this.reload()
                    this.init = true
                }
            }
        },
        data() {
            return {
                root: false,
                init: true,
                loading: true,
                member_code: null,

                mine: null,
                child_num: 0,
                childrens: null
            }
        },
        mounted() {

        },
        computed: {
            footer() {

                if (this.mine) {

                    return [
                        {
                            txt: this.$t('BONUS.NORMAL.usd_recommend'),
                            content: '$' + this.mine.bonu_period.FPV.toFixed(2)
                        },
                    ]
                }
            }
        },
        methods: {
            async initMe() {

                this.valuation()
                
                this.mine = await this.$refs.locaMe.locationMe_Async(this.member_code, 'ENROLLER')
                this.init = false
                this.switchChidren()
            },

            valuation() {
                this.root = false
                this.loading = true

                this.mine = null
                this.child_num = 0
                this.childrens = [ ]

                const rt_id = this.$route.query.member_code
                if (rt_id) {
                    this.root = true
                    this.member_code = rt_id
                } else {
                    this.member_code = this.$store.state.user_backend.member_code
                }
            },

            switchChidren() {
                let childs = [ ]
                let many = this.$store.state.user_enroller
                // 取出 Children
                if (many) {
                    this.bonus._build([ this.mine ], (user) => {
                        childs.push(user)
                    })
                }

                // 优化 Many
                if (many) {
                    many = childs.sort((n, o) => n.index - o.index)
                    childs = many.map(e => {
                        e.bonu_period.pv_first = ''
                        e.bonu_period.order_date = null
                        e.bonu_period.usd_recommend = 0
                        e.bonu_period.order_recommend = ''
                        e.bonu_period.index_recommend = ''

                        this.mine.bonu_period.referral_bonus.map(r => {
                            if (r.member_code == e.member_code) {
                                e.bonu_period.pv_first = r.order_pv
                                e.bonu_period.order_date = r.ordered_date
                                e.bonu_period.usd_recommend = r.bonus_pv
                                e.bonu_period.order_recommend = r.order_uuid
                                e.bonu_period.index_recommend = r.payment_level
                            }
                            return r
                        })
                        return e
                    })
                    this.childrens = childs.filter(e => e.member_code != this.mine.member_code)
                    this.loading = false
                }

            },

            // 
            sort_by_member_code(v) {
                if (v > 0) {
                    this.childrens.sort((n, o) => {
                        const n_rec = Number.parseInt(n.member_code)
                        const o_rec = Number.parseInt(o.member_code)
                        return n_rec - o_rec
                    })
                } else if (v < 0) {
                    this.childrens.sort((n, o) => {
                        const n_rec = Number.parseInt(n.member_code)
                        const o_rec = Number.parseInt(o.member_code)
                        return o_rec - n_rec
                    })
                } else {
                    this.switchChidren()
                }
            },
            sort(v, typed) {

                if (this.loading == false) {
                    this.loading = true
                    this.$refs.tbHeader.resetSort(typed)
                    
                    if (typed == 12) {
                        this.sort_by_member_code(v)
                    }

                    setTimeout(e => { this.loading = false }, 300)
                }
            },
        },
    }
</script>

<style lang="sass" scoped>
    
</style>