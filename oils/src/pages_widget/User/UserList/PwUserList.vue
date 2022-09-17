<template>
    <v-container fluid class="qiong-txt-td">

        <qiong-header-filter class="bg-none">
            <span slot="header">
                用戶列表
            </span>
            <div slot="filter">
                <pw-user-search :many="users_origin" @ciear="() => search(0)" @result="(v) => search(v)"/>
            </div>
        </qiong-header-filter>

        <div class="pb-1"></div>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <pw-user-tr :many="users_origin" @sign="refreshMany"></pw-user-tr>
            <pw-user-td v-if="!loading" :many="users"></pw-user-td>
            <nav v-else><qiong-loading></qiong-loading></nav>
        </qiong-panel-element>  

        <div class="fx-c mt-5 pt-3">
            <pagenation v-show="users_origin" :_limit="iimit" :_count="users_origin.length" @page_Father="pager"></pagenation>
        </div>

        <table-pager-footer></table-pager-footer>

        <!-- -->
        <pdf-pw-user v-if="is_pdf" :users="users_origin"></pdf-pw-user>

        <!-- -->
        <net-pw-user ref="pwuREF"></net-pw-user>

    </v-container>
</template>

<script>
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
import PwUserSearch from './Top/PwUserSearch.vue'

    export default {
  components: { QiongHeaderFilter, QiongPanelElement, QiongSpace, QiongLoading, Pagenation, TablePagerFooter, PwUserTr, PwUserTd, PdfPwUser, NetPwUser, PwUserSearch },
        data() {
            return {
                users: [ ], iimit: 50,
                users_origin: [ ],
                loading: true
            }
        },
        computed: {
            is_pdf() {
                let src = this.users_origin
                return (src && src.length > 0)
            }
        },
        mounted() { this.init() },
        methods: {
            async _fetching() {
                return await this.$refs.pwuREF.user_of_iist()
            },

            async init() {
                this.refreshMany(await this._fetching())
            },

            search(v) {
                this.users = (v == 0) ? this.users_origin : v
            },

            pager(m, n) {
                this.users = this.users_origin.slice(m, n)
            },

            refreshMany(v) {
                this.loading = true
                this.users_origin = v
                this.pager(0, this.iimit)
                setTimeout(e => this.loading = false, 300)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>