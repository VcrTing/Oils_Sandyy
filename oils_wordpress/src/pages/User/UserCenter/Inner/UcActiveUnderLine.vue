<template>
    <div class="">
        
        <div class="qiong-tr qiong-txt-tr user-line-header extra-tr">
            <div class="qiong-wide-45">
                <div class="pl-7">
                    {{ $t( 'USER.member_display_name' ) }}
                </div>
            </div>
            <div class="qiong-wide-16">
                    {{ $t( 'USER.member_code') }}
            </div>
            <div class="qiong-wide-13">
                    {{ $t('CONTENT.self') }}{{ $t( 'USER.member_pv' ) }}
            </div>
            <div class="qiong-wide-23">
                    {{ $t('BONUS.NORMAL.team_sell_pv') }}
            </div>
            <div class="qiong-wide-3"></div>
        </div>
        <qiong-space :space="'0.4vh'"></qiong-space>

        <div v-if="childrens && childrens.length > 0">

                <div class="qiong-td qiong-txt-td  fx-l mb-1"
                    :class="{ 'live_panel_wrapper': v.is_active }"
                    v-for="(v, i) in $store.state.bonus_qualify_line" :key="i"
                >
                    <div class="qiong-wide-45 pl-7 txt-over-hide txt-break"
                        :class="{ 'txt-fo cus': v.is_active }">{{ v.display_name }}&nbsp;</div>
                    <div class="qiong-wide-16">{{ v.member_code }}</div>
                    <div class="qiong-wide-13 pr-0">{{ v.individual_pv }}</div>
                    <div class="qiong-wide-11 pr-0">
                        {{ v.organization_pv }}
                    </div>
                    <div class="qiong-wide-15 flex-right float-right ">
                        <uaul-live-detail-panel :item="v" :_is_active="v.is_active"></uaul-live-detail-panel>
                    </div>
                </div>
        </div>
        <div v-else>
            <qiong-empty :bigger="0" v-if="childrens && childrens.length <= 0"></qiong-empty>
            <qiong-loading v-else></qiong-loading>
        </div>


        <qiong-space :space="'3vh'"></qiong-space>
        <location-me ref="localMe"></location-me>
        <bonus-enroller-line-me ref="belmREF"></bonus-enroller-line-me>
        <me-son-can-num ref="mscnREF"></me-son-can-num>
    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import QiongIconInset from '../../../../components/Qiong/Button/QiongIconInset.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import FinisedBtnViewing from '../../../../components/Viewing/FinisedBtnViewing.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import ActiveStatusViewing from '../../../../components/Viewing/User/ActiveStatusViewing.vue'
import LocationMe from '../../../../components/Data/Me/LocationMe.vue'
import BonusEnrollerLineMe from '../../../../components/Data/Me/BonusEnrollerLineMe.vue'
import MeSonCanNum from '../../../../components/Data/Me/MeSonCanNum.vue'
import UaulLiveDetailPanel from '../Tool/UaulLiveDetailPanel.vue'
    export default {
        components: {
            LevelViewing,
                QiongIconInset,
                QiongSpace,
                QiongLoading,
                QiongEmpty,
                ActiveStatusViewing,
                FinisedBtnViewing,
                LocationMe,
                BonusEnrollerLineMe,
                MeSonCanNum,
                UaulLiveDetailPanel
        },
        name: '',
        props: [ '_me' ],
        data() {
            return {
                mine: null,

                pv_limit: 0,
                loading: true,
            }
        },
        async mounted() {
            this.pv_limit = app_init.conf.USER_PV_LIMIT
            /*
            this.mine = this.$store.state.user_backend
            this.switchChildren()
            */
        },
        computed: {

            childrens() {
                let res = null 
                let line = this.$store.state.bonus_qualify_line
                if (line) {
                    line = line ? line : [ ]
                    return line 
                }
                return res
            }
        },
        methods: {

            async switchChildren () {
                /*
                this.loading = true
                // let res = await this.$refs.belmREF.lunch_Line()
                // this.$store.commit('saveBonusQualifyLine', res)
                
                let ub = this.$store.state.user_backend
                this.childrens = this.$store.state.bonus_qualify_line

                let son_num = this.$refs.mscnREF.numing_backend()

                ub.son_can_num = son_num
                this.$store.commit('saveBackendUser', ub)
                */
            }
        },
    }
</script>

<style lang="sass" scoped>
.txt-break
    // color: #0d0e14

.user-line-header
    // opacity: 0.89
</style>