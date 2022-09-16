<template>
    <div class="course-level">
        <div class="fx-s t-c pt-3">
            <div class="d-ib cl-item"
                v-for="(v, i) in imgs" :key="i"

                :class="{ 'cl-item-active': (v.level == _now),  }"
            >
                <loyalty-ratio-one-viewing :class="'cl-item_' + i" :ratio="v.rt"></loyalty-ratio-one-viewing>
            </div>
        </div>

        <div class="t-c cl-line-wrapper anime-later">
            <div class="d-ib cl-line" :class="'cl-line_' + _now">
                <div class="cl-line-runner"></div>
            </div>
        </div>
    </div>
</template>

<script>
import LoyaltyRatioOneViewing from '../../../../../components/Viewing/Static/LoyaltyRatioOneViewing.vue'
    export default {
        components: { LoyaltyRatioOneViewing },
        name: '',
        props: [ '_now' ],
        data() {
            return {
                imgs: [
                    { rt: 10, level: 1 },
                    { rt: 15, level: 2 },
                    { rt: 20, level: 3 },
                    { rt: 25, level: 4 },
                    { rt: 30, level: 5 },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>