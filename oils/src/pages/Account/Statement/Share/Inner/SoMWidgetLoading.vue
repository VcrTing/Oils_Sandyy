<template>
    <div class="somw-loading">
        <qiong-loading></qiong-loading>
    </div>
</template>

<script>
import QiongLoading from '../../../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
        components: {
            QiongLoading            
        },
    }
</script>

<style lang="sass" scoped>
    
.somw-loading
    min-height: calc( 7vh + 3vw )
    // background: #f7f7f7
    border-radius: 12px
    transition: all .3s
    &:hover
        background: #f7f7f7
</style>