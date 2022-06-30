<template>
    <v-container fluid class="qiong-txt-td">

        <v-row>
            <v-col class="anime-later pc-user-col-l" cols="12" :sm="12">
                <qiong-header>{{ $t('HEADER.active_qualified') }}</qiong-header>
                <qiong-panel-element :need_space="false">
                    <uc-active-under-line  v-if="$store.state.user_backend"></uc-active-under-line>
                    <qiong-loading v-else></qiong-loading>
                </qiong-panel-element>

                <qiong-space :space="'24px'" class="mobie-show"></qiong-space>
            </v-col>

            <!--v-col class="anime-later pc-user-col-r" cols="12" :sm="6">
                <qiong-header >{{ $t('HEADER.task_list') }}</qiong-header>
                <qiong-panel-element :need_space="false">
                    <nav class="px-7 qiong-pb-20">

                        <time-msg-viewing class="text-right qiong-line-hight-15 qiong-pt-10"></time-msg-viewing>
                        <qiong-space :space="'12px'" class="mobie-view"></qiong-space>
                        <uc-number-msg v-if="!loading" :me="mine_Enroller"></uc-number-msg>  
                        <qiong-loading v-else></qiong-loading>

                    </nav>
                </qiong-panel-element> 
            </v-col-->
        </v-row>
  
        <uc-buy-record ref="buyRecord" class="mobie-mt-24" @long_Father="() => long = true"></uc-buy-record>
            

        <table-pager-footer v-if="long"></table-pager-footer>

        <collection-ready @sign_Father="init = false"></collection-ready>
        <div v-if="!init">
            <me-son-can-num ref="mscnREF"></me-son-can-num>
            <bonus-enroller-line-me ref="belmREF"></bonus-enroller-line-me>
            <return-me v-if="$store.state.user_collection && $store.state.user_collection.length > 0 && !init" @recive_Father="recive"></return-me>
        </div>
    </v-container>
</template>

<script>
import ReturnMe from '../../../components/Data/Me/ReturnMe.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'

import QiongPagePanel from '../../../components/Qiong/QiongPagePanel.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import UcActiveUnderLine from './Inner/UcActiveUnderLine.vue'
import UcBuyRecord from './Inner/UcBuyRecord.vue'
import UcNumberMsg from './Inner/UcNumberMsg.vue'
import BonusEnrollerLineMe from '@/components/Data/Me/BonusEnrollerLineMe.vue'
import MeSonCanNum from '../../../components/Data/Me/MeSonCanNum.vue'

import TimeMsgViewing from '@/components/Viewing/Chronu/TimeMsgViewing.vue'

    export default {
        components: { 
                QiongPagePanel, UcActiveUnderLine,
                UcBuyRecord,
                QiongSpace,
                UcNumberMsg,
                QiongPanelElement,
                QiongHeader,
                QiongLoading,
                CollectionReady,
                TablePagerFooter,
                QiongHeaderFilter,
                ReturnMe,
                BonusEnrollerLineMe,
                MeSonCanNum,
                
                TimeMsgViewing
        },
        name: '',
            data() {
            return {
                mine_Enroller: null,
                long: false,
                init: true,
                loading: true
            }
        },
        methods: {
            async recive(v) {
                this.loading = true
                console.log('我是 =', v)
                this.mine_Enroller = v ? v : { }
                setTimeout(e => { this.loading = false }, 0)
            },
            
        },
    }
</script>

<style lang="sass" scoped>

</style>