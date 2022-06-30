<template>

    <div>
        <v-btn
            class="mx-2 z-L"
            fab

            :color="color"
            :class="extra_calss"

            :fixed="is_fixed"

            :left="l_or_r"
            :right="!l_or_r"
            :x-small="is_small"

            :elevation="eva"

            @click="done"
        >
            <v-icon>
                {{ icon }}
            </v-icon>
        </v-btn>
    </div>

</template>

<script>
    export default {
        props: {
            eva: {
                type: Number,
                default: 1
            },
            icon: {
                type: String,
                default: 'mdi-chevron-left'
            },
            color: {
                type: String,
                default: ''
            },
            extra_calss: {
                type: String,
                default: ''
            },
            is_fixed: {
                type: Boolean,
                default: false
            },
            l_or_r: {
                type: Boolean,
                default: true
            },
            is_small: {
                type: Boolean,
                default: true
            }
        },
        name: '',
        data() {
            return {
                
            }
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