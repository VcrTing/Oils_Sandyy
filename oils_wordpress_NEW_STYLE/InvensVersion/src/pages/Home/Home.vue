<template>
    <home-layout>

        <div slot="content" v-if="!$store.state.loading">

            <active-shimmer :active="member_area" v-if="!$store.state.is_browser"></active-shimmer>

            <transition :name="transitionName">
                <router-view v-if="alive"/>
                <home-loading v-else></home-loading>
            </transition>
            
            <products-loading ref="productREF"></products-loading>
            <loading-trigger @loading_Father="initData"></loading-trigger>

        </div>

        <home-loading v-else slot="content"></home-loading>
    </home-layout>
</template>

<script>
import Chronus from './Chronus/Chronus.vue'
import QiongLoading from '../../components/Qiong/Ui/QiongLoading.vue'
import ProductsLoading from '../../components/Data/View/ProductsLoading.vue'
import ActiveShimmer from '../../components/Shimmer/ActiveShimmer.vue'
import LoadingTrigger from '../../components/Conning/LoadingTrigger.vue'
import BonusEnrollerLineMe from '../../components/Data/Me/BonusEnrollerLineMe.vue'
import HomeLoading from './extra/HomeLoading.vue'
import HomeLayout from '../../components/Layout/HomeLayout.vue'

    export default {
        components: {
    Chronus,
    QiongLoading,
    ProductsLoading,
    ActiveShimmer,
    LoadingTrigger,
    BonusEnrollerLineMe,
    HomeLoading,
    HomeLayout
},
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