<template>
    
    <div class="qiong-tr qiong-pb-7 qiong-txt-tr">
        <div class="qiong-wide-14 pl-7 pr-0">{{ $t('USER.member_code') }}
            <sort-filter-trangle @sort_Father="member_code_sort" ref="sortMemberCode"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-40">{{ $t('USER.member_display_name') }}</div>

        <div class="qiong-wide-10">{{ $t('USER.member_level') }}</div>

        <div class="qiong-wide-10">
            {{ $t('USER.sponsor_id') }}
        </div>
        <div class="qiong-wide-10 text-center">{{ $t('BONUS.PUBLIC.house') }}{{ $t('BONUS.PUBLIC.layer') }}</div>
        <div class="qiong-wide-14">
            {{ $t('BONUS.PUBLIC.active') }}{{ $t('BONUS.PUBLIC.house') }}
            {{ $t('USER.member_pv') }}
        </div>
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