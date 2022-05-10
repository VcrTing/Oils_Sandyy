<template>
    <div>
        <qiong-header>
            個人積分記錄
        </qiong-header>

        <qiong-panel-element :need_space="false">
            <loyalty-my-feng-inner class="px-7" :col="12" :rerow="true"></loyalty-my-feng-inner>
            <qiong-space :space="'4vh'"></qiong-space>
        </qiong-panel-element>
    </div>
</template>

<script>
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../../components/Qiong/Pager/QiongHeader.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import LoyaltyMyFengInner from './Inner/LoyaltyMyFengInner.vue'
    export default {
  components: { QiongHeader, QiongPanelElement, LoyaltyMyFengInner, QiongSpace },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>