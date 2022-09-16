<template>
    <div class="qiong-tr qiong-txt-tr">
        <div class="qiong-wide-52 mobie-wide-100">

            <so-sub-column :v="_vip">
                {{ $t('USER.member_level') }}
            </so-sub-column>

            <so-sub-column :v="(res.bonus_pt ? res.bonus_pt : 0) + ' PT'" >
                {{ $t('BONUS.NORMAL.lead_share_out') }}<span v-if="working_type == 1">{{ $t('BONUS.SHORT.management_pv') }}</span>
                                                        <span v-else-if="working_type == 2">{{ $t('BONUS.SHORT.development_pv') }}</span>
            </so-sub-column>

            <slot></slot>
        </div>
        <div class="qiong-wide-48 mobie-wide-100 mobie-pt-24" v-if="__mode > 1">

            <so-sub-column :v="res.global_pv + ' PV'">
                {{ $t('BONUS.NORMAL.global_month_point') }}
            </so-sub-column>

            <so-sub-column :v="lead_share" >
                {{ $t('BONUS.NORMAL.lead_share_out') }}(<span v-if="working_type == 1">{{ $t('BONUS.SHORT.usd_management') }}</span>    
                                                        <span v-else-if="working_type == 2">{{ $t('BONUS.SHORT.usd_development') }}</span>)
            </so-sub-column>

            <so-sub-column :v="res.get_total_lead_pt + ' PT'" >
                    <span v-if="working_type == 1">
                        {{ $t('BONUS.NORMAL.get_lead_management') }}</span>    
                    <span v-else-if="working_type == 2">
                        {{ $t('BONUS.NORMAL.get_lead_development') }}</span>{{ $t('BONUS.PUBLIC.total_point') }}
                
                
            </so-sub-column>
        </div>
        <div class="qiong-wide-48" v-else>
            &nbsp;
        </div>
    </div>

</template>

<script>
import QiongLoading from '../../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../../../components/Qiong/Ui/QiongSpace.vue'
import BonusPanelLayout from '../../Layout/BonusPanelLayout.vue'
import SoSubColumn from '../../Layout/SoSubColumn.vue'
    export default {
        name: '',
        components: {
            BonusPanelLayout,
            SoSubColumn,
                QiongLoading,
                QiongSpace
        },
        props: {
            _vip: {
                type: String,
                default: ''
            },
            _res: {
                type: Object
            },

            working_type: {
                type: Number,
                default: 1
            },

            __mode: Number
        },
        data() {
            return {
                ratio: 0.015,
                res: {
                    bonus_pt: 0,
                    global_pv: 0,
                    get_total_lead_pt: 0
                }
            }
        },
        mounted() {
            this.ratio = this.conf.SHARE_RATIO

            if (this._res) this.res = this._res;
        },

        computed: {
            lead_share() {
                let pv = 0
                let usd = 0
                
                if (this.res) {
                    pv = this.res.global_pv
                    usd = this.view.floatMul(pv, this.ratio)
                    if (usd) {
                        usd = usd.toFixed(2)
                    }
                }

                return usd + ' PV (' + pv + '*' + (this.ratio * 100) + '%)'
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>