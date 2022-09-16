<template>

    <div class="pti-go-top hand" @click="done">
        <v-icon>
            {{ icon }}
        </v-icon>
    </div>

</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: 'mdi-chevron-left'
            },
            extra_calss: {
                type: String,
                default: ''
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            // console.log('返回')
        },
        methods: {
            done(item) {
                this.$emit('done_Father', item)
            }
        },
    }
</script>

<style lang="sass" scoped>
.z-L
    z-index: 9999
</style>