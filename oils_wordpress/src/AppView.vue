<template>
    <router-view v-if="$store.state.chronus"></router-view>
    <qiong-loading :bigger="2"  v-else></qiong-loading>
</template>

<script>
    import QiongLoading from './components/Qiong/Ui/QiongLoading.vue'
    export default {
        components: { QiongLoading },
    }
</script>