<template>
    <div class="app-shimmer">
        <!--div class="the_loading"-->
        <div class="shimmer">            
            <qiong-loading :bigger="2"></qiong-loading>
        </div>
    </div>
</template>

<script>
import QiongLoading from '../Qiong/Ui/QiongLoading.vue'
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
.shimmer
    width: 80vw 
    height: 80vw
</style>