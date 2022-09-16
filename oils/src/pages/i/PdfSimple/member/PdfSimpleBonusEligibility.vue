<template>

    <pdf-content-layout>

        <span slot="header">
            Payment Level:&nbsp;
            <level-viewing :item="mine.vip.code" style="display: inline !important;"></level-viewing>
        </span>

        <div slot="body">
                
            <div style="overflow: hidden;">
                <div style="width: 27%; float: left;">
                    Individual Credit:&nbsp;&nbsp;&nbsp;{{ mine.bonu_period.individual_pv }}
                </div>
                <div style="width: 31%; float: left;">
                    Organization Credit:&nbsp;&nbsp;&nbsp;{{ mine.bonu_period.organization_pv }}
                </div>
                <div style="width: 36%; float: left;">
                    Direct Enroll Member (active):&nbsp;&nbsp;&nbsp;{{ son_can_num }}
                    <!-- pdf-equal-content :bigger="3">
                        <span slot="k">Direct Enroll Member (active):</span>
                        <span slot="v">
                            {{ mine.bonu_period.son_can_num }}
                        </span>
                    </pdf-equal-content -->
                </div>

            </div>

        </div>
        
        <me-son-can-num slot="extra" ref="numREF"></me-son-can-num>
    </pdf-content-layout>
    
</template>

<script>
import app_init from '@/common/es/app_init/index'
import PdfEqualContent from '../common/PdfEqualContent.vue'
import PdfContentLayout from '../common/PdfContentLayout.vue'
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import MeSonCanNum from '../../../../components/Data/Me/MeSonCanNum.vue'

    export default {
        components: {
            PdfEqualContent,
            PdfContentLayout,
                LevelViewing,
                MeSonCanNum    
        },
        props: {
            mine: {
                type: Object
            }
        },
        name: '',
        data() {
            return {
                limit: 0
            }
        },
        mounted() {
            this.limit = app_init.conf.USER_PV_LIMIT
        },
        methods: {


            _num_son_num() {
                let num = 0
                let u = this.mine
                if (u.children) {
                    let c = u.children
                    c.map(e => {
                        if (e.bonu_period.individual_pv >= this.bonus.conf.USER_PV_LIMIT) {
                            num += 1
                        }
                    })
                }
                return num
            },
        },

        computed: {
            son_can_num() {
                let u = this.$store.state.user_backend

                if (u.son_can_num) {
                    return u.son_can_num
                }
                
                if (u.bonu_period) {
                    if (u.bonu_period.son_can_num) {
                        return u.bonu_period.son_can_num
                    }
                }

                return this._num_son_num()
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>