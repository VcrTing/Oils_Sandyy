<template>
    <div class="qiong-td qiong-txt-td qiong-txt-14 qiong-line-hight-21 qiong-pt-15 fx-l">


        <div class="qiong-wide-22 pr-3">
            <img class="img max-img" :src="img">
        </div>

        <div class="qiong-wide-58 iec-pro-pl pl-3">
            <div class="w-100 qiong-txt-tr fw-b">基本信息</div>
            <div class="w-100 qiong-td">
                <div class="qiong-wide-52">
                    <div>
                        單價:&nbsp;&nbsp;HK$&nbsp;{{ item.price }}
                    </div>
                    <div class="txt-sus kill">
                        原價:&nbsp;&nbsp;HK$&nbsp;{{ item.retail_price }}
                    </div>
                </div>
                <div class="qiong-wide-48">
                    PV:&nbsp;&nbsp;{{ item.pv }}
                </div>
            </div>

            <div class="w-100 qiong-txt-tr fw-b qiong-pt-10">庫存信息</div>
            <div class="w-100 qiong-td">
                <div class="qiong-wide-100">
                    <div v-for="(ck, k) in item.location" :key="k">
                        <span>
                            <company-named-viewing :named="ck.name"></company-named-viewing>&nbsp;
                            ({{ ck.name }})</span>:&nbsp;
                        <span>
                            {{ ck.quantity }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="qiong-wide-8"></div>

        <product-image-viewing ref="proREF"></product-image-viewing>
    </div>
</template>

<script>
import QiongImage from '@/components/Qiong/Ui/QiongImage.vue'
import InventoryContentNumViewing from '@/components/Viewing/Record/Inventory/InventoryContentNumViewing.vue'
import IrbSkuMsg from '../Content/IrbSkuMsg.vue'
import IrPlusOrMinus from '../../../Tool/IrPlusOrMinus.vue'
import ProductImageViewing from '../../../../../../components/Viewing/Static/ProductImageViewing.vue'
import CompanyNamedViewing from '../../../../../../components/Viewing/Company/CompanyNamedViewing.vue'
    export default {
        components: { QiongImage, IrbSkuMsg, InventoryContentNumViewing, IrPlusOrMinus, ProductImageViewing, CompanyNamedViewing },
        name: '',
        props: {
            item: Object
        },
        data() {
            return {
                img: ''
            }
        },
        mounted() {
            this.img = this.$refs.proREF.image(this.item.sku)
        },
    }
</script>

<style lang="sass" scoped>
.iec-pro-pl
    // padding-left: calc(3vw + 12px)

.img-irb
    img
        border-radius: 3px
        border: 1px solid #ddd
        // box-shadow: 0x 1px 8px -1px rgba(0, 0, 0, 0.67) !important

.max-img
    max-width: calc(5vw + 170px)
</style>