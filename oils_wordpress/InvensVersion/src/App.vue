<template>
    <v-app id="app">
        <div v-if="$store.state.token">
            <chronus-now v-if="need"></chronus-now>
        </div>

        <layout v-if="layout" @shimmer_Father="do_shimmer"></layout>
        <home-loading v-else></home-loading>
        
        <alter-dialog></alter-dialog>
    </v-app>
</template>

<script>
    import ChronusNow from './components/Data/Using/ChronusNow.vue'
    import AlterDialog from './components/Qiong/Dialog/AlterDialog.vue'
    import Layout from './Layout.vue'
import HomeLoading from './pages/Home/extra/HomeLoading.vue'

    export default {
        components: { ChronusNow, Layout, AlterDialog, HomeLoading },
        name: '',
        data() {
            return {
                need: false,
                layout: null,
                shimmer: true,

                loading: false,
            }
        },
        async mounted() { await this.root_router() },
        async created() { await this.app() },
        methods: {
            root_router() {
                return new Promise((rej, rev) => {
                    this.$router.onReady(() => {
                        const _layout = this.$route.query.layout
                        this.layout = _layout ? _layout : this.conf.LAYOUT.WORDPRESS
                        if (this.layout == this.conf.LAYOUT.WIDGET) { this.do_shimmer(false) }
                        this.$store.commit('saveLayout', this.layout)
                        rej( true )
                    })
                })
            },
            app() {
                return new Promise((rej, rev) => {
                    this.$store.commit('saveChronus', [ { }, false ])
                    this.need = true; if (this.$store.getters.checkChronus()) this.need = true;
                })
            },

            do_shimmer(v) { this.shimmer = v }
        },
        beforeDestroy() {
            localStorage.clear()
            sessionStorage.clear()
            window.sessionStorage.removeItem('sandyy_vx_tk')
            window.sessionStorage.removeItem('sandyy_active_code')
        },
    }
    
</script>

<style lang="sass">
@import "@/common/sass/base.sass"

// @import "/common/sass_page/base.sass"
.fade_out-leave,
.fade_out-leave-to
    transition: 1s all
    
.fade_out-leave
    opacity: 1
.fade_out-leave-to
    opacity: 0

</style>