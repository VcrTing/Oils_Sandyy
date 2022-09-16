<template>
    <div class="mt-3">

        <div class="">
            <qiong-title :size_class="'qiong-txt-22'">
                {{ me.display_name }}
            </qiong-title>
        </div>

        <div class="qiong-td mt-2">

            <div class="qiong-wide-27 ">
                <qiong-equal-content class="fw-b" :second_class="'ec-mb-2'">
                    <div slot="label" class="fw-b">會員編號</div>
                    <div slot="content">{{ me.member_code }} </div>
                </qiong-equal-content>

                <qiong-equal-content :second_class="'ec-mb-1'">
                    <div slot="label">用戶名稱</div>
                    <div slot="content">{{ me.username }}</div>
                </qiong-equal-content>

                <qiong-equal-content :second_class="'ec-mb-1'">
                    <div slot="label">本期獎金</div>
                    <div slot="content">{{ usd_res }}</div>
                </qiong-equal-content>

                <qiong-equal-content :second_class="'ec-mb-1'">
                    <div slot="label">職位</div>
                    <div slot="content"><level-viewing :item="$store.state.bonus.vip"></level-viewing></div>
                </qiong-equal-content>

            </div>
            <div class="qiong-wide-23">
                <qiong-equal-content class="fw-b" :first_class="'ec-wide-6chart'" :second_class="'ec-mb-2'">
                    <div slot="label">本周支付級別</div>
                    <div slot="content" v-if="$store.state.bonus">
                        <level-viewing :item="$store.state.bonus.vip"></level-viewing>  
                    </div>
                </qiong-equal-content>

                <qiong-equal-content :first_class="'ec-wide-6chart'">
                    <div slot="label">個人點數</div>
                    <div slot="content" v-if="me">{{ view.if_def(me.ipv, '0') }} </div>
                </qiong-equal-content>

                <qiong-equal-content :first_class="'ec-wide-6chart'">
                    <div slot="label">團隊點數</div>
                    <div slot="content" v-if="me">{{ view.if_def(me.son_pv, '0') }} </div>
                </qiong-equal-content>

                <qiong-equal-content :first_class="'ec-wide-6chart'">
                    <div slot="label">合資格下線</div>
                    <div slot="content" v-if="me">{{ view.if_def(me.son_can_num, '0') }} </div>
                </qiong-equal-content>

                <qiong-equal-content :first_class="'ec-wide-6chart'">
                    <div slot="label">領取獎金資格</div>
                    <div slot="content" v-if="me"> {{ bonus.has.team_layer(me.ipv) }} </div>
                </qiong-equal-content>

            </div>

            <div class="qiong-wide-50 pr-0">
                <as-top-msg-order :_me="me" :_buys="buys" v-if="$store.state.user_backend"></as-top-msg-order>
            </div>
        </div>
    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import QiongEqualContent from '../../../../components/Qiong/Pager/QiongEqualContent.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongTitle from '../../../../components/Qiong/Ui/QiongTitle.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import AsTopMsgOrder from './AsTopMsgOrder.vue'
    export default {
        props: {
            me: {
                type: Object
            },
            usd_me: {
                type: Object
            }
        },
        components: {
            QiongTitle,
                LevelViewing,
                QiongEqualContent,
                AsTopMsgOrder,
                QiongLoading
        },
        name: '',
        data() {
            return {
                buys: null,
            }
        },
        mounted() {
            this.buysLoading()
        },

        computed: {
            usd_res() {
                let res = 0
                if (this.usd_me) {
                    res = this.view.floatAdd(this.usd_me.bonus.usd_recommend, this.usd_me.bonus.usd_active_house)

                    res = this.view.floatAdd(this.usd_me.bonus.usd_team_layer, res)
                }
                return res
            }
        },
        methods: {
            async buysLoading() {
                const res = await this.conn.get(
                    this.api.orders,
                    this.$store.state.token,
                    {
                        'time_period': this.$store.state.chronus.id,
                        'customer_uuid': this.$store.state.user_backend.id
                    }
                )
                
                if (res) {
                    if (res.length > 0) {

                        this.buys = res.filter(e => {
                            
                            if (app_init.has.team_layer( e.total_pv )) {
                                return true
                            }
                            return false
                        })
                    } else {
                        this.buys = []
                        this.$emit('buyed_Father', false)
                    }
                }
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>