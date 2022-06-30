<template>
    
    <div class="qiong-tr qiong-txt-tr qiong-pb-7 qiong-pt-5 pager-tr">
        <div class="qiong-wide-11 pl-7">
            <div class="d-inline">{{ $t('ORDER.code_simple') }}</div>
            <sort-filter-trangle @sort_Father="uuid_sort" ref="sortUuid"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-10">
            <span>{{ $t('USER.member_code') }}</span>
            <sort-filter-trangle @sort_Father="member_code_sort" ref="sortMemberCode"></sort-filter-trangle>
        </div>
        <div class="qiong-wide-27">{{ $t('USER.member_display_name') }}</div>
        <div class="qiong-wide-11">{{ $t('ORDER.pay_date') }}</div>
        <div class="qiong-wide-6">{{ $t('USER.member_pv') }}</div>
        <div class="qiong-wide-12">{{ $t('ORDER.settlement') }}<span class="sub">( HK$ )</span></div>
        <div class="qiong-wide-10">{{ $t('ORDER.status') }}</div>
        <div class="qiong-wide-6"></div>
        <div class="qiong-wide-7">&nbsp;</div>
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
                if (typed != 11) {
                    this.$refs.sortUuid.rest()
                }
                if (typed != 12) {
                    this.$refs.sortMemberCode.rest()
                }
            },

            sort_control(sort, typed) {
                this.$emit('sort_Father', sort, typed)

            },
            uuid_sort(v) {
                this.sort_control(v, 11)
            },
            member_code_sort(v) {
                this.sort_control(v, 12)
            }
        },
    }
</script>

<style lang="sass" scoped>
.sub
    // font-size: 0.9em
    color: #1c2234
</style>