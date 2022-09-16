<template>
    <div v-if="tr">
        <qiong-space :space="'1.4vh'"></qiong-space>
        <qiong-space :space="'1vw'"></qiong-space>

        <div class="qiong-tr qiong-txt-tr">
            <div class="qiong-wide-25">
                {{ $t('USER.member_code') }}
            </div>
            <div class="qiong-wide-27">
                {{ $t('USER.member_display_name') }}
            </div>
            <div class="qiong-wide-29">
                {{ $t('CONTENT.member') }}{{ $t('USER.member_level') }}
            </div>
            <div class="qiong-wide-14">
                {{ $t('BONUS.NORMAL.lead_share_out') }}{{ $t('CONTENT.point') }}
            </div>
        </div>
        <qiong-space :space="'0.2vw'"></qiong-space>
        <qiong-space :space="'0.5vh'"></qiong-space>

    </div>
    <div v-else>
        <div v-if="items.length > 0">

            <div class="qiong-td qiong-txt-td txt-td-result" v-for="(v, i) in items" :key="i">
                <div class="qiong-wide-25">
                    {{ v.member_code }}
                </div>
                <div class="qiong-wide-27">
                    {{ v.display_name }}
                </div>
                <div class="qiong-wide-29">
                    {{ v.vip.nick }}
                </div>
                <div class="qiong-wide-14">
                    {{ v.pt }}&nbsp;PT
                </div>
            </div>
        </div>
        <div class="qiong-pt-20 pb-3" v-else >
            <qiong-empty :bigger="0"></qiong-empty>
        </div>
    </div>
</template>

<script>
import QiongEmpty from '../../../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongLoading from '../../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../../../components/Qiong/Ui/QiongSpace.vue'
    export default {
  components: { QiongLoading, QiongSpace, QiongEmpty },
        name: '',
        props: {
            items: {
                type: Array
            },
            tr: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>