<template>
    <bonus-layout :_root="root" :_need_top="!root">

        <member-msg-widget :_code="member_code" v-if="!init"></member-msg-widget>
        
        <qiong-space :space="'24px'"></qiong-space>
        
        <qiong-header-filter>
            <div slot="header">{{ $t('BONUS.NORMAL.usd_active_house') }}</div>
            <!--go-down-trigger slot="filter"></!--go-down-trigger -->
        </qiong-header-filter>
        
        <qiong-panel-element :need_space="false" class="mobie-table">

            <bonus-active-house-table-header @sort_Father="sort" ref="tbHeader"></bonus-active-house-table-header>
            <bonus-active-house-table :childs="childrens" v-if="!loading"></bonus-active-house-table>
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
import app_init from '@/common/es/app_init/index'

import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongPagePanel from '../../../components/Qiong/QiongPagePanel.vue'

import BonusActiveHouseTable from './Inner/BonusActiveHouseTable.vue'
import BonusActiveHouseTableHeader from './Inner/BonusActiveHouseTableHeader.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import QiongIconFixed from '../../../components/Qiong/Button/QiongIconFixed.vue'
import QiongSubResult from '../../../components/Qiong/Pager/QiongSubResult.vue'
import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import BonusLayout from '../Layout/BonusLayout.vue'
import BonuDownTrigger from '../Bar/BonuDownTrigger.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import GoDownTrigger from '../../../components/Qiong/Tool/GoDownTrigger.vue'

    export default {
        components: {
            QiongHeader,
            QiongPagePanel,
            BonusActiveHouseTableHeader,
            BonusActiveHouseTable,
            QiongPanelElement,
            QiongLoading,
                LocationMe,
                QiongIconFixed,
                QiongSubResult,
                MemberMsgWidget,
                CollectionReady,
                QiongSpace,
                BonusLayout 
                ,QiongHeaderFilter,
                BonuDownTrigger,
                GoDownTrigger 
        },name: '',inject: [ 'reload' ],
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
        async mounted() {

        },
        computed: {
            footer() {

                if (this.mine) {

                    return [
                        /*{
                            txt: this.$t('USER.childs_num'),
                            content: this.child_num
                        },*/
                        {
                            txt: this.$t('BONUS.NORMAL.usd_active_house'),
                            content: '$' + this.mine.bonu_period.active_branch_payout.toFixed(2)
                        },
                    ]
                }
            }
        },
        methods: {
            async initMe() {

                this.valuation()

                this.mine = await this.$refs.locaMe.locationMe_Async(this.member_code, 'SPONSER')
                this.init = false
                this.switchChidren()

                await this.numActiveHouse()
            },

            valuation() {
                this.root = false
                this.loading = true

                this.mine = null
                this.child_num = 0
                this.childrens = [ ]

                const rt_id = this.$route.query.member_code
                if (rt_id) {
                    this.member_code = rt_id
                    
                    setTimeout(e => { this.root = true }, 300)
                } else {
                    this.member_code = this.$store.state.user_backend.member_code
                }
            },
            switchChidren() {
                let many = this.$store.state.user_sponsor

                // 取出 Children
                if (many) {
                    app_init._build([ this.mine ], (user) => {
                        this.childrens.push(user)
                    })
                }
                if (many) {
                    many = this.childrens.sort((n, o) => {
                        return n.index - o.index
                    })
                    this.childrens = many.map(e => {
                        return e
                    })

                    setTimeout(() => {
                        this.loading = false
                    }, 400);
                    this.childrens = this.childrens.filter(e => e.member_code != this.mine.member_code)
                }
            },

            numActiveHouse() {
                let that = this
                return new Promise((rej, rev) => {
                    
                    for (let child of that.childrens) {
                        this.child_num += 1
                        let inner = false
                        let active_contribution = [ ]

                        for (let ah of that.mine.bonu_period.active_branch_bonus) {
                            if (ah.member_code == child.member_code) {
                                active_contribution.push(ah)
                                inner = true
                            }
                        }

                        if (!inner) {
                            active_contribution.push( 
                                {
                                    level: '',
                                    order_pv: '',
                                    order_uuid: '',
                                }
                            )

                            child.bonu_period.active_order_num = 0
                        } else {
                            child.bonu_period.active_order_num = active_contribution.length
                        }

                        child.bonu_period.active_contribution = active_contribution
                    }

                    setTimeout(() => { that.loading = false }, 200);
                    rej(true)
                })
            },
            // 
            async sort_by_member_code(v) {
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
                    await this.numActiveHouse()
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