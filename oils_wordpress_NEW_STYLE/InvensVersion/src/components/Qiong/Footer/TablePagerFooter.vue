<template>
    <div>
        <pti-go-top v-if="need_top"></pti-go-top>
        <qiong-space :space="height"></qiong-space>
    </div>
</template>

<script>
import PtiGoTop from '../Tool/PtiGoTop.vue'
import QiongSpace from "../Ui/QiongSpace.vue"

    export default {
        components: { QiongSpace, PtiGoTop },
        name: '',
        props: {
            need_top: {
                type: Boolean,
                default: true
            },

            height: {
                type: String,
                default: '210px'
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