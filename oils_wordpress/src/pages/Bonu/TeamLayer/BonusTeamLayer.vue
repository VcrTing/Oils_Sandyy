<template>
    <bonus-layout :_root="root" :_need_top="!root">

        <member-msg-widget :_code="member_code" v-if="!init"></member-msg-widget>
        
        <qiong-space :space="'24px'"></qiong-space>  
    
        <qiong-header-filter>
            <div slot="header">{{ $t('BONUS.NORMAL.usd_team_layer') }}</div>
            <!--go-down-trigger slot="filter"></!--go-down-trigger -->
        </qiong-header-filter>
        
        <qiong-panel-element :need_space="false" class="mobie-table">

            <bonus-team-layer-table-header @sort_Father="sort" ref="tbHeader"></bonus-team-layer-table-header>
            <bonus-team-layer-table :childs="childrens" v-if="!loading"></bonus-team-layer-table>
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
import BonusTeamLayerTable from './Inner/BonusTeamLayerTable.vue'
import BonusTeamLayerTableHeader from './Inner/BonusTeamLayerTableHeader.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSubResult from '../../../components/Qiong/Pager/QiongSubResult.vue'
import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import BonusLayout from '../Layout/BonusLayout.vue'
import BonuDownTrigger from '../Bar/BonuDownTrigger.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import GoDownTrigger from '../../../components/Qiong/Tool/GoDownTrigger.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'

    export default {
        components: {
            QiongHeader,
            QiongPagePanel,
                BonusTeamLayerTableHeader,
                BonusTeamLayerTable,
                QiongPanelElement,
                
                LocationMe,
                QiongLoading,
                QiongSubResult
   ,
                MemberMsgWidget,
                CollectionReady,
                
                BonusLayout,
                BonuDownTrigger,
                QiongHeaderFilter,
                GoDownTrigger,
                QiongSpace
            
        },name: '',
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
                            txt: this.$t('BONUS.NORMAL.usd_team_layer'),
                            content: '$' + this.mine.bonu_period.OPV.toFixed(2)
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

                await this.numTeamLayer()
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

                    this.childrens = many.filter(e => e.member_code != this.mine.member_code)
                }
            },

            numTeamLayer() {
                let that = this
                return new Promise((rej, rev) => {
                    
                    let res = [ ]
                    for (let child of that.childrens) {

                        let _pv = 0
                        let _usd = 0

                        //
                        this.child_num += 1
                        let inner = false
                        for (let team of that.mine.bonu_period.organisation_bonus) {

                            if (team.member_code == child.member_code) {
                                child.bonu_period.team_contribution = team

                                _pv = this.view.floatAdd(
                                    team.order_pv,
                                    _pv
                                )
                                _usd = this.view.floatAdd(
                                    team.bonus_pv,
                                    _usd
                                )
                                inner = true
                            }
                        }
                        if (!inner) {
                            child.bonu_period.team_contribution = {
                                bonus_percentage: '',
                                bonus_pv: '',
                                order_pv: 0,
                                order_uuid: '',
                                payment_level: '',
                            }
                        } else {
                            child.bonu_period.team_contribution.order_pv = _pv
                            child.bonu_period.team_contribution.bonus_pv = _usd
                        }
                        
                        res.push(child)
                    }

                    that.childrens = res

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

                    await this.numTeamLayer()
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