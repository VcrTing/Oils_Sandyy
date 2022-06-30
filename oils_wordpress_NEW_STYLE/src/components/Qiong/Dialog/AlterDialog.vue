<template>
    <transition :name="transition" v-if="$store.state.dialog > 0">
            <div class="dialog qiong-txt-tr">
                <div class="dialog-header qiong-txt-16">
                    {{ $t('ALTER.header') }}
                    <div class="dialog-close" @click="close">×</div>
                </div>
                <div class="dialog-body qiong-txt-18">
                    <div class="dialog-icon dialog-error">
                        <v-icon>
                            mdi-alert
                        </v-icon>
                    </div>
                    {{ $t('ALTER.dialog_' + $store.state.dialog) }}
                </div>
            </div>
    </transition>
    <div v-else></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                transition: 'slide-down'
            }
        },
        mounted() {
            
        },
        /*
        computed: {
            typed() {
                let res = this.$store.state.dialog
                if (res > 0) {
                    res = (res >= 300) ? -1 : 1
                }
                return res
            },

            content() {
                let res = this.$store.state.dialog
                if (res) {
                    res = 'ALTER.dialog_' + res
                    console.log('res =', res)
                    return this.$t(res)
                }
                return ''
            }
        },
        */
        methods: {
            close() {
                this.$store.commit('saveDialog', 0)
            }
        }
    }
</script>

<style lang="sass" scoped>

.slide-up, .slide-down
    transition: all 1s

.slide-up
    transform: translateY(20vh)
    
.slide-down
    transform: translateY(-20vh)
</style>