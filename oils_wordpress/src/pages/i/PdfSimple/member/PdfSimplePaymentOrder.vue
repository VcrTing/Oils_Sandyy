<template>
    <pdf-content-layout>

        <span slot="header">
            Bonus Eligibility:&nbsp;
            <span v-if="active">Active</span>
            <span v-else>UnActive</span>
        </span>


        <div slot="body" style="overflow: hidden;">
            <div style="width: 86%; float: left;">

                <div style="overflow: hidden;">
                    <div style="width: 31%; float: left;">Order Date</div>
                    <div style="width: 17%; float: left;">Member ID</div>
                    <div style="width: 22%; float: left;">Role</div>
                    <div style="width: 18%; float: left;">Order No.</div>
                    <div style="width: 12%; float: left;">Order Pv</div>
                </div>
            </div>
            <div style="width: 14%; float: left;">&nbsp;</div>
            
            <qiong-space :space="'0.1rem'"></qiong-space>

            <div v-if="ordering.length > 0">
                <div style="width: 86%; float: left;">
                    <div style="overflow: hidden;" v-for="(v, i) in ordering" :key="i">
                        <div style="width: 31%; float: left;">
                            {{ view.ser_timed_en(v.ordered_date) }}
                        </div>
                        <div style="width: 17%; float: left;">
                            {{ mine.member_code }}
                        </div>
                        <div style="width: 22%; float: left;">
                            {{ view.backend.view_role(v.role) }}
                        </div>
                        <div style="width: 18%; float: left;">
                            {{ v.uuid }}
                        </div>
                        <div style="width: 12%; float: left;">
                            {{ v.total_pv }}
                        </div>
                    </div>
                </div>
                <div style="width: 14%; float: left;">&nbsp;</div>
            </div>
            <div v-else style="padding: 12px 0px; text-align: left">Empty</div>
        </div>
        
    </pdf-content-layout>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import PdfContentLayout from '../common/PdfContentLayout.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
    export default {
        components: { PdfContentLayout, QiongSpace },
        props: {
            mine: {
                type: Object
            },
            _item: { type: Object }
        },
        data() {
            return {
                ordering: [ ]
            }
        },
        mounted() { this.fetchOrder() },
        computed: {
            active() { if (this._item && this._item.bonus_eligibility) { return this._item.bonus_eligibility.is_active } }
        },
        methods: {
            fetchOrder() {
                if (this._item && this._item.bonus_eligibility) {
                    
                    const orders = this._item.bonus_eligibility.order // this.mine.orders_period
                    this.ordering = orders.filter(e => (e.total_pv > 0 && e.status == 'completed'))
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>