<template>
    <div >
        <active-status-viewing :is_active="_is_active" :bigger="-1" class="qiong-txt-12"></active-status-viewing>
        
        <!-- div class="active-detail" :class="{ 'active-detail_active': show }">
            <div class="th">
                <div>用户名</div>
                <div>电话号码</div>
                <div class="t-r">订单消费</div>
            </div>
            <div class="tr">
                <div>{{ men.username }}</div>
                <div>{{ men.phone }}</div>
                <div class="t-r">HK&nbsp;{{ xiaof(men.orders_period) }}</div>
            </div>
        </!-->
    </div>
</template>

<script>
import ActiveStatusViewing from '../../../../components/Viewing/User/ActiveStatusViewing.vue'
    export default {
  components: { ActiveStatusViewing },
        name: '',
        props: {
            item: Object,
            _is_active: Boolean
        },
        mounted() {
            // this.init()
        },
        data() {
            return {
                men: { },
                show: false
            }
        },
        methods: {
            init() {
                let me = this.$store.state.user_enroller
                me = me.filter(e => this.item.member_code == e.member_code)
                me = me ? me[0] : { }
                this.men = me
            },
            change() {
                if (this._is_active) {
                    this.show = !this.show
                }
            },

            xiaof(os) {
                let res = 0
                if (os) { os.map(e => { res += e.product_total }) }
                return res.toFixed(2)
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>