<template>
    <div v-if="items && items.length > 0">
        <div class="qiong-td td-center"
            v-for="(v, i) in items" :key="i"
        >
            <div class="qiong-wide-5 pr-2">
                <img :src="v.product.product_image" v-if="v.product" class="img"/>
            </div>
            <div class="qiong-wide-19 pl-2">
                <product-name-viewing :product="v.product" v-if="v.product"></product-name-viewing>
            </div>
            <div class="qiong-wide-7 pl-2">
                {{ v.order }}
                <!-- a :href="`/#/home/buys/records/#pro_${v.order}`">{{ v.order }}</!-->
            </div>
            <div class="qiong-wide-18">
                {{ v.user }}
            </div>

            <div class="qiong-wide-9">
                <company-named-viewing class="qiong-txt-10" :named="v.stock_location" v-if="v.stock_location"></company-named-viewing>
            </div>
            <div class="qiong-wide-8">
                {{ v.original_quantity }}&nbsp;
                <span  :class="{ 'num_less': v.original_quantity <= 0 }" v-if="v.original_quantity <= 0">（缺貨）</span>
            </div>
            <div class="qiong-wide-9 pl-2">
                {{ v.difference }}
            </div>


            <div class="qiong-wide-12">
                <span v-if="v.change_by">{{ v.change_by.username }}</span>&nbsp;
            </div>
            <div class="qiong-wide-12">
                {{ view.ser_timed(v.date, false, false) }}
            </div>
        </div>
    </div>
    <qiong-empty v-else class="qiong-pt-20"></qiong-empty>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import CompanyNamedViewing from '../../../../components/Viewing/Company/CompanyNamedViewing.vue'
import ProductNameViewing from '../../../../components/Viewing/ProductNameViewing.vue'

    export default {
        name: '',
        components: {
            CompanyNamedViewing,
                ProductNameViewing,
                QiongEmpty
        },
        props: {
            items: Array
        }
    }
</script>

<style lang="sass" scoped>
.num_less
    color: #6c7076 // #797a7a
</style>