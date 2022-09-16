<template>
    <div v-if="records && records.length > 0">

            <v-expansion-panels 
                flat
                accordion
                class="qiong-td qiong-br-0 w-full qiong-ex-panels py-0"

                v-for="(it, i) in records" :key="i"
                
            >
                <v-expansion-panel class="qiong-br-0">
                    <v-expansion-panel-header class="qiong-txt-td qiong-td-exp">
                        
                        <stock-r-ex-header class="px-7 pt-2" :v="it"></stock-r-ex-header>
                        
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="qiong-txt-td">
                        
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        
    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongEmpty from '@/components/Qiong/Ui/QiongEmpty.vue'
import StockRExHeader from './panner/StockRExHeader.vue'
    export default {
  components: { StockRExHeader, QiongEmpty },
        name: '',
        props: [ 'records' ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>