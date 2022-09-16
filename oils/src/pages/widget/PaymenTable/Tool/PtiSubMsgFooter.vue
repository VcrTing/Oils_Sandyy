<template>
    <div class="pti-sub-msg px-7" id="comm_item" style="margin-top: 24px;">
        <div>
            <span class="txt-mo ney-dark">{{ $t('BONUS.PUBLIC.total_usd') }}&nbsp;:&nbsp;&nbsp;</span><span class="txt-m oney">US$&nbsp;{{ total() }}</span>
        </div>
        <div class="txt-menu">
            <time-chronu class="d-inline"></time-chronu>
        </div>
    </div>
</template>

<script>
import TimeChronu from '../../../../components/Viewing/Chronu/TimeChronu.vue'
    export default {
  components: { TimeChronu },
        name: '',
        props: {
            v: {
                type: Object
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            
            total() {
                let res = 0
                res = this.view.floatAdd(
                    res, this.v.FPV
                )
                res = this.view.floatAdd(
                    res, this.v.APV
                )
                res = this.view.floatAdd(
                    res, this.v.OPV
                )
                res = this.view.floatAdd(
                    res, this.v.MPV
                )
                res = this.view.floatAdd(
                    res, this.v.DPV
                )
                return res ? res.toFixed(2) : '' 
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>