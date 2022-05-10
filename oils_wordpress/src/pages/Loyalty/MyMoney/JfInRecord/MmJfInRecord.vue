<template>
    <div>

        <qiong-header-filter>
            <span slot="header">
                交易記錄
            </span>
            <mmji-top-filter slot="filter"></mmji-top-filter>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <mmji-tr></mmji-tr>
            <mmji-td></mmji-td>
        </qiong-panel-element>

        <qiong-space :space="'7vw'"></qiong-space>
    </div>
</template>

<script>
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import MmjiTd from './Body/MmjiTd.vue'
import MmjiTopFilter from './Top/MmjiTopFilter.vue'
import MmjiTr from './Top/MmjiTr.vue'
    export default {
  components: { QiongHeaderFilter, MmjiTopFilter, QiongPanelElement, MmjiTr, MmjiTd, QiongSpace },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>