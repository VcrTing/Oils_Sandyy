<template>
    <bonus-layout :_root="root" :_need_top="false">
        <qiong-header>{{ $t('BONUS.NORMAL.lead_share_out') }} ({{ $t('BONUS.SHORT.usd_management') }})</qiong-header>
    
        <qiong-panel-element :need_space="false" >
            <so-management v-if="mine" 
                :showing="true" :me="mine" 
                :top="false" :title="false" :_mode="0">
            </so-management>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <location-me ref="locaMe"></location-me>
        <collection-ready @sign_Father="initMe" v-if="init && $store.state.user_collection"></collection-ready>
    </bonus-layout>
</template>

<script>
import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import SoManagement from '../../Account/Statement/Share/SoManagement.vue'
import BonusLayout from '../Layout/BonusLayout.vue'
    export default {
  components: { BonusLayout, QiongHeader, QiongPanelElement, SoManagement, LocationMe, CollectionReady, QiongLoading },
        name: '',
        data() {
            return {
                root: false,
                init: true,
                loading: true,
                member_code: null,

                mine: null,
                children: null
            }
        },
        inject: [ 'reload' ],
        watch: {
            $route(to, from) {
                if (from.query) {
                    this.init = false
                    this.reload()
                    this.init = true
                }
            }
        },
        methods: {
            async initMe() {
                this.valuation()
                this.mine = await this.$refs.locaMe.locationMe_Async(this.member_code, 'ENROLLER')
                this.init = false
            },
            valuation() {
                this.mine = null
                this.root = false
                this.loading = true
                this.member_code = this.$store.state.user_backend.member_code

            },
        },
    }
</script>

<style lang="sass" scoped>
    
</style>