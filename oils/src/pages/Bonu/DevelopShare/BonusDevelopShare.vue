<template>
    <bonus-layout :_root="root">

        <qiong-header>{{ $t('BONUS.NORMAL.lead_share_out') }} ({{ $t('BONUS.SHORT.usd_development') }})</qiong-header>

        <qiong-panel-element :need_space="false">
            
            <div class="qiong-pager-zebra qiong-pb-10 qiong-pt-5">
                <bonus-so-m-develop :me="mine" v-if="mine"></bonus-so-m-develop>
                <qiong-loading v-else></qiong-loading>
            </div>

            <div class="px-7 qiong-pt-20 pb-1">
                <div>
                    <div class="bonus-tip">&nbsp;&nbsp;&nbsp;{{ $t('CONTENT.bonus') }}{{ $t('CONTENT.tip') }}</div>
                    <bds-rules :me="mine" v-if="!loading"></bds-rules>
                </div>
            </div>

            <div class="mobie-table-simple qiong-pt-10">
                <div>
                    <bds-tr></bds-tr>
                    <qiong-space :space="'0.5vw'"></qiong-space>
                    <qiong-space :space="'1。5vh'"></qiong-space>

                    <bds-tree :users="children" :me="mine" v-if="!loading"></bds-tree>
                    <qiong-loading v-else></qiong-loading>
                </div>
            </div>
        </qiong-panel-element>


        <bonus-so-m-develop :__mode="_mode" :me="mine" v-if="mine" :working_type="2" class="qiong-pt-10"></bonus-so-m-develop>
        <location-me ref="locaMe"></location-me>

        <collection-ready @sign_Father="initMe" v-if="init"></collection-ready>
    </bonus-layout>
</template>

<script>

import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import BonusLayout from '../Layout/BonusLayout.vue'
import BonusSoMDevelop from '../Layout/BonusSoMDevelop.vue'
import BdsTree from './Inner/BdsTree.vue'
import BdsTr from './Inner/BdsTr.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import BdsRules from './Inner/Td/BdsRules.vue'

    export default {
  components: { LocationMe, BonusLayout, QiongHeader, QiongPanelElement,
    BonusSoMDevelop,
    QiongLoading,
    BdsTree,
    BdsTr,
    QiongSpace,
    CollectionReady,
    BdsRules, },
        props: [ '_mode' ],
        // 1 = 普通，2 = Admin 视角
        data() {
            return {
                root: false,
                init: true,
                loading: true,
                member_code: null,

                mine: null,
                children: null
            }
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
        async mounted() {

        },
        methods: {
            async initMe() {

                this.valuation()
                this.mine = await this.$refs.locaMe.locationMe_Async(this.member_code, 'ENROLLER')

                this.children = [ this.mine ]

                if (this.mine) setTimeout( e => { this.loading = false }, 400)
                this.init = false
            },

            valuation() {

                this.root = false
                this.loading = true

                this.mine = null

                const rt_id = this.$route.query.member_code
                if (rt_id) {
                    this.member_code = rt_id
                    
                    setTimeout(e => { this.root = true }, 300)
                } else {
                    this.member_code = this.$store.state.user_backend.member_code
                }
            },
        },
    }
</script>

<style lang="sass" scoped>
    
</style>