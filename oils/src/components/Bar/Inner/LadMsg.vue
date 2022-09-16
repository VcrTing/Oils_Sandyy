<template>
    <div class="fs-12">
        <div class="qiong-td">
            <div class="qiong-wide-50 pr-0" v-if="_bonus">
                <div>
                    {{ $t('USER.member_code') }}：{{ view.if_def(_bonus.user.member_code) }}
                </div>
                <div class="txt-capit">
                    {{ $t('USER.member_username') }}：{{ view.if_def(_bonus.user.display_name) }}
                </div>
            </div>
            <div class="qiong-wide-50 pr-0" v-else>
                <div>
                    {{ $t('USER.member_code') }}：{{ _me.member_code }}
                </div>
                <div class="txt-capit">
                    {{ $t('USER.member_username') }}：{{ _me.display_name }}
                </div>
            </div>

            <div class="qiong-wide-50 pr-0">
                <lad-bonus :_bs="_bonus" :_mine="_me"></lad-bonus>
            </div>
        </div>
    </div>
</template>

<script>
import QiongLoading from '../../Qiong/Ui/QiongLoading.vue'
import LevelViewing from '../../Viewing/LevelViewing.vue'
import LadBonus from './LadBonus.vue'
    export default {
        props: {
            _bonus: Object,
            _me: Object
        },
        components: { 
            LevelViewing, QiongLoading,
                LadBonus          
        },
    }
</script>

<style lang="sass" scoped>
</style>