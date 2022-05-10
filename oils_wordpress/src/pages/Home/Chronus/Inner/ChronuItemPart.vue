<template>
    <div class="chronu py-3 pl-7 pr-3">
        <div class="pb">
            <span class="qiong-txt-16 txt-txt_x3 fw-b"
                :class="{ 'txt-sec_son': now.id == c_item.chronu.id }"
            >
                <v-icon size="14" color="op-60">mdi-calendar-multiple</v-icon>&nbsp;&nbsp;{{ c_item.chronu.display_name }}
            </span>

            <button v-if="now.id != c_item.chronu.id" class="fw-b py-2 px-5 float-right btn-sec-hov" @click="choiseIt">確認選擇</button>
        </div>

        <nav class="pl-6 pt-3 txt-sus">
            <div class="chronu_start">
                開始：&nbsp;{{ 
                    view.ser_timed(
                        c_item.chronu.start, 
                        true
                    )
                }}
            </div>
            <div class="chronu_end pt-1">
                結束：&nbsp;{{ view.ser_timed(c_item.chronu.end, true)}}
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            c_item: {
                type: Object
            }
        },
        computed: {
            now() { return this.$store.state.chronus }
        },
        methods: {
            choiseIt() {
                this.$emit('sign_Father', this.c_item.chronu)
            }
        }
    }
</script>

<style lang="sass" scoped>
.chronu
    border-radius: 16px
    background: rgba(255, 255, 255, 0.8)
    box-shadow: 0.2px 1.2px 2.4px -1.2px rgba(0, 0, 0, 0.24)

.ch 
    display: inline

.chronu_name
    width: 100%

.chronu_start
    width: 100% 

.chronu_end
    width: 100%

.btn-sec-thin
    border-radius: 7.5px
</style>