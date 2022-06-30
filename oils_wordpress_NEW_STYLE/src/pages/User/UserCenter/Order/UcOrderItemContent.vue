<template>
    <div class="qiong-td qiong-pt-15 qiong-pb-10">
        <div class="qiong-wide-10 mobie-hide"></div>
        <div class="qiong-wide-63 mobie-wide-100 mobie-pl-7">
            <div class="fw-b qiong-txt-14">
                {{ $t( 'ORDER.code' ) }}:&nbsp;{{ view.if_def(buy.order_code) }}
            </div>
            <div class="qiong-td mt-3">

                <div class="qiong-wide-40 mobie-wide-100">
                    {{ $t( 'ORDER.pay_member' ) }}:&nbsp;

                    {{ view.if_def(buy.Origin_buyer_named) }}
                </div>
                <div class="qiong-wide-60 mobie-wide-100">{{ $t( 'ORDER.role' ) }}:&nbsp;

                    {{ view.if_def(buy.role) }}
                </div>
            </div>

            <div class="qiong-td mt-1 mobie-pt-12">
                <div class="qiong-wide-40 mobie-wide-100">
                    {{ $t( 'ORDER.billing_member' ) }}:&nbsp;

                    {{ view.if_def(buy.buyer_named) }}&nbsp;
                </div>
                <div class="qiong-wide-60 mobie-wide-100">
                    <phone-icon-viewing :rec="buy.buyer_phoned" :icon="false"></phone-icon-viewing>
                </div>
            </div>

            <div class="pt-2">
                {{ $t( 'ORDER.billing_member_address' ) }}:&nbsp;

                {{ view.if_def(buy.buyer_addr) }}
            </div>
        </div>

        <div class="mobie-wide-45 mobie-show">

        </div>
        <div class="qiong-wide-27 text-right mobie-wide-55 pc-pr-12 mobie-pr-3 mt-1">
            <div> &nbsp; </div>
            <div> &nbsp; </div>
            <div v-if="buy.coupon_code" class="qiong-td">
                <div class="qiong-wide-37 pr-0 ">
                    {{ $t( 'ORDER.coupon_code' ) }}:&nbsp;
                </div>
                <div class="qiong-wide-63 pr-0">{{ buy.coupon_code }}</div>
            </div>
            <div v-else class="mobie-hide">
                &nbsp;
            </div>

            <div class="qiong-td ">
                <div class="qiong-wide-37 pr-0 txt-sub_x2">
                    {{ $t( 'ORDER.pay_way' ) }}:&nbsp;
                </div>
                <div class="qiong-wide-63 pr-0">
                    <buy-way-viewing :order="buy"></buy-way-viewing>
                </div>
            </div>
            <div class="qiong-td mt-1 pb-3">
                <div class="qiong-wide-37 pr-0">
                    {{ $t( 'ORDER.pay_money' ) }}:&nbsp;
                </div>
                <div class="qiong-wide-63 pr-0 fw-b">HK$&nbsp;{{ buy.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import BuyWayViewing from '../../../../components/Viewing/Msg/BuyWayViewing.vue'
import PhoneIconViewing from '../../../../components/Viewing/Msg/PhoneIconViewing.vue'
    export default {
  components: { BuyWayViewing,
          
    PhoneIconViewing   },
        props: {
            index: {
                type: Number
            },
            buy: {
                type: Object
            }
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