<template>
    <div class="mobie-table-simple">
        <ie-num-panel class="">
            <ie-sample-cost :broken="product.broken" v-if="product" class="mt-1" ref="costInput"></ie-sample-cost>
        </ie-num-panel>
        
    </div>
</template>

<script>
import IeNumPanel from './Inner/IeNumPanel.vue'
import IeSampleCost from './Inner/IeSampleCost.vue'
    export default {
  components: { IeSampleCost,
                IeNumPanel },
        name: '',
        props: {
            product: Object
        },
        data() {
            return {
                
            }
        },

        methods: {
            costNum() {
                return this.$refs.costInput.v
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>