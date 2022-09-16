<template>
    <div class="pa-0">
        <div class="qiong-tr ec-mb-2 pa-0">
            <div class="qiong-wide-35">訂單日期</div>
            <div class="qiong-wide-17">會員編號</div>
            <div class="qiong-wide-20">Role</div>
            <div class="qiong-wide-14">訂單編號</div>
            <div class="qiong-wide-14 text-right pr-0">訂單點數</div>
        </div>
        <div v-if="_buys">
            <div class="qiong-td"
                v-for="(v, i) in _buys" :key="i"
            >
                <div class="qiong-wide-35">{{ view.ser_timed(v.ordered_date, true) }}</div>
                <div class="qiong-wide-17">{{ v.customer_uuid.member_code }}</div>
                <div class="qiong-wide-20">{{ bonus.has.order_role(v.role) }}</div>
                <div class="qiong-wide-14">{{ v.uuid }}</div>
                <div class="qiong-wide-14 text-right pr-0">{{ v.total_pv }}PV</div>
            </div>
        </div>

        <div v-else>
            <qiong-loading></qiong-loading>
        </div>
    </div>
</template>

<script>
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
        components: { QiongLoading },
        props: {
            _me: {
                type: Object
            },
            _buys: {
                type: Array
            }
        },
        name: '',
        data() {
            return {

            }
        },
        mounted() {
            
        },
        methods: {

        },
    }
</script>

<style lang="sass" scoped>
    
</style>