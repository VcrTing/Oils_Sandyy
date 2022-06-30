<template>
    <div class="level-viewing" v-if="result != null">{{ result }}</div>
    <div class="level-viewing" v-else>{{ def }}</div>
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
                default: '普通成員'
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
                if (this.item != undefined && this.item != 'undefined_0') { 
                    let res = app_init.vip_view.split_code(this.item)
                    res = app_init.vip_view.code_to_content( res )
                    if (res) { return res.nick } return this.def
                }
                return null
            },
        },
    }
</script>

<style lang="sass" scoped>
.level-viewing
    width: 100%
    min-height: 0.5vw
</style>