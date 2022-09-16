<template>
    <div>
        <div class="fs-12 qiong-menu-sub" v-if="_bs">
            <div>
                {{ $t('CONTENT.self') }}{{ $t('USER.member_pv') }}：{{ view.if_def(_bs.individual_pv, '0') }}
            </div>
            <div class="">
                {{ $t('BONUS.NORMAL.team_sell_pv') }}：{{ view.if_def(_bs.organization_pv, '0') }}
            </div>
            <div class="">
                {{ $t('BONUS.NORMAL.active_qualified') }}：{{ view.if_def(son_can_num, '0') }}
            </div>
            <!--div class="">
                忠誠度積分：{{ loyalty }}&nbsp;

                <loyalty-modal-button></loyalty-modal-button>
            </div-->
        </div>

        <div class="fs-12 qiong-menu-sub" v-else>
            <div>
                {{ $t('CONTENT.self') }}{{ $t('USER.member_pv') }}：0
            </div>
            <div class="">
                {{ $t('BONUS.NORMAL.team_sell_pv') }}：0
            </div>
            <div class="">
                {{ $t('BONUS.NORMAL.active_qualified') }}：0
            </div>
            <!--div class="">
                忠誠度積分：0&nbsp;
            </div-->
        </div>

        <me-son-can-num ref="scnREF" v-if="$store.state.user_enroller"></me-son-can-num>
        <bonus-enroller-line-me ref="belmREF"></bonus-enroller-line-me>
    </div>
</template>

<script>
import LoyaltyModalButton from '../../../pages/Loyalty/Loyalty/Widget/LoyaltyModalButton.vue'

import BonusEnrollerLineMe from '../../Data/Me/BonusEnrollerLineMe.vue'
import MeSonCanNum from '../../Data/Me/MeSonCanNum.vue'
import QiongLoading from "../../Qiong/Ui/QiongLoading.vue"

    export default {
        components: { 
            QiongLoading,
            LoyaltyModalButton,
            MeSonCanNum,
                BonusEnrollerLineMe  
        },
        props: {
            _bs: {
                type: Object
            },
            _mine: {
                type: Object
            }
        },
        methods: {
            async get_son_can_num() {
                let res = this.$store.state.chronus_now
                res = await this.$refs.belmREF.lunch_Line(
                    res.start
                )
                let num = 0
                res = res.map(e => {
                    if (e.is_active) { num += 1 }
                })
                this.son_can_num = num
            }
        },
        data() {
            return {
                son_can_num: ''
            }
        },
        mounted() {
            this.get_son_can_num()
        },
        computed: {
            loyalty() {
                if (this._mine) {
                    if (this._mine.lp_wallet) {
                        return this._mine.lp_wallet.LP_available
                    }
                }
                return 0
            },
        }
    }

    /*
            son_canNum() {
                const rank = this._bs.Rank

                let uu = this.$store.state.user_backend
                if (uu) {
                    if (uu.son_can_num) return uu.son_can_num;
                }

                let line = this._bs.active_qualified_lines

                try {
                    line = JSON.parse(line)
                    if (rank > 5) { line = line [ rank ] } else { line = line [ 5 ] }
                } catch(e) {
                    line = { }
                }

                return line.count
            },
    */
</script>

<style lang="sass" scoped>

</style>