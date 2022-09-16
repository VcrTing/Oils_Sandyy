<template>
    <v-container fluid class="qiong-txt-td">

        <div class="py-3 pl-3">
            <qiong-space :space="'0.5vw'"></qiong-space>
            <lo-logo-change-bar></lo-logo-change-bar>
            <qiong-space :space="'0.2vw'"></qiong-space>
        </div>

        <qiong-header>更改會員等級</qiong-header>
        
        <qiong-panel-element>
            <div class="px-7 py-3">
                <!--qiong-space :space="'0.5vw'"></!--qiong-space>
                <h3-- class="qiong-txt-20">更改會員等級</h3-->
                <qiong-space :space="'0.5vw'"></qiong-space>

                <lole-form class="my-2" ref="formREF"></lole-form>
            </div>
            <div class="fx-c mt-3">
                <button class="btn_primry submit mx-3 px-6 py-1 fw-b round" 
                    @click="submit">
                    
                    <v-icon class="qiong-txt-16 mr-2">mdi-check-underline</v-icon>
                    提交結果
                </button>
                <button class="mx-3 px-3 py-1"
                    @click="reset"
                >
                    
                    <v-icon class="qiong-txt-16">mdi-refresh</v-icon>
                    重置表單
                </button>
            </div>
            <qiong-space class="mb-3" :space="'0.5vw'"></qiong-space>
        </qiong-panel-element>


        <div class="pti-go-top hand" @click="$router.push('option_logo')">
            <v-icon>mdi-chevron-left</v-icon>
        </div>
    </v-container>
</template>

<script>
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import LoLogoChangeBar from '../LoyaltyOpLogo/common/LoLogoChangeBar.vue'
import LoleForm from './Inner/LoleForm.vue'
    export default {
            components: { QiongHeaderFilter, QiongPanelElement, QiongSpace,
            TablePagerFooter, LoleForm,
                        QiongHeader,
                        LoLogoChangeBar
        },
        methods: {
            submit() {
                this.$refs.formREF.submit()
            },
            reset() {
                this.$refs.formREF.reset()
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>