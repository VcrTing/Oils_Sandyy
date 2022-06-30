<template>
    <div class="qiong-td qiong-line-hight-16 fx-l ieh-td">
        <div class="qiong-wide-5 pt-1">
            <!--img :src="item.image_url" v-if="true" class="img"/-->
            
            <img :src="img" class="img"/>
        </div>
        
        <div class="qiong-wide-14 pl-3">
            <!--p class="a-pri" @click="$router.push({
                        path: 'product_detail',
                        query: {
                            'sku': item.sku
                        }
                    })">
                {{ item.sku }}
            </p-->
            {{ item.sku }}
        </div>

        <div class="qiong-wide-35 mobie-wide-21 pr-0">
            <div class="qiong-td fx-l">
                <div class="qiong-wide-48 qiong-line-hight-12 mobie-wide-0">
                    <span class="mobie-hide">
                        {{ item.translation.en }}
                    </span>
                </div>
                <div class="qiong-wide-52  mobie-wide-100 pr-3">{{ item.translation.hk }}</div>
            </div>
        </div>

        <div class="qiong-wide-7 mobie-wide-16 pr-0" style="min-width: 0px">
            {{ item.pv }}
        </div>

        <div class="qiong-wide-39 mobie-wide-45 pr-0 ">

            <div class="qiong-td fx-l">
                <div class="qiong-wide-28 pr-0">
                    <div class="btn-rego">全部</div>{{ item.total }}
                </div>
                <div class="qiong-wide-52 pr-0 fx-l">
                    <!-- :class="{ 'mr-5': i < item.location.length - 1 }" -->
                    <div class="d-ib"
                        :class="{ 'pr-5': i < item.location.length - 1 }"
                        v-for="(v, i) in item.location" :key="i">
                        
                        <company-named-viewing :named="v.name"></company-named-viewing>
                        {{ v.quantity }}
                    </div>
                </div>

                <div class="qiong-wide-20 pr-0 t-r">
                    <!--v-icon class="qiong-txt-14 mr-2">mdi-pencil</v-icon>
                    <v-icon-- class="qiong-txt-16 mr-3" @click="$router.push({
                        path: 'product_detail',
                        query: {
                            'sku': item.sku
                        }
                    })">mdi-eye</v-icon-->

                    <v-icon class="icon-tool_go">mdi-chevron-down</v-icon>
                </div>
            </div>
        </div>


        <product-image-viewing ref="proREF"></product-image-viewing>
    </div>
</template>

<script>
import InventoryNumViewing from '@/components/Viewing/Record/Inventory/InventoryNumViewing.vue'
import IrPlusOrMinus from '../../../Tool/IrPlusOrMinus.vue'
import CompanyNamedViewing from '../../../../../../components/Viewing/Company/CompanyNamedViewing.vue'
import ProductImageViewing from '../../../../../../components/Viewing/Static/ProductImageViewing.vue'
    export default {
  components: { InventoryNumViewing, IrPlusOrMinus, CompanyNamedViewing, ProductImageViewing },
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
            if (this.$refs.proREF) {
                this.img = this.$refs.proREF.image(this.item.sku)
                this.item._img = this.img
            }
        },
    }
</script>

<style lang="sass" scoped>
.ieh-td
    & > div:nth-child(6)
        display: none !important
</style>