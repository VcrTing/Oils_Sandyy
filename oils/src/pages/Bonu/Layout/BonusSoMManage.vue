<template>
    <div v-if="working_type == 1">
        <so-m-widget :working_type="1" :_vip="vip" :_res="some_res" v-if="!loading"></so-m-widget>
        <so-m-widget-loading v-else></so-m-widget-loading>
    </div>
    <div v-else class="px-7"> 
        <so-manage-footer  :_footer_res="some_res" :_usd="usd" v-if="!loading" :line="false">
        </so-manage-footer>
    </div>
</template>

<script>

import app_init from '@/common/es/app_init/index'
import SoMWidget from '../../Account/Statement/Share/Inner/SoMWidget.vue'
import SoManageFooter from '../../Account/Statement/Share/Footer/SoManageFooter.vue'
import SoMWidgetLoading from '../../Account/Statement/Share/Inner/SoMWidgetLoading.vue'
    export default {
  components: { SoMWidget, SoManageFooter, SoMWidgetLoading },
        props: {
            me: {
                type: Object
            },
            working_type: {
                type: Number,
                default: 1
            }
            
        },
        name: '',
        mounted() {
            this.init()
        },
        computed: {

            vip() {
                if (this.me.vip) {
                    const v = app_init.vip_view.vip_now(this.me.vip.code)
                    return v.name
                }
            }
        },
        data() {
            return {
                usd: 0,
                some_res: null,

                loading: true
            }
        },
        methods: {
            init() {
                
                const chronu = this.$store.state.chronus
                this.global_pv = chronu.period_total_pv
                this.get_total_lead_pt = chronu.period_total_management_point

                if (this.me) {
                    this.my_lead_pt = this.me.bonu_period.management_point
                }

                this.some_res = {
                    bonus_pt: this.my_lead_pt,
                    global_pv: this.global_pv,
                    get_total_lead_pt: this.get_total_lead_pt
                }
                this.usd = this.me.bonu_period.DPV

                setTimeout(e => this.loading = false, 200)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>