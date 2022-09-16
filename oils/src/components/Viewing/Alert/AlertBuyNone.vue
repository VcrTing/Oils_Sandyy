<template>
    <div cols="12" v-if="!_buyed" class="py-0 qiong-pt-10 mt-4 w-full">
        <v-alert
            border="bottom"
            :colored-border="is_simpler"
            type="warning"
            dark
            dismissible
        >本季度您沒有任何的消費！！！這將導致您的某些分紅金額等於”0“，並且在將來或不能免費領取大量優惠。
        </v-alert>
    </div>
</template>

<script>
    export default {
        props: {
            _buyed: {
                type: Boolean
            },
            _bonused: {
                type: Boolean
            },
            is_simpler: {
                type: Boolean,
                default: false
            },

        },
        name: '',
        mounted() {
            
        },
        data() {
            return {
                   
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>