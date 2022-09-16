<template>
    <div class="pl-4 menu-split-line" @click="$router.push('/home/loyalty/loyalty')">
        <div class="fx-s menu-split-line_inner" v-if="_wallet && !$store.state.loading">
            <div>
                忠誠度積分(LP)：<span >{{ _wallet.LP_available }}</span>
            </div>
            <v-icon class="mr-3">
                mdi-chevron-right
            </v-icon>
        </div>
        <div v-else class="menu-split-line_inner">
            <qiong-loading :bigger="-1"></qiong-loading>
        </div>

        <qiong-gradient-line class="msl-qgl"></qiong-gradient-line>
    </div>
</template>

<script>
import ToolReady from '../../Init/Ready/ToolReady.vue'
import QiongGradientLine from '../../Qiong/Ui/QiongGradientLine.vue'
import QiongLoading from '../../Qiong/Ui/QiongLoading.vue'
    export default {
        components: { QiongGradientLine, ToolReady, QiongLoading },
        props: [ '_wallet' ],
        methods: {
            initMe() {

            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>