<template>
    <div>

        <qiong-space :space="'2vh'"></qiong-space>

        <div class="bonus-tip">&nbsp;&nbsp;&nbsp;積分入賬記錄</div>

        <div class="qiong-pt-10" v-if="!_loading">
            <div v-if="_monthlys">
                <div v-for="(v, i) in _monthlys" :key="i" class="item-loyalty">
                    <div >
                        <div class="d-inline">
                            <div class="il_icon" v-if="true">+</div>
                        </div>
                        &nbsp;{{ v.LP_remaining }}&nbsp;LP
                    </div>
                    <div >
                        將於&nbsp;{{ view.ser_timed(v.expire_date, true) }}過期
                    </div>
                </div>
            </div>
            <div v-else class="empty">
                <qiong-empty :bigger="0"></qiong-empty>
            </div>
        </div>
        <qiong-loading v-else class="qiong-pt-20 qiong-pb-20"></qiong-loading>

    </div>
</template>

<script>
import QiongEmpty from '../../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongLoading from '../../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../../../components/Qiong/Ui/QiongSpace.vue'
    export default {
  components: { QiongSpace, QiongLoading, QiongEmpty },
        name: '',
        props: {
            _loading: Boolean,
            _monthlys: Array
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>