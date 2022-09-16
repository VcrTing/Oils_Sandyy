<template>
    <div>
        <div class="qiong-td fw-b pt-0 qiong-line-hight-15 mb-1">
            <div class="qiong-wide-60">
                {{ $t('CONTENT.now_time_period') }}{{ $t('USER.member_level') }}
            </div>
            <div class="qiong-wide-40">
                <level-viewing :item="me.vip.code" v-if="me.vip"></level-viewing>
            </div>
        </div>
        <mmhw-msg-func :body="content" :chars="6"></mmhw-msg-func>
    </div>
</template>

<script>
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import MmhwMsgFunc from '../Func/MmhwMsgFunc.vue'

    export default {
        components: { MmhwMsgFunc, LevelViewing },
        props: {
            me: {
                type: Object
            }
        },
        data() {
            return {
                pv_limit: 0,
                s_can_num: 0,
            }
        },
        mounted() {
            /*
            this.pv_limit = this.bonus.conf.USER_PV_LIMIT
            if (this.me.children) {
                this.s_can_num = 0
                this.me.children.map(e => { if (e.bonu_period.individual_pv >= this.pv_limit) { this.s_can_num += 1 } })
            }
            */
           this.s_can_num = this.$store.state.user_backend.son_can_num

        },
        computed: {
            content() {
                if (this.me.bonu_period) {
                    const has = this.me.bonu_period.individual_pv > this.pv_limit

                    return [
                        {
                            txt: this.$t('BONUS.SHORT.member_sell_pv'),
                            content: this.me.bonu_period.individual_pv
                        },

                        {
                            txt: this.$t('BONUS.SHORT.team_sell_pv'),
                            content: this.me.bonu_period.organization_pv
                        },

                        {
                            txt: this.$t('BONUS.SHORT.active_qualified'),
                            content: this.s_can_num,
                            class_v: 'txt-txt_x2'
                        },

                        {
                            txt: this.$t('BONUS.PUBLIC.get_usd') + this.$t('CONTENT.qualify'),
                            content: has ? this.$t('CONTENT.have') : this.$t('CONTENT.havent'),
                            class_v: has ? 'txt- sus' : 'txt-sus'
                        },
                    ]
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>