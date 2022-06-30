<template>
    <v-container fluid class="h-100 py-0 my-0">
        <v-row class="h-100 py-0 my-0">
            <v-col cols="4" class="pa-0 h-100">
                <qiong-logo-element></qiong-logo-element>
            </v-col>
            <v-col cols="8">
                <qiong-space :space="'18vh'"></qiong-space>
                <div class="qiong-td">
                    <div class="qiong-wide-23"></div>
                    <div class="qiong-wide-55">
                        <slot></slot>
                    </div>
                    <div class="qiong-wide-22"></div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import QiongLogoElement from '@/components/Qiong/Ele/QiongLogoElement.vue'
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'

    export default {
        components: { QiongLogoElement, QiongSpace },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>