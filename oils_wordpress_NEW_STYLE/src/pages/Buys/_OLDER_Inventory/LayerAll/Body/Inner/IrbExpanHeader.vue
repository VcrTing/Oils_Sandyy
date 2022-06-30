<template>
    <div class="qiong-td qiong-line-hight-16 fx-l">
        <div class="qiong-wide-20">{{ item.translation.en }}</div>
        <div class="qiong-wide-14">{{ item.translation.hk }}</div>
        <div class="qiong-wide-13">{{ item.sku }}</div>
        <div class="qiong-wide-13">
            <div class="btn-rego">全部</div>{{ item.total }}
        </div>
        <div class="qiong-wide-12">
            <ir-plus-or-minus :is_add="false"></ir-plus-or-minus>
            {{ }}
        </div>
        <div class="qiong-wide-11">{{ }}</div>
        <div class="qiong-wide-11">
            {{ }}
        </div>
        <div class="qiong-wide-6">
            <v-icon class="icon-tool_go">mdi-chevron-down</v-icon>
        </div>
    </div>
</template>

<script>
import InventoryNumViewing from '@/components/Viewing/Record/Inventory/InventoryNumViewing.vue'
import IrPlusOrMinus from '../../../Tool/IrPlusOrMinus.vue'
    export default {
  components: { InventoryNumViewing, IrPlusOrMinus },
        name: '',
        props: {
            item: Object
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>