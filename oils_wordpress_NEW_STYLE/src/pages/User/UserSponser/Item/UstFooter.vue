<template>
    <div class="px-7">
        <qiong-sub-result :res="result" :bigger="0">
            <div class="next-header qiong-txt-14 mb-1">Total</div>
        </qiong-sub-result>
        
    </div>
</template>

<script>
import QiongSubResult from '../../../../components/Qiong/Pager/QiongSubResult.vue'
import QiongPageLing from '../../../../components/Qiong/QiongPageLing.vue'

    export default {
  components: { QiongPageLing, QiongSubResult },
        name: '',
        props: {
            result: {
                type: Array,
                default () {
                    return [
                        
                    ]
                }
            },

        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>