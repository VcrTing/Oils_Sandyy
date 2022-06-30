<template>
    <v-row class="qiong-pt-10 mt-4">
        <v-col v-if="!_buyed" class="pa-0">
            <v-alert
                border="left"
                type="warning"
            >
                本季度您沒有任何的消費！！！這將導致您的某些分紅金額等於”0“，並且在將來或不能免費領取某項優惠。
            </v-alert>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: {
            me: {
                type: Object,
            },
            childs: {
                type: Array
            },
            _buyed: {
                type: Boolean
            },
            _bonused: {
                type: Boolean
            }
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