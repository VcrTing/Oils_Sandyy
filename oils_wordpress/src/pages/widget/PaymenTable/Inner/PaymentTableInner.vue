<template>
    <div class="">

        <div class="pti-table">
            <pti-tr id="pti_tr"></pti-tr>
            <div class="pti-tr-fixed" id="pti_tr_fixed" v-if="need_title">
                <pti-tr></pti-tr>
            </div>

            <div class="pti-content">
                <div v-for="(v, i) in items" :key="i" class="qiong-td text-center pti-td">
                    <div class="qiong-wide-13" style="text-align: left;">
                        <span v-if="v.user">
                            {{ v.user.member_code }}&nbsp;
                        </span>
                    </div>
                    <div class="qiong-wide-12" style="text-align: left;">
                        <level-viewing :item="v.vip_code" v-if="v.Rank > 0" style="display: inline;"></level-viewing>
                        <span v-else>{{ $t('USER.level_null') }}</span>&nbsp;
                    </div>
                    <div class="qiong-wide-12">
                        {{ view.if_def(v.FPV, '') }}&nbsp;
                    </div>
                    <div class="qiong-wide-12">
                        {{ view.if_def(v.active_branch_payout, '') }}&nbsp;
                    </div>
                    <div class="qiong-wide-12">
                        {{ view.if_def(v.OPV, '') }}&nbsp;
                    </div>
                    <div class="qiong-wide-14">
                        {{ view.if_def(v.MPV, '') }}&nbsp;
                    </div>
                    <div class="qiong-wide-13">
                        {{ view.if_def(v.DPV, '') }}&nbsp;
                    </div>
                    <div class="qiong-wide-12">
                        {{ usd(v) }}&nbsp;
                    </div>
                </div>

                <pti-extra></pti-extra>

                <pti-footer :v="result" v-if="result"></pti-footer>

            </div>
        </div>

        <pti-sub-msg-footer :v="result" v-if="result"></pti-sub-msg-footer>
        <qiong-loading :bigger="-1" v-else></qiong-loading>

        <pti-go-top @finish_Father="finishTop"></pti-go-top>
        <pti-pdf-down></pti-pdf-down>
    </div>
</template>

<script>
import app_init from '../../../../common/es/app_init'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import PtiGoTop from '../../../../components/Qiong/Tool/PtiGoTop.vue'
import PtiPdfDown from '../Tool/PtiPdfDown.vue'
import PtiSubMsgFooter from '../Tool/PtiSubMsgFooter.vue'
import PtiExtra from './PtiExtra.vue'
import PtiFooter from './PtiFooter.vue'
import PtiTr from './PtiTr.vue'
    export default {
  components: { PtiTr, LevelViewing, PtiExtra,
    PtiFooter,
    PtiGoTop,
    PtiSubMsgFooter,
    QiongLoading,
    PtiPdfDown       },
        name: '', 
        props: {
            items: {
                type: Array
            }
        },
        data() {
            return {
                result: null,


                need_title: false,


            }
        },
        mounted() {
            this.resultFooter()

        },
        methods: {
            usd(i) {
                let res = 0
                if (i) {
                    i.FPV = i.FPV ? i.FPV : 0
                    i.OPV = i.OPV ? i.OPV : 0
                    i.DPV = i.DPV ? i.DPV : 0
                    i.MPV = i.MPV ? i.MPV : 0
                    i.active_branch_payout = i.active_branch_payout ? i.active_branch_payout : 0
                    res = app_init.conf.num_result(i)
                    res = res ? Number.parseFloat(res) : 0 
                    res = res == 0 ? '' : res.toFixed(2)
                }

                return res
            },

            resultFooter() {
                if (this.items) {
                    let res = {
                        FPV: 0,
                        APV: 0,
                        OPV: 0,
                        MPV: 0,
                        DPV: 0
                    }
                    for (let i of this.items) {
                        
                        if (i.FPV) res.FPV = this.view.floatAdd(
                            res.FPV, i.FPV
                        );
                        if (i.active_branch_payout) res.APV = this.view.floatAdd(
                            res.APV, i.active_branch_payout
                        );
                        if (i.OPV) res.OPV = this.view.floatAdd(
                            res.OPV, i.OPV
                        );
                        if (i.MPV) res.MPV = this.view.floatAdd(
                            res.MPV, i.MPV
                        );
                        if (i.DPV) res.DPV = this.view.floatAdd(
                            res.DPV, i.DPV
                        );
                    }

                    this.result = res
                }
            },

            showTrFixed(v) {
                this.need_title = v
            },
            finishTop() {
                this.need_title = false
            }
        },
    }
</script>

<style lang="sass" scoped>
.pti-wrapper

</style>