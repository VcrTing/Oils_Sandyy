<template>
    <router-view v-if="$store.state.user_backend"></router-view>
    <home-loading v-else></home-loading>
</template>

<script>
    import QiongLoading from './components/Qiong/Ui/QiongLoading.vue'
    import HomeLoading from './pages/Home/extra/HomeLoading.vue'
    export default {
        components: { QiongLoading, HomeLoading },
        mounted() {
            console.log('USER =', this.user)
        },
        computed: {
            user() {
                return this.$store.state.user_backend
            }
        }
    }
</script>