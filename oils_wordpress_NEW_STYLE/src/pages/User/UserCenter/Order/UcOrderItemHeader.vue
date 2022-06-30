<template>
    <div class="qiong-td qiong-txt-td pr-0 mobie-pl-7">
        <div class="qiong-wide-10 mobie-hide"></div>
        
        <div class="qiong-wide-12 mobie-wide-22 pr-0 hv_left">
            <qiong-avatar-color :src="buy.product_uuid.product_image" class="user-buy-img fx-c"></qiong-avatar-color>
        </div>
        
        <div class="qiong-wide-50 qiong-pt-10 pl-3">
            <div class="qiong-txt-22 ">
                <product-name-viewing class="" :id="buy.product_uuid.id" :product="buy.product_uuid" v-if="$store.state.products"></product-name-viewing>
            </div>
            <div class="qiong-pt-5 mt-2 qiong-line-hight-15  txt-sub_x2">
                <div class="mobie-row">
                    <span>
                    {{ $t('ORDER.price') }}:&nbsp;

                    HK$&nbsp;{{ buy.price / buy.quantity }}</span>
                    <span class="txt-sus">，&nbsp;</span>
                </div>
                <div class="mobie-row">
                    <span>
                        {{ $t('ORDER.quantity') }}:&nbsp;

                        {{ buy.quantity }}</span>
                    <span class="txt-sus">，&nbsp;</span>
                </div>
                <div class="mobie-row op-80">
                    <span class="">SKU：
                        <!-- sku-viewing :product_id="buy.product_uuid.id"></!-->
                        {{ buy.product_uuid.sku }}
                    </span>
                </div>
                <div class="mobie-show txt-sub mt-2">
                    <v-icon size="16" class="">mdi-calendar</v-icon>
                    {{ view.ser_timed(buy.ordered_date, true, true) }}

                    {{ $t('ORDER.buy') }}
                </div>
            </div>
        </div>
        <div class="qiong-wide-28 text-right qiong-pt-10 pr-6 mt-1 qiong-txt-td">
            <div class="mobie-hide txt-sus">
                <v-icon size="16" class="">mdi-calendar</v-icon>&nbsp;
                {{ view.ser_timed(buy.ordered_date, true, true) }}
                {{ $t('ORDER.buy') }}
            </div>
            <div class="text-right qiong-txt-14 qiong-pt-10 mobie-pt-0">
                <span class="txt-sec an_lefter">
                    +&nbsp;{{ buy.pv }}PV 
                </span>
                <!--status-with-pv-viewing :num="buy.quantity" :pv="buy.pv + ''" :status="buy.status"></!--status-with-pv-viewing-->
            </div>
        </div>
    </div>
</template>

<script>
import QiongAvatarColor from '../../../../components/Qiong/Ui/QiongAvatarColor.vue'
import SkuViewing from '../../../../components/Viewing/Orders/SkuViewing.vue'
import StatusWithPvViewing from '../../../../components/Viewing/Orders/StatusWithPvViewing.vue'
import ProductNameViewing from '../../../../components/Viewing/ProductNameViewing.vue'
    export default {
        props: {
            index: {
                type: Number
            },
            buy: {
                type: Object
            }
        },
        components: { 
            QiongAvatarColor,
            ProductNameViewing,
                SkuViewing,
                StatusWithPvViewing 
        },
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            console.log('buy =', this.buy)
        },
    }
</script>

<style lang="sass" scoped>
.user-buy-img
    border-radius: 5.5px
    transition: all .622s
    transform: scale(1.08)
    *
        border: none !important
</style>