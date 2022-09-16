<template>
    <v-col cols="12" class="qiong-pl-20 qiong-pr-20 mobie-px-7 pos-rel">
        <slot name="header"></slot>

        <qiong-space :space="'0.9vw'"></qiong-space>        
        <qiong-space :space="'0.7vh'"></qiong-space>

        <slot name="neck"></slot>

        <bonus-panel-layout class="mobie-table-simple">
            <slot name="body"></slot>
        </bonus-panel-layout>

        <qiong-space :space="'2vw'" class="mobie-hide"></qiong-space>

        <bonus-footer-layout>
            <slot name="footer"></slot>
        </bonus-footer-layout>


        <slot name="extra"></slot>
    </v-col>
</template>

<script>
import QiongTitleElement from '../../../../components/Qiong/Ele/QiongTitleElement.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import BonusFooterLayout from './BonusFooterLayout.vue'
import BonusPanelLayout from './BonusPanelLayout.vue'
    export default {
  components: { QiongTitleElement, BonusPanelLayout, BonusFooterLayout, QiongSpace },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>