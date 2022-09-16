<template>
        <div class="qiong-td qiong-txt-td py-2 lh-def fx-l">
            <div class="qiong-wide-8 fw-b">
                {{ v.start_member_code }}
            </div>
            <div class="qiong-wide-17">
                {{ v.start_display_name }}
            </div>
            <div class="qiong-wide-8">
                {{ v.lp }}&nbsp;LP
            </div>
            <div class="qiong-wide-8">
                {{ v.end_member_code }}
            </div>
            <div class="qiong-wide-17">
                {{ v.end_display_name }}
            </div>
            <div class="qiong-wide-15 pr-0">
                {{ view.ser_timed( v.date_transfer, false, false ) }}
            </div>
            <div class="qiong-wide-13 t-c pr-0">
                <slot></slot>
            </div>
            <div class="qiong-wide-14 pl-2">
                {{ v.mark }}
            </div>
        </div>
</template>

<script>
import NetTransferAudit from '../../../../extra/net/NetFund/transfer/NetTransferAudit.vue'
import ExtraTransStatusOpera from '../../../../extra/view/transfer/ExtraTransStatusOpera.vue'
    export default {
  components: { ExtraTransStatusOpera, NetTransferAudit },
        props: [ 'v' ],
        data() {
            return {
                items: [
                    {
                        start_member_code: '203001', start_display_name: 'Ecmarketing', lp: 23, 
                        end_member_code: '203002', end_display_name: 'Eric', id: 1,
                        date_transfer: '2021-12-12 12:23', status: 0, mark: '朋友贈送'
                    },
                    {
                        start_member_code: '203001', start_display_name: 'Ecmarketing', lp: 23, 
                        end_member_code: '203002', end_display_name: 'Eric', id: 2,
                        date_transfer: '2021-12-12 12:23', status: 0, mark: '朋友贈送'
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="sass" scoped>
    
</style>