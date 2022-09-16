<template>
        <div class="qiong-td td-center">
            <div class="qiong-wide-5 tb-in-img">
                <img :src="v.product.product_image" v-if="v.product" class="img"/>
            </div>

            <div class="qiong-wide-13 pl-2">
                    {{ v.product.sku }}
            </div>
            <div class="qiong-wide-17 pl-2">
                <product-name-viewing :product="v.product" v-if="v.product"></product-name-viewing>
            </div>

                <div class="qiong-wide-9">
                    <span v-if="v.order">{{ v.order }}</span>
                    <span v-else class="txt-sus">(非訂單操作)</span>
                </div> 

            <div class="qiong-wide-8">
                <company-named-viewing class="qiong-txt-10" :named="v.stock_location" v-if="v.stock_location"></company-named-viewing>
            </div>
            <div class="qiong-wide-7">
                {{ v.original_quantity }}&nbsp;
                <span  :class="{ 'num_less': v.original_quantity <= 0 }" v-if="v.original_quantity <= 0">（缺貨）</span>
            </div>
            <div class="qiong-wide-8 pl-2">
                {{ v.difference }}
            </div>

            <div class="qiong-wide-10">
                <!--span v-if="i % 5 == 0">店鋪樣品消耗</!--span>
                <span v-else-if="i % 3 == 0">減貨</span>
                <span-- v-else>加貨</span-->
            </div>

            <div class="qiong-wide-12">
                {{ view.ser_timed(v.date, false, false) }}
            </div>
            <div class="qiong-wide-10">
                
                <!--span v-if="i % 5 == 0">銷售推廣</！span>
                <span v-else-if="i % 3 == 0">客人訂單</span>
                <span-- v-else>倉庫補充</span-->
            </div>
        </div>
        
</template>

<script>
import CompanyNamedViewing from '@/components/Viewing/Company/CompanyNamedViewing.vue'
import ProductNameViewing from '@/components/Viewing/ProductNameViewing.vue'

    export default {
        name: '',
        components: {
            CompanyNamedViewing,
                ProductNameViewing,
        },
        props: [ 'v' ]
    }
</script>

<style lang="sass" scoped>
.num_less
    color: #6c7076 // #797a7a
</style>