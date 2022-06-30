<template>
    <div v-if="tr">
        <qiong-space :space="'1.4vh'"></qiong-space>
        <qiong-space :space="'1vw'"></qiong-space>

        <div class="qiong-tr qiong-txt-tr">
            <div class="qiong-wide-25">
                {{ $t('BONUS.NORMAL.global_member_info') }}
            </div>
            <div class="qiong-wide-32">
                {{ $t('BONUS.NORMAL.get_lead_management') }}{{ $t('CONTENT.point') }}
            </div>
            <div class="qiong-wide-24">
                {{ $t('BONUS.NORMAL.this_member_num') }}
            </div>
            <div class="qiong-wide-14">
                {{ $t('BONUS.PUBLIC.total_point') }}
            </div>
        </div>
        <qiong-space :space="'0.2vw'"></qiong-space>
        <qiong-space :space="'0.5vh'"></qiong-space>

    </div>
    <div v-else>
        <div v-if="items.length > 0">

            <div class="qiong-td qiong-txt-td txt-td-result" v-for="(v, i) in items" :key="i">
                <div class="qiong-wide-25">
                    {{ v.globel_vip.nick }}
                </div>
                <div class="qiong-wide-32">
                    {{ v.get_lead_pv }}&nbsp;PT
                </div>
                <div class="qiong-wide-24">
                    {{ v.child_num }}
                </div>
                <div class="qiong-wide-14">
                    {{ v.total_lead_pv }}&nbsp;PT
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
        mounted() {
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>