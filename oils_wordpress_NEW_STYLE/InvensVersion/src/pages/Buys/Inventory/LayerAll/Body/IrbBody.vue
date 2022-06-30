<template>
    <div v-if="items && items.length > 0">
            <v-expansion-panels 
                flat
                accordion
                v-for="(v, i) in items" :key="i"
                class="qiong-td qiong-br-0 w-full qiong-ex-panels py-0 qiong-td-hui"
            >
                <v-expansion-panel class="qiong-br-0">
                    <v-expansion-panel-header class="qiong-txt-td qiong-td-exp">
                        <irb-expan-header class="px-7" :item="v"></irb-expan-header>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="qiong-txt-td">
                        <irb-expan-content class="px-7 qiong-td-light pb-3" :item="v"></irb-expan-content>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongEmpty from '../../../../../components/Qiong/Ui/QiongEmpty.vue'
import IrbExpanContent from './Inner/IrbExpanContent.vue'
import IrbExpanHeader from './Inner/IrbExpanHeader.vue'
    export default {
        components: { IrbExpanHeader, IrbExpanContent, QiongEmpty },
        props: {
            inventorys: Array,
            items: Array
        },
        mounted() {
        }
    }
</script>

<style lang="sass" scoped>
</style>