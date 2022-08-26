<template>
    <v-container fluid class="qiong-txt-td">

        <qiong-header-filter class="bg-none">
            <span slot="header">
                用戶列表
            </span>
            <div slot="filter">
                <!--button 
                    @click="$router.push('form_level_change')"
                    class="btn qiong-txt-12 btn-sec btn-lg an_righter">
                    更改 LP 等級&nbsp;<v-icon class="qiong-txt-14">mdi-arrow-top-right</v-icon>
                </button-->
            </div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <pw-user-tr></pw-user-tr>
            <pw-user-td :many="users"></pw-user-td>
            <nav v-if="loading"><qiong-loading></qiong-loading></nav>
        </qiong-panel-element>  

        <div class="fx-c mt-5 pt-3">
            <pagenation v-if="users_origin" :_limit="iimit" :_count="users_origin.length" @page_Father="pager"></pagenation>
        </div>

        <table-pager-footer></table-pager-footer>
        <!-- -->
        <pdf-pw-user></pdf-pw-user>

        <!-- -->
        <net-pw-user ref="pwuREF"></net-pw-user>

        <collection-ready @sign_Father="init"></collection-ready>
    </v-container>
</template>

<script>
import CollectionReady from '../../../../InvensVersion/src/components/Init/Ready/CollectionReady.vue'
import Pagenation from '../../../components/Bar/Pagenation/Pagenation.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import NetPwUser from '../../../extra/net/NetPwUser/NetPwUser.vue'
import PdfPwUser from '../../../pages/i/PdfPwUser/PdfPwUser.vue'
import PwUserTd from './Body/PwUserTd.vue'
import PwUserTr from './Top/PwUserTr.vue'

    export default {
  components: { QiongHeaderFilter, QiongPanelElement, QiongSpace, QiongLoading, Pagenation, TablePagerFooter, PwUserTr, PwUserTd, PdfPwUser, NetPwUser, CollectionReady },
        data() {
            return {
                users: [ ], iimit: 100, // users_origin: [ ],
                loading: true
            }
        },
        computed: {
            users_origin() { 
                let res = this.$store.state.user_collection
                return res ? res.sort((e, o) => {
                    let dic = false
                    try {
                        dic = (Number.parseInt(e.member_code) < Number.parseInt(o.member_code))
                    } catch(err) { }; return dic
                }): [ ]
            }
        },
        methods: {
            async _fetching() {
                return await this.$refs.pwuREF.user_of_iist()
            },

            async init() {
                this.loading = true
                this.pager(0, this.iimit)
                setTimeout(e => this.loading = false, 300)
            },

            pager(m, n) {
                this.users = this.users_origin.slice(m, n)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>