<template>
    <div :class="{ 'qiong-pager-zebra': bg, 'qiong-pager-light': !bg}">
        <qiong-loading></qiong-loading>
    </div>
</template>

<script>
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
  components: { QiongLoading },
        props: [ 'bg' ]
    }
</script>

<style lang="sass" scoped>
    
</style>