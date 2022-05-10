<template>
    <div class="qiong-tr qiong-txt-tr qiong-pb-7 qiong-pt-5 pager-tr">
        <div class="qiong-wide-20">
            英文名
            <sort-filter-trangle @sort_Father="sortName" ref="sortName"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-14">中文名</div>
        <div class="qiong-wide-13">
            SKU
            <sort-filter-trangle @sort_Father="sortSku" ref="sortSku"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-13">
            庫存總量
            <sort-filter-trangle @sort_Father="sortNum" ref="sortNum"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-11">
            庫存變動
        </div>
        <div class="qiong-wide-11">
            壞貨量
        </div>
        <div class="qiong-wide-11">
            換貨數量
        </div>
        <div class="qiong-wide-7"></div>
    </div>
</template>

<script>
import SortFilterTrangle from '@/components/Viewing/Filter/SortFilterTrangle.vue'
    export default {
  components: { SortFilterTrangle },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            resetSort() {

                if (typed != 11) {
                    this.$refs.sortName.rest()
                }
            },

            sortName(v) {
                console.log('V =', v)
            },
            sortSku(v) {

            },
            sortNum(v) {

            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>