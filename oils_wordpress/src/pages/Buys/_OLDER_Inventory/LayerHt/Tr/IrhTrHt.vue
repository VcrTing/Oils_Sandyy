<template>
    <div class="qiong-tr qiong-txt-tr qiong-pb-7 qiong-pt-5 pager-tr">
        <div class="qiong-wide-5">
            &nbsp;
        </div>
        <div class="qiong-wide-2 pr-0">&nbsp;</div>
        
        <div class="qiong-wide-13">
            sku
            <sort-filter-trangle @sort_Father="sortSkuJsz" ref="sortSkuJsz"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-22">
            英文名
            <sort-filter-trangle @sort_Father="sortNameJsz" ref="sortNameJsz"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-18">中文名</div>

        <div class="qiong-wide-10">
            PV
        </div>
        <div class="qiong-wide-20">
            庫存量
            <sort-filter-trangle @sort_Father="sortNumJsz" ref="sortNumJsz"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-10"></div>
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

            sortNameJsz(v) {
                console.log('V =', v)
            },
            sortSkuJsz(v) {

            },
            sortNumJsz(v) {

            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>