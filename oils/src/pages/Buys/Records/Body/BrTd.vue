<template>
    <div class="lh-def_x2">
        <div class="qiong-td fx-l">
            <div class="qiong-wide-8 tb-first">
                {{ item.uuid }}
            </div>
            <div class="qiong-wide-9">
                {{ item.customer_uuid.member_code }}
            </div>
            <div class="qiong-wide-24">
                {{ item.customer_uuid.display_name }}
            </div>
            <div class="qiong-wide-14">
                {{ view.ser_timed(item.ordered_date, false, false) }}
            </div>
            <div class="qiong-wide-6 pl-1">
                {{ item.total_pv }}
            </div>
            <div class="qiong-wide-10 pr-0">
                {{ item.product_total }}
            </div>
            <div class="qiong-wide-8">
                <span v-if="item.is_ewallet">{{ item.ewallet_detail.ewallet_used }}</span>
            </div>
            <div class="qiong-wide-5">
                <span v-if="item.is_LP">{{ item.lp_detail.lp_used }}</span>
            </div>
            <div class="qiong-wide-9" :class="status_class(item.status)">
                {{ item.status }}
            </div>
            <div class="qiong-wide-7">
                <span v-if="item.is_new" class="first-buy">
                    首購
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'item' ],
        mounted() {
        },
        methods: {
            status_class(txt) {
                if (txt == 'processing') {
                    return 'txt-sus'
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
.first-buy
    color: #b57f1e
</style>