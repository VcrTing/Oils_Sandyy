<template>
    <div class="loading-shimmer">
        <qiong-loading :bigger="1"></qiong-loading>
    </div>
</template>

<script>
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
  components: { QiongLoading },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.loading-shimmer
    width: 100% 
    height: 100vh
    background: #f1f1f1
</style>