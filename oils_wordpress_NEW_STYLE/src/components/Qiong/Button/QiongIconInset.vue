<template>

    <div>
        <v-btn
            class="mx-2"
            fab
            icon
            x-small
            :color="color"
            :class="space"
            @click="done"
        >
            <v-icon :class="size">
                {{ icon }}
            </v-icon>
        </v-btn>
    </div>

</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: 'mdi-chevron-double-right'
            },
            color: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            },
            space: {
                type: String,
                default: 'qiong-icon-td'
            },
            arg: {
                type: Object
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            done() {
                this.$emit('done_Father', this.arg)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>