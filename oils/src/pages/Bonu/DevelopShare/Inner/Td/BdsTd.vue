
<template>
    
    <div class="qiong-td"
    >
        <div class="qiong-wide-14">
            <span :class="{ 'txt-gold': _item.bonu_period.Rank > conf.RANK_LEAD }">
                {{ _item.member_code }}
            </span>
        </div>
        <div class="qiong-wide-18 tb-innner-vip">
            <!-- level-image-viewing :item="_item.vip.code"
            ></level-image-viewing -->
            <level-viewing :item="_item.vip.code" class="d-inline"
                :class="{ 'txt-gold': _item.bonu_period.Rank > conf.RANK_LEAD, 'txt-simple_': _item.bonu_period.Rank <= 0 }"
            ></level-viewing>

            <!-- leader-tag-viewing :rank="_item.bonu_period.Rank"></leader-tag-viewing -->
        </div>
        
        <div class="qiong-wide-15">
            <span v-if="_item.hightest_pt" class="btn-highest">
                {{ _item.hightest_pt }}&nbsp;PT
            </span>
            <span v-if="_is_me">- -</span>
        </div>

        <div class="qiong-wide-15">
            <span v-if="_item.hightest_pt" class="btn-highest">
                <span v-if="_item.pt">{{ _item.pt }}&nbsp;PT</span>
                <span v-else>0</span>
            </span>
            <span v-if="_is_me">- -</span>
        </div>

        <div class="qiong-wide-18" :class="{ 'txt-hightest': _item.hightest_pt > 0 }" >
            <span v-if="_is_me">- -</span>

            <span v-else>
                <span class="btn-highest" v-if="_item.hightest_pt > 0">
                    <v-icon size="20">mdi-check</v-icon>
                </span>
                <span v-else class="btn-highest-no">
                    <v-icon size="20">mdi-window-close</v-icon>
                </span>
            </span>
        </div>

        <div class="qiong-wide-19">
            <span v-if="_item.bonu_period.DPV > 0">
                $&nbsp;{{ _item.bonu_period.DPV }}
            </span>
            <span v-else>
                {{ _item.bonu_period.DPV }}
            </span>
        </div>
    </div>
</template>

<script>
import LevelImageViewing from '../../../../../components/Viewing/LevelImageViewing.vue'
import LevelViewing from '../../../../../components/Viewing/LevelViewing.vue'
import LeaderTagViewing from '../../../../../components/Viewing/User/LeaderTagViewing.vue'
    export default {
  components: { LevelViewing, LevelImageViewing, LeaderTagViewing },
        name: '',
        props: {
            _is_me: {
                type: Boolean,
                default: false
            },
            _item: {
                type: Object
            }
        },
        data() {
            return {
                
            }
        },
        mounted() {
            // console.log(' item =', this._item)
            // console.log('RANK =', this._item.bonu_period.Rank)
        },
    }
</script>

<style lang="sass" scoped>
.tb-innner-vip
    // display: flex
    // justify-content: center
    // align-self: center
    .vip-img-S
        height: 24px
        max-height: 24px

.vip-hide
    visibility: hidden !important
</style>