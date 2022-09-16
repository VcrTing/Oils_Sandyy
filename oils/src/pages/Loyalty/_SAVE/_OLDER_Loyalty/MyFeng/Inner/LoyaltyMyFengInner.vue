<template>
    <div>

        <v-row class="text-center qiong-pt-20" v-if="item">
            <v-col :sm="col" :cols="12">
                <div class="taped">
                    <div class="tap-header">當前忠誠點數回饋比例</div>
                    <!-- div class="tap-content">{{ item.LP_percentage * 100 }}<span>%</span></!-->
                    <div class="tap-conten tap-img qiong-pt-10">
                        <loyalty-ratio-one-viewing :ratio="item.LP_percentage * 100"></loyalty-ratio-one-viewing>
                    </div>
                </div>
            </v-col>
            <v-col :sm="col" :cols="12">
                <div class="taped">
                    <div class="tap-header">連續成為忠誠客戶月數</div>
                    <div class="tap-content">
                        {{ item.consecutive_month }}
                        <span>個月</span>
                    </div>
                </div>
            </v-col>
            <v-col :sm="col" :cols="12">
                <div class="taped">
                    <div class="tap-header">現有忠誠度(LP)積分</div>
                    <div class="tap-content">
                        {{ item.LP_available }}
                        <span>LP</span>
                    </div>
                </div>
            </v-col>
        </v-row>

        <lmfi-my-record :_monthlys="monthlys" :_loading="loading"></lmfi-my-record>
        <lmfi-opt-logo :_monthlys="monthlys" :_loading="loading"></lmfi-opt-logo>

        <loyalty-wallet-me ref="loyaltyREF"></loyalty-wallet-me>

    </div>
</template>

<script>
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
import QiongLoading from '@/components/Qiong/Ui/QiongLoading.vue'
import LoyaltyWalletMe from '@/components/Data/Loyalty/LoyaltyWalletMe.vue'
import QiongEmpty from '../../../../../components/Qiong/Ui/QiongEmpty.vue'
import LoyaltyRatioOneViewing from '@/components/Viewing/Static/LoyaltyRatioOneViewing.vue'
import LmfiMyRecord from './LmfiMyRecord.vue'
import LmfiOptLogo from './LmfiOptLogo.vue'

    export default {
        components: { QiongSpace, QiongLoading, LoyaltyWalletMe, QiongEmpty, LoyaltyRatioOneViewing, LmfiMyRecord, LmfiOptLogo },
        name: '',
        props: {
            col: {
                type: Number,
                default: 4
            },
            rerow: {
                type: Boolean,
                default: false
            },
            _member_code: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                loading: true,
                member_code: null,

                tutal: [
                    {
                        txt: '當前忠誠點數回饋比例',
                        content: '0',
                        unit: '%'
                    },
                    {
                        txt: '現有忠誠度(LP)積分',
                        content: '0',
                        unit: 'LP'
                    },
                    {
                        txt: '連續成為忠誠客戶月數',
                        content: '0',
                        unit: '個月'
                    },
                ],

                item: null,
                monthlys: [ ]
            }
        },
        mounted() {
            this.valuation()

            this.lunchingWallet()
        },
        computed: {
            result() {
                if (this.item) {
                    this.tutal[1].content = this.item.LP_available
                    this.tutal[2].content = this.item.consecutive_month
                    this.tutal[0].content = this.item.LP_percentage * 100
                }

                return this.tutal
            }
        },
        methods: {
            valuation() {
                this.member_code = this._member_code ? this._member_code : this.$store.state.user_backend.member_code
            },

            async lunchingWallet() {
                let res = [ ]
                this.loading = true
                
                res = await this.$refs.loyaltyREF.lunching(this.member_code)
                /*
                try {
                    res = await this.$refs.loyaltyREF.lunching(this.member_code)
                } catch(err) {
                    
                }
                */
                if (res) {
                    this.monthlys = res.monthlys
                    this.item = res

                    console.log('My Feng =', res)
                    this.loading = false
                }
            },
        }
    }
</script>

<style lang="sass" scoped>
.empty
    width: 100%
</style>