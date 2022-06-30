<template>
    <div>
        <div class="px-7 ie-table-header">
            <qiong-space :space="'0.2vw'"></qiong-space>
            <slot name="tr"></slot>
            <qiong-space :space="'0.1vw'"></qiong-space>
        </div>
        <slot name="td"></slot>
    </div>
</template>

<script>
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
    export default {
  components: { QiongSpace },
        
    }
</script>

<style lang="sass" scoped>
.ie-table-header
</style>