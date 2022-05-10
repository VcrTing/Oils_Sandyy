<template>
    <div>
            <v-expansion-panels 
                flat
                accordion
                class="qiong-td qiong-br-0 w-full qiong-ex-panels py-0"

                v-for="(v, i) in items" :key="i"
                :class="{ 'qiong-td-hui': i % 2 == 0, 'qiong-td-light': i % 2 != 0 }"
            >
                <v-expansion-panel class="qiong-br-0">
                    <v-expansion-panel-header class="qiong-txt-td qiong-td-exp">
                        
                        <irb-expan-header class="px-7" :item="v"></irb-expan-header>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="qiong-txt-td">
                        
                        <irb-expan-content class="px-7" :item="v"></irb-expan-content>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
    </div>
</template>

<script>
import IrbExpanContent from './Inner/IrbExpanContent.vue'
import IrbExpanHeader from './Inner/IrbExpanHeader.vue'
    export default {
  components: { IrbExpanHeader, IrbExpanContent },
        name: '',
        props: {
            inventorys: Array,
            
            items: Array
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>