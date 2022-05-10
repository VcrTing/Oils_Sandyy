<template>
        
        <nav v-if="!loading">
                
            <div class="qiong-txt-td mb-1 qiong-pt-7 unm-title fw-b">
                    {{ $t('HEADER.now_member_level') }}
            </div>

            <qiong-space :space="'0.6vh'"></qiong-space>

            <div class="pt-2 pb-2 user-vip-card bg-simple">
                    <div class="qiong-wide-25 flex-center pr-0 qiong-pt-5 mini-wide-40">
                        <level-image-viewing :bigger="2" 
                            :item="me.vip.name + '_' + me.vip.star"
                            :extra_class="'vip_showing'"
                            class="w-full"
                        ></level-image-viewing>
                    </div>

                    <div class="mini-wide-60 mini-user-msg-vip">
                        <div class=" mini-view ">
                            <div class="qiong-txt-18 fw-b">
                                {{ me.username }}
                            </div>
                            <div class="sub-header">
                                Lv.&nbsp;{{ me.bonu_period.Rank }}
                            </div>
                        </div>
                    </div>
                    <div class="qiong-wide-75 pr-0 mini-wide-100 mini-user-msg-task">

                        <table class="w-full qiong-line-hight-15 mobie-lh">
                            <tr v-for="(v, i) in res" :key="i">
                                <td>{{ v.txt }}</td>
                                <td class="text-right">{{ v.content }}</td>
                            </tr>
                        </table>
                    </div>
            </div>

            <div class="qiong-txt-td mb-1 mt-3 qiong-pt-15 txt-sub_son">
                <div v-if="next_vip">
                    <span class="op-80">{{ $t('HEADER.next_level_task_before') }}</span>
                        &nbsp;
                        <div class="d-inline txt-cold">{{ next_vip.nick }}</div>
            
                    &nbsp;
                    <span class="op-80">{{ $t('HEADER.next_level_task_after') }}</span>
                </div>
                <div v-else>
                    <span class="op-80">{{ $t('CONTENT.top_membership_level') }}</span>
                    &nbsp;
                    <div class="d-inline txt-cold" v-if="next_vip">{{ next_vip.nick }}</div>
                </div>
            </div>        
            <qiong-space :space="'1.2vh'"></qiong-space>

            <div v-for="(v, i) in result_next" :key="i" >
                <div class="bg-simple qiong-mb-10 circle-XL mobie-mb-16">

                    <div class="unm-task-card" :class="'ani-up_' + i">
                        <div class="qiong-wide-48 qiong-pl-20 pr-0">
                            {{ v.txt }}
                        </div>
                        <div class="qiong-wide-27 text-right pr-3">
                            {{ v.content }}/{{ view.if_def(v.target, '0') }}
                        </div>
                        <div class="qiong-wide-25 pr-0 unm-finished-td">
                                <finised-btn-viewing :rec="Number.parseInt(v.content)" :target="Number.parseInt(v.target)" 
                                class="flex-center"></finised-btn-viewing>
                        </div>
                    </div>
                </div>
            </div>
                <div class="bg-simple qiong-mb-10 circle-XL mobie-mb-16" v-if="res_next">

                    <div class="unm-task-card ani-up_2">
                        <div class="qiong-wide-48 qiong-pl-20 pr-0">
                            {{ res_next.txt }}
                        </div>
                        <div class="qiong-wide-27 text-right pr-3">
                            {{ res_next.content }}/{{ view.if_def(res_next.target, '0') }}
                        </div>
                        <div class="qiong-wide-25 pr-0 unm-finished-td">
                                <finised-btn-viewing :rec="Number.parseInt(res_next.content)" :target="Number.parseInt(res_next.target)" 
                                class="flex-center"></finised-btn-viewing>
                        </div>
                    </div>
                </div>

        </nav>
        <qiong-loading v-else></qiong-loading>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import FinisedBtnViewing from '../../../../components/Viewing/FinisedBtnViewing.vue'
import LevelImageViewing from '../../../../components/Viewing/LevelImageViewing.vue'

import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'

    export default {
        components: { LevelImageViewing,
            FinisedBtnViewing,
            QiongLoading,
                LevelViewing,
                QiongSpace
        },
        props: {
            me: {
                type: Object
            }
        },
        name: '',
        data() {
            return {

                named: 'SIMPLER',
                star: 0,

                next_vip: null,
                finished: false,

                loading: true,

                next_vip_condition: null,
                vip_items: [ ],

                res: [ ]
            }
        },
        computed: {

            result_next() {  
                if (this.res.length > 0) {
                    return this.res.slice(0, 2) }
            },

            roller() {
                let res = this.$store.state.user_enroller
                return res ? res : [ ]
            },
            
            res_next() {
                if (this.roller) {
                    const next_scn = app_init.vip_num.next_opv_can_num(
                        this.roller, this.next_vip.condition[3], this.$store.state.bonus_qualify_line
                    )
                    return {
                        txt: this.$t('BONUS.LONG.active_qualified'),
                        content: next_scn,
                        target: this.next_vip.condition[2], unit: ''
                    }
                }
                return null
            }
        },
        mounted() {
            this.next_vip = app_init.vip_view.vip_next(this.me.vip.name + '_' + this.me.vip.star)
            this.finished = app_init.vip_view.finished_vip(this.me.vip.name, this.me.vip.star)

            this.res = [
                        {
                            txt: this.$t('BONUS.LONG.member_sell_pv'),
                            content: this.me.bonu_period.individual_pv,
                            target: this.next_vip.condition[0], unit: 'PV'
                        },
                        {
                            txt: this.$t('BONUS.LONG.team_sell_pv'),
                            content: this.me.bonu_period.organization_pv,
                            target: this.next_vip.condition[1], unit: 'PV'
                        },
                        {
                            txt: this.$t('BONUS.NORMAL.active_qualified'),
                            content: this.$store.state.user_backend.son_can_num,
                            target: this.next_vip.condition[2], unit: ''
                        }
                    ]

            this.loading = false
        },

    }
</script>

<style lang="sass" scoped>
.unm-title
    user-select: none
    transition: all .2s
    line-height: 2
    color: #212122 !important

.txt-sub
    // color: #000000CE !important

.unm-task-card
    display: flex
    align-items: center
    justify-content: space-between

    padding: 6px 0

.bg-simple
    background: #f0f0f0
</style>