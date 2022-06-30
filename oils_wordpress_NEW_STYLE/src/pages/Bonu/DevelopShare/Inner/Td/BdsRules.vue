<template>
    <div>
        <div class="qiong-line-hight-20">
            {{ $t('CONTENT.lowest') }}{{ $t('USER.member_level') }}:&nbsp;<level-viewing class="d-inline" :item="low_level"></level-viewing>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{ $t('BONUS.SHORT.usd_development') }}{{ $t('CONTENT.qualify') }}:&nbsp;<span v-if="hasing_develop">{{ $t('CONTENT.have') }}</span><span v-else>{{ $t('CONTENT.havent') }}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{ $t('BONUS.NORMAL.child_branch_num') }}:&nbsp;<span>{{ branch }}</span>
        </div>
    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import LevelViewing from '../../../../../components/Viewing/LevelViewing.vue'
    export default {
  components: { LevelViewing },
        name: '',
        props: {
            me: {
                type: Object
            }
        },
        data() {
            return {
                branch: 4,
                low_level: '',
                hasing_develop: false,

                low_branch: 4
            }
        },
        mounted() {
            this.low_level = this.lowestLevel()

            this.branch = this.fetchingBranch()
        },
        methods: {
            
            lowestLevel() {
                let res = this.conf.RANK_DEVELOP
                const rank = this.me.bonu_period.Rank 
                if (rank >= this.conf.RANK_DEVELOP) {
                    this.hasing_develop = true
                    res = rank
                }
                return app_init.vip_view.rank_to_code(res)
            },

            fetchingBranch() {
                let res = 0
                const enrollers = this.$store.state.user_enroller
                for (let u of enrollers) {
                    if ((u.index - this.me.index) == 1) {
                        res += 1
                    }
                }
                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>