<template>
    <div>
        <div class="qiong-td">
            <div class="qiong-wide-40">
                <div class="bonus-tip" :class="extra_class">&nbsp;&nbsp;&nbsp;{{ header }}</div>
            </div>
            <div class="qiong-wide-60 flex-right">
                <slot name="tool"></slot>
            </div>
        </div>
        <qiong-space :space="'2vh'"></qiong-space>
        
        <slot name="body"></slot>

        <qiong-space :space="'2vh'"></qiong-space>

    </div>
</template>

<script>
import QiongSpace from '../Qiong/Ui/QiongSpace.vue'
    export default {
        components: { QiongSpace },
        props: {
            header: String,
            extra_class: String
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>