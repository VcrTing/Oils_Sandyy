<template>
    <v-container fluid class="qiong-txt-td">

        <member-msg-widget :_code="member_code" v-if="!init"></member-msg-widget>  
        
        <qiong-space :space="'24px'"></qiong-space>  
        
        <qiong-header-filter>
            <div slot="header">Sponsor 用戶結構</div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table">
            <user-sponser-tr></user-sponser-tr>
            
            <user-sponser-td :_me="mine" :users="main_tree" v-if="!loading"></user-sponser-td>
            
        </qiong-panel-element>

        <location-me ref="locaMe"></location-me>
        <collection-ready @sign_Father="initMe" v-if="init"></collection-ready>
        
        <div class="pti-go-top hand" @click="$router.go(-1)" v-if="root">
            <v-icon>mdi-chevron-left</v-icon>
        </div>

        <table-pager-footer :need_top="!root"></table-pager-footer>

        <pdf-user-roller :mode="'SPONSER'" :users="main_tree" v-if="!loading"></pdf-user-roller>
    </v-container>
</template>

<script>

import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import UserSponserTd from './Inner/UserSponserTd.vue'
import UserSponserTr from './Inner/UserSponserTr.vue'

import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import QiongIconFixed from '../../../components/Qiong/Button/QiongIconFixed.vue'

import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import PdfUserRoller from '../../i/PdfUserRoller/PdfUserRoller.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
    export default {
        components: {
            QiongHeader,
                QiongPanelElement,
                UserSponserTr,
                UserSponserTd,
                QiongSpace,
                QiongIconFixed,
                LocationMe,
                MemberMsgWidget,
                CollectionReady,
                PdfUserRoller,
                TablePagerFooter,
                QiongHeaderFilter
        },
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

                member_code: null,
                mine: null,

                main_tree: null,

                root: false,
                end_date: null,

                init: true,
                loading: true
            }
        },
        methods: {
            async initMe() {

                this.valuation()
                this.mine = await this.$refs.locaMe.locationMe_Async(this.member_code, 'SPONSER')

                this.init = false
                this.dealing()
            },
            valuation() {
                this.root = false
                this.loading = true
                
                this.mine = null
                this.main_tree = null
                this.end_date = this.view.ser_timed_list(this.$store.state.chronus.end)

                const rt_id = this.$route.query.member_code
                
                if (rt_id) {
                    this.member_code = rt_id
                    this.root = true
                } else {
                    this.member_code = this.$store.state.user_backend.member_code
                }
            },

            _build(users) {
                let res = [ ]

                users.map(e => {

                    let childs = [ ]

                    if ('children' in e) {
                        childs = this._build(e.children)
                    }

                    e.children = childs
                    e.index = e.index - this.main_tree.index

                    res.push(e)
                })

                return res
            },

            dealing() { 
                let res = [ ]

                this.main_tree = JSON.parse(JSON.stringify(this.mine))
                if (this.main_tree) { res = this._build([ this.main_tree ]) }   

                this.main_tree = res
                this.loading = false
            },
        }
    }
</script>

<style lang="sass" scoped>


</style>