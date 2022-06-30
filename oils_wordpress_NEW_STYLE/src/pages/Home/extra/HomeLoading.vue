<template>
    <nav class="home-loading flex-center">
        <qiong-loading :bigger="2"></qiong-loading>
    </nav>
</template>

<script>
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
        components: { QiongLoading }
    }
</script>

<style lang="sass">

</style>