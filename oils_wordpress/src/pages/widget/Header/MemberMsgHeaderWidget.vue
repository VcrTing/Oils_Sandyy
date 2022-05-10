<template>
    <div>
        <qiong-space :space="'18px'" class="mobie-show"></qiong-space>
        <div class="qiong-txt-22 py-2 pb-3 txt-pri">
            <span v-if="mine">
                {{ this.mine.display_name }} 
            </span>
        </div>
        <div class="qiong-td" v-if="mine">
            <div class="qiong-wide-26 mobie-wide-45">
                <mmhw-account-msg :me="mine"></mmhw-account-msg>
            </div>
            <div class="qiong-wide-24 mobie-wide-55">
                <mmhw-bonus-msg :me="mine"></mmhw-bonus-msg>
            </div>
            <div class="qiong-wide-50 pr-0 mobie-wide-100 mobie-my">
                <mmhw-order-msg :me="mine" :chronu="chronu_id"></mmhw-order-msg>
            </div>
        </div>

        <location-me ref="locaMe"></location-me>
        <tool-ready @sign="initMe" v-if="$store.state.user_backend"></tool-ready>
    </div>
</template>

<script>
import LocationMe from "../../../components/Data/Me/LocationMe.vue"

import ToolReady from '../../../components/Init/Ready/ToolReady.vue';
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue';
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue';
import MmhwAccountMsg from './Inner/MmhwAccountMsg.vue';
import MmhwBonusMsg from './Inner/MmhwBonusMsg.vue';
import MmhwOrderMsg from './Inner/MmhwOrderMsg.vue';

    export default {
        components: { LocationMe, QiongLoading, MmhwAccountMsg, MmhwBonusMsg, MmhwOrderMsg,
                QiongSpace,
                ToolReady  },
        props: {
            _member_code: {
                type: String,
                default: null
            },
            _chronu_id: {
                type: Number,
                default: null
            }
        },
        computed: {
            rank_status() {
                if (this.mine) {
                    let rank = this.mine.bonu_period.Rank
                    if (rank < 1) { rank = -1
                    } else if (rank < this.conf.RANK_LEAD && rank > 0) { rank = 0
                    } else if (rank >= this.conf.RANK_LEAD) { rank = 1 }
                    return rank
                }
            },
            rank_txt() {
                if (this.mine) {
                    let rank = this.mine.bonu_period.Rank
                    if (rank < 1) {
                        rank = '普通'
                    } else if (rank < this.conf.RANK_LEAD && rank > 0) {
                        rank = '會員'
                    } else if (rank >= this.conf.RANK_LEAD) {
                        rank = '領袖'
                    }
                    return rank
                }
            }
        },
        data() {
            return {
                member_code: null,
                mine: null,
                chronu_id: null
            }
        },
        methods: {
            async initMe() {
                this.valuation()
                this.mine = await this.$refs.locaMe.locationMe_Async(this.member_code, 'COLLECTION')
            },
            
            valuation() {
                this.chronu_id = this._chronu_id
                this.member_code = this._member_code
                if (!this.member_code) {
                    const rt_id = this.$route.query.member_code
                    this.member_code = rt_id ? rt_id : this.$store.state.user_backend.member_code
                    this.root = rt_id ? true : false
                }
                this.chronu_id = this.chronu_id ? this.chronu_id : this.$store.state.chronus.id
            },
        },
    }
    /*

                <!-- span class="mr-2 tag_rank"
                    :class="{
                        'tag_rank_die': rank_status == -1,
                        'tag_rank_sim': rank_status == 0,
                        'tag_rank_led': rank_status == 1
                    }"
                >
                    {{ rank_txt }}
                </span>   
                <v-icon class="mr-2">mdi-account-circle-outline</v-icon-->
    */
</script>

<style lang="sass" scoped>
.mmhw-name span
    display: flex
    align-items: center
    justify-content: start
    // color: #5f71b5 // #d77474 // #d17070 // #c77758

    i
        color: #c76464

.tag_rank
    color: rgba(255, 255, 255, 0.9) !important
    font-size: 0.5em
    padding: 0em 0.6em
    padding-top: 0.15em
    border-radius: 2px
    border: 1px solid transparent 

.tag_rank_die
    background: #608ca7
.tag_rank_sim
    background: #5e72ab
.tag_rank_led
    background: #8365c9 // #4b81a1
</style>