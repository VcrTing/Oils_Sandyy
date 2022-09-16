<template>
    <div class="qiong-td-hui ps-r proi-table pb-4">
        <qiong-space :space="'0.5vw'"></qiong-space>

        <pro-i-plus v-if="plus" :class="{ 'iitw-active': plus, 'iitw-hide': !plus }"
            @cancel_Father="() => plus = false"
        ></pro-i-plus>

        <div v-if="items && items.length > 0">
            <div class="qiong-td fx-l pb-1 qiong-pt-10"
            
                v-for="(v, i) in items" :key="i"
            >
                <div class="qiong-wide-15 qiong-pl-20">
                    {{ v.cate }}
                </div>
                <div class="qiong-wide-12">
                    {{ v.shop }}
                    <!--company-named-viewing :named="v.shop"></!--company-named-viewing-->
                </div>
                <div class="qiong-wide-12">
                    {{ v.num }}
                </div>
                <div class="qiong-wide-15">
                    {{ v.timed }}
                </div>
                <div class="qiong-wide-16">
                    {{ v.change_by }}
                </div>
                <div class="qiong-wide-30">
                    {{ v.mark }}
                </div>
            </div>
        </div>

        <qiong-empty v-else></qiong-empty>

    </div>
</template>

<script>
import QiongEmpty from '../../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongSpace from '../../../../../components/Qiong/Ui/QiongSpace.vue'
import CompanyNamedViewing from '../../../../../components/Viewing/Company/CompanyNamedViewing.vue'
import ProIPlus from '../Plus/ProIPlus.vue'
    export default {
  components: { QiongSpace, ProIPlus, CompanyNamedViewing, QiongEmpty },
        name: '',
        mounted() {

        },
        data() {
            return {
                plus: false,
                items: null
                /*[
                    { cate: 0, shop: '尖', num: '999', timed: '2021-12-12 12:23', change_by: 'sandyy@123.com', mark: '店铺加货' },
                    { cate: 1, shop: '尖', num: '120', timed: '2021-12-12 12:23', change_by: 'sandyy@123.com', mark: '店铺加货' },
                    { cate: 3, shop: '火', num: '2', timed: '2021-12-12 12:23', change_by: 'sandyy@123.com', mark: '店铺加货' },
                    { cate: 4, shop: '火', num: '10', timed: '2021-12-12 12:23', change_by: 'sandyy@123.com', mark: '店铺加货' },
                    { cate: 5, shop: '尖', num: '1', timed: '2021-12-12 12:23', change_by: 'sandyy@123.com', mark: '店铺加货' },
                ]*/
            }
        }
    }
</script>

<style lang="sass" scoped>
    
.proi-table
    border-bottom-left-radius: 8.5px
    border-bottom-right-radius: 8.5px
</style>