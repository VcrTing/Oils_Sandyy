<template>
    <div>
        <div class="btn-up_comp" v-if="up_comp">
            <v-icon size="14">mdi-check</v-icon>
            {{ $t('STATUS.yes') }}
        </div>

        <div class="btn-up_comp btn-up_comp_no" v-else>
            <v-icon size="14">mdi-window-close</v-icon>
            {{ $t('STATUS.no') }}
        </div>
    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

    export default {
        name: '',
        props: {
            ipv: {
                type: Number
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            up_comp() {
                return (this.ipv >= app_init.conf.USER_PV_LIMIT)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>