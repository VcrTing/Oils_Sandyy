<template>
    <div class="named-viewing" :class="'named_space_' + index">
        <!-- div class="qiong-named_space" v-for="i in index" :key="i"></div>
        <div class="qiong-named_icon">
            <v-icon
                v-if="need_icon"
                class="qiong-icon-primary-thin qiong-txt-shadow-T">mdi-minus-circle-outline</v-icon>
            
        </div -->
        <div class="nv_name">
            <div class="nv_num" v-if="index != 0">
                <span>{{ index }}</span>
            </div>
            {{ named }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            named: {
                type: String,
            },
            index: {
                type: Number
            },
            need_icon: {
                type: Boolean,
                default: true
            }
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.named-viewing
    position: relative
    width: 100%

.named_space_1
    padding-left: calc(4px + 1vw)
.named_space_2
    padding-left: calc(8px + 2vw)
.named_space_3
    padding-left: calc(12px + 3vw)
.named_space_4
    padding-left: calc(16px + 4vw)
.named_space_5
    padding-left: calc(20px + 5vw)
.named_space_6
    padding-left: calc(24px + 6vw)
.named_space_7
    padding-left: calc(28px + 7vw)
.named_space_8
    padding-left: calc(32px + 8vw)
.named_space_9
    padding-left: calc(36px + 9vw)
.named_space_10
    padding-left: calc(40px + 10vw)
.named_space_11
    padding-left: calc(44px + 11vw)
.named_space_12
    padding-left: calc(48px + 12vw)

.qiong-named_icon
    width: calc(4px + 0.5vw) !important
    height: calc(14px + 0.5vw) !important
    min-height: calc(14px + 0.5vw)
    position: absolute
    top: 50% 
    transform: translate(-130%, -50%)

.qiong-named_icon i
    font-size: calc(4px + 0.5vw) !important

.nv_name
    width: 100%
    padding-right: 2px
    margin: 0

    white-space: normal !important
    word-wrap: break-word !important
    word-break: normal !important

    position: relative

    display: flex
    align-items: center

.nv_num
    left: -1.5em
    width: 1.24em
    height: 1.24em
    position: absolute
    border-radius: 100% 
    line-height: 1 !important

    display: flex !important
    align-items: center !important
    justify-content: center !important
    border: 1px solid #777777

</style>