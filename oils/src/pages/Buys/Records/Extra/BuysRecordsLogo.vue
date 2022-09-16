<template>
    <div v-if="$store.state.is_admin" class="qiong-pt-15">
        <div class="buy-logo-panel my-3" v-if="data && data.length > 0">
            
                <v-expansion-panels accordion flat>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="blp-header fx-l py-3">
                                <v-icon>mdi-post-outline</v-icon>
                                <span class="qiong-txt-16 pl-1">
                                    操作記錄
                                </span>
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="mobie-table-simple">
                            <div class="qiong-tr qiong-txt-tr pb-1">
                                <div class="qiong-wide-4 mobie-hide">&nbsp;</div>
                                <div class="qiong-wide-20 pr-3">
                                    更改人員
                                </div>
                                <div class="qiong-wide-26">
                                    更改時間
                                </div>
                                <div class="qiong-wide-50">
                                    更改操作
                                </div>
                            </div>
                            
                            <div class="qiong-td qiong-txt-14 qiong-pt-5 pb-1"
                                v-for="(v, i) in data" :key="i"
                            >
                                <div class="qiong-wide-4 mobie-hide">&nbsp;</div>
                                <div class="qiong-wide-20 pr-3">
                                    {{ v.change_by }}
                                </div>
                                <div class="qiong-wide-26">
                                    {{ view.ser_timed(v.date, true, false) }}
                                </div>
                                <div class="qiong-wide-50">
                                    {{ v.option_name }}:&nbsp;{{ v.option_desc }}
                                </div>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                
        </div>

        <widget-logo-order ref="orderREF"></widget-logo-order>
    </div>
</template>

<script>
import WidgetLogoOrder from '@/components/Data/Log/WidgetLogoOrder.vue'
    export default {
  components: { WidgetLogoOrder },
        props: [ 'order' ],
        data() {
            return {
                data: [ ]
            }
        },
        async mounted() {
            try {
                let res = await this.$refs.orderREF.lunch( this.order.uuid )
                this.data = res
            } catch(err) { }
        }
    }
</script>

<style lang="sass" scoped>
</style>