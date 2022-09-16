<template>
    <v-container fluid class="qiong-txt-td">

        <lo-logo-top></lo-logo-top>
        
        <qiong-header-filter class="">
            <span v-if="panel == 0" slot="header">LP積分操作記錄</span>
            <span v-else slot="header">會員等級操作記錄</span>

            <lo-logo-filter slot="filter" @change_Father="(v) => panel = v"></lo-logo-filter>
        </qiong-header-filter>

        
        <qiong-panel-element class="anime-later">
            <div v-if="!loading">

                <div v-if="panel == 0" class="px-7">
                    <lo-logo-tr-lp></lo-logo-tr-lp>
                    <lo-logo-body-lp></lo-logo-body-lp>
                </div>
                <div v-else class="px-7">
                    <lo-logo-tr-level></lo-logo-tr-level>
                    <lo-logo-body-level></lo-logo-body-level>
                </div>
            </div>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>
    </v-container>
</template>

<script>
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import LoLogoBodyLevel from './Body/LoLogoBodyLevel.vue'
import LoLogoBodyLp from './Body/LoLogoBodyLp.vue'
import LoLogoFilter from './Top/LoLogoFilter.vue'
import LoLogoTop from './Top/LoLogoTop.vue'
import LoLogoTrLevel from './Top/LoLogoTrLevel.vue'
import LoLogoTrLp from './Top/LoLogoTrLp.vue'
    export default {
  components: { QiongHeaderFilter, LoLogoTop, LoLogoFilter, QiongPanelElement, QiongLoading, LoLogoBodyLp, LoLogoBodyLevel, LoLogoTrLp, LoLogoTrLevel },
        name: '',
        data() {
            return {
                panel: 0,
                loading: false
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>