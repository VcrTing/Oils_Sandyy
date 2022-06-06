<template>
    <div class="px-7" v-if="_many && _many.length > 0">
        <div class="qiong-td qiong-txt-td  py-2 lh-def" 
            v-for="(v, i) in _many" :key="i">
            
            <div class="qiong-wide-10">{{ v.num }}</div>
            <div class="qiong-wide-24">{{ v.display_name }}</div>
            <div class="qiong-wide-9">{{ v.lp }}&nbsp;LP</div>
            <div class="qiong-wide-15">{{ view.ser_timed(v.date_transfer, false, false) }}</div>
            <div class="qiong-wide-16">{{ view.ser_timed(v.date_success, false, false) }}</div>
            <div class="qiong-wide-13 pr-0 t-c">
                <extra-trans-status-view :v="v.status"></extra-trans-status-view>
            </div>
            <div class="qiong-wide-13">{{ v.mark }}</div>
        </div>
        <qiong-space :space="'12px'"></qiong-space>

    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongEmpty from '../../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongSpace from '../../../../../components/Qiong/Ui/QiongSpace.vue'
import ExtraTransStatusView from '../../../../../extra/view/transfer/ExtraTransStatusView.vue'
    export default {
  components: { QiongSpace, ExtraTransStatusView, QiongEmpty },
        name: '',
        props: [ '_many' ],
        data() {
            return {
                items: [

                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>