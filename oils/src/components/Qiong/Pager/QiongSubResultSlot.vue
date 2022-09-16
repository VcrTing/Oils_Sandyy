<template>
    <div class="pb-3  text-right">

        <qiong-page-ling v-if="lined"></qiong-page-ling>

        <qiong-space :space="'0.2vw'"></qiong-space>
        <qiong-space :space="'0.5vh'"></qiong-space>

        <slot></slot>
        
        <qiong-space :space="'0.2vw'"></qiong-space>
        <qiong-space :space="'0.7vh'"></qiong-space>
    </div>
</template>

<script>
import QiongPageLing from '../QiongPageLing.vue'
import QiongSpace from '../Ui/QiongSpace.vue'
    export default {
  components: { QiongPageLing, QiongSpace },
        name: '',
        props: {
            txt: {
                type: String
            },
            bigger: {
                type: Number,
                default: 1
            },
            lined: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>