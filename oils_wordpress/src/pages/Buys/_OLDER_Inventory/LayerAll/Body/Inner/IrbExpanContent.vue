<template>
    <div class="qiong-td qiong-pt-15">

        <div class="qiong-wide-7"></div>
        <div class="qiong-wide-10 img-irb">
            <qiong-image :src="item.image_url"></qiong-image>
        </div>
        <div class="qiong-wide-10"></div>

        <div class="qiong-wide-20">
            <irb-sku-msg :pv="item.pv" :price="item.retail_price" :price_vip="item.price"></irb-sku-msg>
        </div>
        <div class="qiong-wide-13">
            
            <inventory-content-num-viewing v-for="(e, k) in item.location" :key="k" :typed="e.location_name">
                {{ e.in_stock }}
            </inventory-content-num-viewing>

        </div>
        <div class="qiong-wide-12">

            <inventory-content-num-viewing v-for="(e, k) in item.inventory" :key="k" :typed="e.typed">
                <ir-plus-or-minus :is_add="e.is_add"></ir-plus-or-minus>&nbsp;{{ e.change }}
            </inventory-content-num-viewing>
            
        </div>
        <div class="qiong-wide-11">
            
            <inventory-content-num-viewing v-for="(e, k) in item.inventory" :key="k" :typed="e.typed">
                {{ e.broken }}
            </inventory-content-num-viewing>

        </div>
        <div class="qiong-wide-11">
            
            <inventory-content-num-viewing v-for="(e, k) in item.inventory" :key="k" :typed="e.typed">
                {{ e.back }}
            </inventory-content-num-viewing>

        </div>
        <div class="qiong-wide-6">
            
        </div>
    </div>
</template>

<script>
import QiongImage from '@/components/Qiong/Ui/QiongImage.vue'
import InventoryContentNumViewing from '@/components/Viewing/Record/Inventory/InventoryContentNumViewing.vue'
import IrbSkuMsg from '../Content/IrbSkuMsg.vue'
import IrPlusOrMinus from '../../../Tool/IrPlusOrMinus.vue'
    export default {
        components: { QiongImage, IrbSkuMsg, InventoryContentNumViewing, IrPlusOrMinus },
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
.img-irb
    img
        border: 1px solid #eee
        box-shadow: 0x 1px 8px -1px rgba(0, 0, 0, 0.67) !important
</style>