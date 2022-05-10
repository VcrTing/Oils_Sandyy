<template>
    
    <div class="expan expan-normal">
        <div class="expan-header" @click="show = !show">
            查看全部回馈比例
            <v-icon v-if="show">
                mdi-chevron-up
            </v-icon>
            <v-icon v-else>
                mdi-chevron-down
            </v-icon>
        </div>
        <div class="expan-content" :class="{ 'expan-show': show }">
            <loyalty-month-ratio-viewing></loyalty-month-ratio-viewing>
        </div>
    </div>
</template>

<script>
import LoyaltyMonthRatioViewing from '@/components/Viewing/Static/LoyaltyMonthRatioViewing.vue'
    export default {
  components: { LoyaltyMonthRatioViewing },
        name: '',
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>