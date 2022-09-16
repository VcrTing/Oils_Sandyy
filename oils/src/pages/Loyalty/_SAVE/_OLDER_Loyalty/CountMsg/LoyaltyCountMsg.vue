<template>
    <div>
        <qiong-header>
            用戶忠誠度資料
        </qiong-header>

        <qiong-panel-element :need_space="false" :extra_class="'mh-s'"> 

            <!-- div class="px-7">
                
                <qiong-space :space="'2vh'"></qiong-space>
                <qiong-space :space="'1vw'"></qiong-space>

                <div class="bonus-tip">&nbsp;&nbsp;&nbsp;資料詳情</div>
                <qiong-space :space="'0.5vw'"></qiong-space>

                <div v-for="(v, i) in result" :key="i" class="tip-item">
                    <span>{{ v.txt }}:&nbsp;</span>
                    <span>
                        {{ v.content }}&nbsp;{{ v.unit }}
                        <span v-if="i < (result.length - 1)">,</span>
                    </span>
                </div>

                <qiong-space :space="'2vh'"></qiong-space>
                <lcm-ratio-inner></lcm-ratio-inner>
                <qiong-space :space="'2vh'"></qiong-space>
            </div-->

            <v-row  class="px-7 text-center qiong-pt-15 pb-2">

                <v-col v-for="(v, i) in result" :key="i" :sm="3" :cols="12">
                    <div class="taped">
                        <div class="tap-header">{{ v.txt }}</div>
                        <div class="tap-content">
                            {{ v.content }}
                            <span>
                                {{ v.unit }}
                            </span>
                        </div>
                    </div>
                </v-col>
            </v-row>
                <qiong-space :space="'2vh'"></qiong-space>
            <!--div class="px-7">
                <qiong-space :space="'2vh'"></qiong-space>
                <lcm-ratio-inner></lcm-ratio-inner>
                <qiong-space :space="'4vh'"></qiong-space>
            </div-->
        </qiong-panel-element>

        <loyalty-wallet-me ref="walletREF"></loyalty-wallet-me>
        <loyalty-records-me ref="recordsREF"></loyalty-records-me>
    </div>
</template>

<script>
import LoyaltyRecordsMe from '../../../../components/Data/Loyalty/LoyaltyRecordsMe.vue'
import LoyaltyWalletMe from '../../../../components/Data/Loyalty/LoyaltyWalletMe.vue'
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../../components/Qiong/Pager/QiongHeader.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import LcmRatioInner from './Inner/LcmRatioInner.vue'

    export default {
        name: '',
        components: { QiongHeader, QiongPanelElement, LoyaltyRecordsMe, LoyaltyWalletMe, QiongSpace, LcmRatioInner },
        props: {
            _code: {
                type: String
            }
        },
        data() {
            return {
                monthy_LP: 0,
                loading: true,

                tutal: [
                    {
                        txt: '忠誠客戶月數',
                        content: '0',
                        unit: '個月'
                    },
                    {
                        txt: '分銷商等級',
                        content: '4',
                        unit: ''
                    },
                    {
                        txt: '當前點數回饋比例',
                        content: '0',
                        unit: '%'
                    },
                    {
                        txt: '本月忠誠積分',
                        content: '0',
                        unit: 'LP'
                    },
                ],

                item: null
            }
        },
        async mounted() {
            let res = await this.$refs.recordsREF.lunchingMonthly(
                this._code
            )

            this.monthy_LP = this.view.floatSub(
                res.res_in.toFixed(1),
                res.res_ot.toFixed(1)
            )

            res = await this.$refs.walletREF.lunching(this._code)

            if (res) { this.item = res }
        },
        computed: {
            result() {

                if (this.item) {
                    this.tutal[0].content = this.item.consecutive_month
                    this.tutal[2].content = this.item.LP_percentage * 100
                    this.tutal[3].content = this.monthy_LP
                }

                return this.tutal
            }
        },
        methods: {

        }
    }
</script>

<style lang="sass" scoped>
.tip-item
    display: inline
    margin-right: calc( 6px + 1.5vw )
</style>