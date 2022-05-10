<template>
    <div class="pa-0">

        <qiong-space :space="'8px'" class="mobie-show"></qiong-space>

        <div class="qiong-td fw-b ec-mb-2 pa-0 mb-1">
            <div class="qiong-wide-28">訂單日期</div>
            <div class="qiong-wide-17">會員編號</div>
            <div class="qiong-wide-24">Role</div>
            <div class="qiong-wide-16 pr-0">訂單編號</div>
            <div class="qiong-wide-15 text-right pr-0 fx-r">
                <span class="d-ib">訂單點數</span>
            </div>
        </div>
        <div v-if="buys">
            <div class="qiong-td"
                v-for="(v, i) in buys" :key="i"
            >
                <div class="qiong-wide-28">{{ view.ser_timed(v.ordered_date, true) }}</div>
                <div class="qiong-wide-17">{{ v.customer_uuid.member_code }}</div>
                <div class="qiong-wide-24">{{ view.backend.view_role(v.role) }}</div>
                <div class="qiong-wide-16">
                    <a @click="$router.push(`/home/buys/records#pro_${v.uuid}`)" class="txt-acc">
                        {{ v.uuid }}
                    </a>
                </div>
                <div class="qiong-wide-15 text-right pr-0">{{ v.total_pv }}&nbsp;PV</div>
            </div>
        </div>

        <div v-else>
            <qiong-loading></qiong-loading>
        </div>
    </div>
</template>

<script>
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'

import app_init from '@/common/es/app_init/index'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'

    export default {
        components: { QiongLoading, QiongSpace },
        props: {
            me: {
                type: Object
            },
            chronu: {
                type: Number
            }
        },
        name: '',
        data() {
            return {
                pv_limit: 0,
                buys: [ ]
            }
        },
        async mounted() {
            this.pv_limit = app_init.conf.USER_PV_LIMIT
            await this.buysLoading()
        },
        methods: {
            filterRES(res) {
                res = res.filter(e => {
                    if (e.total_pv >= this.pv_limit) {

                        if (e.status == 'completed') {
                            return true
                        }
                    }

                    return false 
                })
                return res
            },

            async buysLoading() {
                const res = await this.conn.get(
                    this.api.orders,
                    this.$store.state.token,
                    {
                        'time_period': this.chronu,
                        'customer_uuid': this.me.id
                    }
                )

                if (res) {
                    this.buys = (res.length > 0) ? 
                        this.filterRES(res) : 
                        []
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
.txt-acc
    color: #067c83 // #0d97aa
</style>