<template>
    <div class="qiong-td w-full pr-0">
        <div class="qiong-wide-8 qiong-pt-5 pr-0">
            <qiong-image :src="item.product_uuid.product_image" class="rounded-lg product_sd flex-center"></qiong-image>
        </div>
        <div class="qiong-wide-47 qiong-pt-10 qiong-pl-20 product-msg-fix">
            <span class="qiong-txt-24 fw-b">
                <product-name-viewing :id="item.product_uuid.id" :product="item.product_uuid"></product-name-viewing>
            </span>
            <div class="qiong-txt-15 pt-1 nam_sub">
                數量:&nbsp;{{ item.quantity }}&nbsp;&nbsp;&nbsp;&nbsp;SKU:&nbsp;{{ item.product_uuid.sku }}
            </div>
        </div>

        <div class="qiong-wide-45 qiong-pt-10 pr-0 product-msg-fix">
            <div class="qiong-td qiong-txt-16 qiong-sub_header qiong-line-hight-25 text-right">

                <div class="qiong-wide-60">
                    價格/件:&nbsp;HK${{ item.unit_price }}
                </div>
                <div class="qiong-wide-40 pr-0">
                    PV/件:&nbsp;{{ item.pv / item.quantity }}
                </div>
                <!--div class="qiong-wide-30 text-right pr-0">
                 @click="$router.push('/home/buys/product_detail' + '?sku=' + item.product_uuid.sku)"
                    總價:&nbsp;{{ item.price * item.quantity }}
                </div-->
            </div>
        </div>
    </div>
</template>

<script>
import QiongImage from '../../../../components/Qiong/Ui/QiongImage.vue'
import ProductNameViewing from '../../../../components/Viewing/ProductNameViewing.vue'
    export default {
  components: { QiongImage, 
    ProductNameViewing },
        props: {
            item: {
                type: Object
            },
            order: {
                type: Object
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
    }
</script>

<style lang="sass" scoped>
.product-msg-fix
    transform: translateY(1vw)
    transition: all .4s

@media (max-width: 1420px) 
    .product-msg-fix
        transform: translateY(0.5vw)

@media (max-width: 1200px) 
    .product-msg-fix
        transform: translateY(0.1vw)

.nam_sub
    color: #777
    line-height: 1.4

.product_sd
    overflow: hidden
    border-radius: 5px
    min-height: calc(30px + 3vw) !important
    // border: 1px solid rgba(46, 47, 54, 0.12)
    box-shadow: -0.5px 1px 3px -2px rgba(0, 0, 0, 0.84)
    img
        border-radius: 6px
</style>