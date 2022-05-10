<template>
    
    <div v-if="$store.state.chronus">
        <qiong-space :space="'8px'" class="mobie-view"></qiong-space>

        <time-now class="mb-1 txt-sus"></time-now>
        <time-chronu class="op-90"></time-chronu>
    </div>
    <qiong-loading class="mt-1 mb-1" :bigger="-1" v-else></qiong-loading>

</template>

<script>
import QiongLoading from '../../Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../Qiong/Ui/QiongSpace.vue'
import TimeChronu from './TimeChronu.vue'
import TimeNow from './TimeNow.vue'
    export default {
        name: '',
        components: {
            QiongLoading,
                TimeNow,
                TimeChronu,
                QiongSpace            
        },
        props:{
            mode: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>