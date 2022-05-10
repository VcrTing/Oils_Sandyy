<template>
    <div class="w-full chronu def-shadow pa-3">
        <div class="chronu_name">
            <v-icon size="14">mdi-calendar-multiple</v-icon> {{ chronu.display_name }}

            <button class="btn-sec float-right" @click="choiseIt">確認選擇</button>
        </div>
        <div class="chronu_start sub-header pl-4">
            開始：{{ view.ser_timed(chronu.start, true)}}
        </div>
        <div class="chronu_end sub-header pl-4">
            結束：{{ view.ser_timed(chronu.end, true)}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            chronu: {
                type: Object
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            choiseIt() {
                this.$emit('sign_Father', this.chronu)
            }
        }
    }
</script>

<style lang="sass" scoped>
.chronu
    border-radius: 15px
    background: rgba(255, 255, 255, 0.8)

.ch 
    display: inline

.chronu_name
    width: 100%

.chronu_start
    width: 100% 

.chronu_end
    width: 100%
</style>