<template>
    <div class="d-inline">
        <div v-if="bigger == -1" class="vip-img-S" :class="extra_class">
            <img :src="result" v-if="result">
            <div v-else class="simpler-avatar sa-S">
                Lv.0
            </div>
        </div>
        <div v-if="bigger == 2" class="vip-img-XXL" :class="extra_class">
            <img :src="result" v-if="result">
            <div v-else class="simpler-avatar sa-XXL">
                Lv.0
            </div>
        </div>
    </div>
</template>

<script>

import app_init from '@/common/es/app_init/index'

    export default {
        props: {
            item: {
                type: String
            },
            def: {
                type: String,
                default: 'ICONS/vip_simpler_1.png'
            },
            bigger: {
                type: Number,
                default: -1
            },

            extra_class: {
                type: String
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        computed: {
            result() {
                let addr = '/static/'
                
                if (this.item) { 
                    let res = app_init.vip_view.vip_now(this.item)

                    if (res) { 
                        addr += res.img 
                        return addr
                    }
                }

                return null
            },
        },
    }
</script>

<style lang="sass" scoped>
</style>