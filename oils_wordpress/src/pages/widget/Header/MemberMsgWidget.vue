<template>
    <div class="">

        <qiong-header :extra_calss="'pl-7'">
            {{ $t('HEADER.user_msg') }}
        </qiong-header>
        <qiong-panel-element :need_space="false" :extra_class="'mh-0'">

            <div class="text-right px-7 qiong-pt-10">
                <time-msg-viewing></time-msg-viewing>
            </div>
            
            <member-msg-header-widget
                v-if="has"
                class="px-7" :_chronu_id="_chronu" :_member_code="_code"></member-msg-header-widget>
            <qiong-loading v-else></qiong-loading>


            <qiong-space :space="'1.2vh'"></qiong-space>
            <qiong-space :space="'0.8vw'"></qiong-space>

            
        </qiong-panel-element>
    </div>
</template>

<script>
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import TimeMsgViewing from '../../../components/Viewing/Chronu/TimeMsgViewing.vue'
import MemberMsgHeaderWidget from './MemberMsgHeaderWidget.vue'
    export default {
        components: { QiongHeader, QiongPanelElement, MemberMsgHeaderWidget,
                QiongSpace,
                QiongLoading,
                TimeMsgViewing
        },
        props: [ '_code', '_chronu' ],
        computed: {
            cotion() { return this.$store.state.user_collection },
            has() {
                if (this.cotion && this.cotion.length > 0) {
                    return true
                }
            }
        }
    }
</script>