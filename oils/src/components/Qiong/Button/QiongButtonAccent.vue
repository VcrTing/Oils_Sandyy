<template>
    <div class="">
        <v-btn @click="done"
            rounded block
            
            elevation="0"
            :outlined="outline"
            :color="color"
            class="qiong-btn_green_deep "

            :class="extra_class"
        >
            <slot></slot>
        </v-btn>

    </div>
</template>

<script>
    export default {
        props: {
            outline: {
                type: Boolean,
                default: false
            },
            extra_class: {
                type: String,
                default: 'qiong-txt-14'
            },
            color: {
                type: String,
                default: 'accent'
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            done() {
                this.$emit('done_Father')
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>