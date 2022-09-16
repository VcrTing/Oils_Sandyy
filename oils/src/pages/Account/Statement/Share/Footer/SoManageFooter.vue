<template>
    <qiong-sub-result-slot :lined="line">
        <qsr-wrapper class="pt-0" v-if="__mode > 1">
            <span slot="txt">
                {{ $t('BONUS.SHORT.usd_management') }}{{ $t('CONTENT.numed') }}
            </span>
            <so-footer-division slot="content" 
                :fz="_footer_res.bonus_pt" 
                :fm="_footer_res.get_total_lead_pt"
            >
                {{ view.floatMul(conf.SHARE_RATIO, _footer_res.global_pv).toFixed(2) }}
            </so-footer-division>
        </qsr-wrapper>

        <qsr-wrapper>
            <span slot="txt">
                {{ $t('BONUS.SHORT.usd_management') }}{{ $t('BONUS.PUBLIC.total_usd') }}
            </span>
            <div slot="content">
                <div>US$&nbsp;{{ _usd ? _usd : 0 }}</div>
            </div>
        </qsr-wrapper>

    </qiong-sub-result-slot>
</template>

<script>
import QsrWrapper from '../../../../../components/Qiong/Pager/Inner/QsrWrapper.vue'
import QiongSubResultSlot from '../../../../../components/Qiong/Pager/QiongSubResultSlot.vue'
import SoFooterDivision from '../../Layout/SoFooterDivision.vue'
    export default {
        components: {

                QiongSubResultSlot,
                QsrWrapper,
                SoFooterDivision
        },
        name: '',
        props: {
            _usd: {
                type: Number
            },
            _footer_res: {
                type: Object
            },
            line: {
                type: Boolean,
                default: true
            },

            
            __mode: Number
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>