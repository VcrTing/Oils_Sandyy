<template>
    <div>
        <div class="qiong-td fw-b pt-0 qiong-line-hight-15 mb-1">
            <div class="qiong-wide-42">
                {{ $t('USER.member_code') }}
            </div>
            <div class="qiong-wide-58">
                {{ this.me.member_code }}
            </div>
        </div>
        <mmhw-msg-func :body="content" class="mmhw-money"></mmhw-msg-func>
    </div>
</template>

<script>
import MmhwMsgFunc from '../Func/MmhwMsgFunc.vue'
    export default {
  components: { MmhwMsgFunc },
        props: {
            me: {
                type: Object
            }
        },
        name: '',
        data() {
            return {
                res: 0,
                content: [ ],
                s_can_num: 0,
            }
        },
        mounted() {
            this.content = [
                {
                    txt: this.$t('USER.member_username'),
                    content: this.me.username,
                    class_v: 'txt-txt_x2'
                },

                {
                    txt: this.$t('CONTENT.now_time_period') + this.$t('CONTENT.bonus'),
                    content: '$ ' + this.usd,
                    class_v: 'txt-sec'
                },

                {
                    txt: this.$t('USER.enroller_id'),
                    content: this.me.enroller_id
                },

                {
                    txt: this.$t('USER.sponsor_id'),
                    content: this.me.sponsor_id
                },
            ]

        },
        methods: {
            
        },
        computed: {
            usd() {
                let res = this.me.bonu_period ? this.me.bonu_period.usd_result : '0'
                res = isNaN(res) ? '0' : res
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>