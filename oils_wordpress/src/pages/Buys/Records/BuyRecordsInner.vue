<template>
    <div v-if="items && items.length > 0">
            <v-expansion-panels accordion flat class="qiong-td"
                v-for="(v, i) in items" :key="i"
                :class="{ 'buy-ex-panel': true }"
            >
                <v-expansion-panel>
                    <v-expansion-panel-header class="qiong-txt-td px-7"
                        :class="{ 'qiong-td-hui': (i % 2 != 0) }"
                    >
                        <br-td :item="v"></br-td>        
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <br-body :item="v"></br-body>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongEmpty from '../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import BrBody from './Body/BrBody.vue'
import BrTd from './Body/BrTd.vue'
    export default {
        components: {
            QiongEmpty,
            BrTd,
            BrBody,
            QiongSpace
        },
        props: [
            'items'
        ]
    }
</script>

<style lang="sass" scoped>
.qiong-td-hui
    background: #f8f8f9
    
.qiong-td-hui-satnd
    background: #f4f4f4
</style>