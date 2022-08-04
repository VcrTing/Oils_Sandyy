<template>
    <div class="lh-def_x2">
        <div class="qiong-td fx-l">
            <div class="qiong-wide-9 tb-first">
                {{ item.uuid }}
            </div>
            <div class="qiong-wide-10">
                {{ item.customer_uuid.member_code }}
            </div>
            <div class="qiong-wide-25">
                {{ item.customer_uuid.display_name }}
            </div>
            <div class="qiong-wide-15">
                {{ view.ser_timed(item.ordered_date, false, false) }}
            </div>
            <div class="qiong-wide-7">
                {{ item.total_pv }}
            </div>
            <div class="qiong-wide-12 pr-0">
                {{ item.product_total }}&nbsp;
                <span v-if="item.is_ewallet">
                    (含賬戶支付)
                </span>
            </div>
            <div class="qiong-wide-10" :class="status_class(item.status)">
                {{ item.status }}
            </div>
            <div class="qiong-wide-12">
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