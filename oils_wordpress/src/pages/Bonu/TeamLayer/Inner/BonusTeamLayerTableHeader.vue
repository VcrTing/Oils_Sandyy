<template>
    
    <div class="qiong-tr qiong-pb-7 qiong-txt-tr">
        <div class="qiong-wide-13 pl-7">{{ $t('USER.member_code') }}
            <sort-filter-trangle @sort_Father="member_code_sort" ref="sortMemberCode"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-30">{{ $t('USER.member_display_name') }}</div>

        <div class="qiong-wide-9">{{ $t('USER.member_level') }}</div>
        <div class="qiong-wide-1">&nbsp;</div>
        <div class="qiong-wide-6">{{ $t('USER.member_pv') }}</div>
        <div class="qiong-wide-9 text-center">{{ $t('BONUS.PUBLIC.pay_index') }}</div>

        <div class="qiong-wide-10 text-center">{{ $t('BONUS.PUBLIC.up_comp') }}?</div>
        <div class="qiong-wide-10 text-center">{{ $t('BONUS.PUBLIC.usd_ratio') }}</div>
        <div class="qiong-wide-1">&nbsp;</div>
        
        <div class="qiong-wide-11">{{ $t('BONUS.PUBLIC.usd') }}</div>
    </div>
</template>

<script>
import SortFilterTrangle from '../../../../components/Viewing/Filter/SortFilterTrangle.vue'
    export default {
  components: { SortFilterTrangle },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            
            
            resetSort(typed) {
                if (typed != 12) {
                    this.$refs.sortMemberCode.rest()
                }
            },
            member_code_sort(v) {
                this.$emit('sort_Father', v, 12)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>