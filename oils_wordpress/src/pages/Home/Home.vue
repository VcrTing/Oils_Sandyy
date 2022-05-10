<template>
    <home-layout>

        <div slot="menu" v-if="menu" class="z-max">

            <qiong-app-bar-trigger @btn_Father="$refs.menu.opened()"></qiong-app-bar-trigger>            
            <left-app-drawers class="menu" ref="menu"></left-app-drawers>
        </div>

        <div slot="content" v-if="!$store.state.loading">

            <init-app ref="initREF"></init-app>
            
            <active-shimmer :active="member_area" v-if="!$store.state.is_browser"></active-shimmer>

            <transition :name="transitionName">
                <router-view v-if="alive"/>
                <home-loading v-else></home-loading>
            </transition>
            
            <products-loading ref="productREF"></products-loading>
            <loading-trigger @loading_Father="initData"></loading-trigger>

            <home-modals></home-modals>
            <home-refreshing></home-refreshing>
        </div>

        <home-loading v-else slot="content"></home-loading>
        
    </home-layout>
</template>

<script>
import HomeLayout from '@/components/Layout/HomeLayout.vue'
import Chronus from './Chronus/Chronus.vue'
import QiongLoading from '../../components/Qiong/Ui/QiongLoading.vue'
import DataRunning from './DataRunning/DataRunning.vue'
import LeftAppDrawers from '../../components/Bar/LeftAppDrawers.vue'
import FlexIframePdf from '../i/Pdf/FlexIframePdf.vue'
import ProductsLoading from '../../components/Data/View/ProductsLoading.vue'
import ActiveShimmer from '../../components/Shimmer/ActiveShimmer.vue'
import QiongAppBarTrigger from '../../components/Qiong/Button/QiongAppBarTrigger.vue'
import InitApp from '../../components/Init/InitApp.vue'
import LoadingTrigger from '../../components/Conning/LoadingTrigger.vue'
import HomeModals from './Modal/HomeModals.vue'
import BonusEnrollerLineMe from '../../components/Data/Me/BonusEnrollerLineMe.vue'
import HomeRefreshing from './HomeRefreshing.vue'
import HomeLoading from './extra/HomeLoading.vue'

    export default {
        components: { HomeLayout,
                Chronus, QiongLoading, DataRunning, LeftAppDrawers, FlexIframePdf, ProductsLoading, ActiveShimmer, QiongAppBarTrigger,
                
                InitApp,
                LoadingTrigger,
                HomeModals,
                BonusEnrollerLineMe,
                HomeRefreshing,
                HomeLoading },
        name: '',
        provide() {
            return {
                reload: this.reload
            }
        },
        created() {
            const _menu = this.$route.query.menu
            if (_menu) {
                this.menu = JSON.parse(_menu)
            } else {
                this.menu = true
            }
        },
        
        watch: {
            $route(to, from) {
                const _to = to.path.split('/').length
                const _from = from.path.split('/').length
                this.transitionName = _to < _from ? 'slide-up' : 'slide-down'

                if (!this.transitionName) this.transitionName = 'slide-up';
            }
        },
        data() {
            return {
                alive: true,

                menu: false,
                
                member_area: true,

                transitionName: null
            }
        },
        async mounted() {

            await this.init()
            
            this.member_area = this.$store.state.user_backend.member_area ? true : false
            
        },
        methods: {

            initData() {
                this.$refs.initREF.valuation()
                this.$refs.initREF.init()
            },
            
            async init() {
                let res = await this.$refs.productREF.productLoading()
                this.$store.commit('saveProducts', res)
            },

            reload() {
                this.alive = false
                this.$nextTick(function() { this.alive = true })
            },
        },  
    }
</script>

<style lang="sass" scoped>
.slide-up, .slide-down
    transition: all 1s

.slide-up
    transform: translateY(20vh)
    
.slide-down
    transform: translateY(-20vh)

.home-loading
    background: #f5f5f5 !important
    min-height: 100vh
</style>