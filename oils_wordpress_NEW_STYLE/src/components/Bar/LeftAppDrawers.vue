<template>
    <v-navigation-drawer

        :absolute="false"
        :temporary="false"
        v-model="drawer"
        width="290"
        app

        :mini-variant.sync="mini"
        mini-variant-width="68"

        :floating="true"
        :hide-overlay="!mobie"
        class="right-shadow app-bar"
    >

        <!-- 用户组建 -->
        <div v-if="!$store.state.loading" class="qiong-pt-10">
            <menu-msg-widget v-if="this.$store.state.platform_data" :id="this.$store.state.platform_data.member_code" :need_avatar="true"></menu-msg-widget>
        </div>
        <div v-else class="menu-loading qiong-pt-10">
            <qiong-loading></qiong-loading>
        </div>

        <!--
        <menu-split-line :_wallet="wallet"></menu-split-line>-->
        <qiong-gradient-line class="pl-4 qiong-pt-10 qgl-fix"></qiong-gradient-line>

        <!-- 按键列表 -->
        <lad-lister class="qiong-pt-10 "></lad-lister>
        <qiong-space :space="'4vh'"></qiong-space>

        <!-- 关闭按钮 -->
        <qiong-app-bar-closing v-if="mobie" @btn_Father="drawer = false"></qiong-app-bar-closing>

        <!-- 网络链接 -->
        <loyalty-wallet-me ref="walletREF"></loyalty-wallet-me>
        <tool-ready @sign="initMe" v-if="$store.state.user_backend && !$store.state.loading"></tool-ready>

    </v-navigation-drawer>
</template>

<script>
import LadLister from './LadLister.vue'
import LadMsg from './Inner/LadMsg.vue'
import LadBonus from './Inner/LadBonus.vue'
import MenuMsgWidget from './MenuMsgWidget.vue'
import QiongLoading from '../Qiong/Ui/QiongLoading.vue'
import LevelImageViewing from '../Viewing/LevelImageViewing.vue'
import QiongAppBarClosing from '../Qiong/Button/QiongAppBarClosing.vue'

import MenuSplitLine from './splitLine/MenuSplitLine.vue'
import QiongSpace from '../Qiong/Ui/QiongSpace.vue'
import QiongGradientLine from '../Qiong/Ui/QiongGradientLine.vue'
import ToolReady from '../Init/Ready/ToolReady.vue'
import LoyaltyWalletMe from '../Data/Loyalty/LoyaltyWalletMe.vue'

    export default {
        name: '',
        inject: [ 'reload' ],
        components: {

                LadLister,
                LadMsg,
                LadBonus,
                LevelImageViewing,
                MenuMsgWidget,
                QiongAppBarClosing,
                QiongLoading,
                MenuSplitLine,
                QiongSpace,
                QiongGradientLine,
                ToolReady,
                LoyaltyWalletMe  
        },
        data() {
            return {
                drawer: true,
                mini: false,

                mobie: true,

                me: null,
                wallet: null
            }
        },
        mounted() {

        },
        methods: {
            async initMe() {
                this.wallet = null
                this.me = this.$store.state.user_backend
                this.wallet = await this.$refs.walletREF.lunching(this.me.member_code)
                console.log('当前用户 =', this.me.member_code, this.wallet)
            },

            changeF() {
                this.drawer = !this.drawer
            },

            opened() {
                this.drawer = !this.drawer
            }
        }
    }
</script>

<style lang="sass" scoped>
    .right-shadow
        // box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14)

    .last-nav
        position: absolute
        bottom: 0
        width: 100%

    .menu-loading
        min-height: 106px

    .qgl-fix
        // width: 120%
        // transform: translateX(-16px)
</style>