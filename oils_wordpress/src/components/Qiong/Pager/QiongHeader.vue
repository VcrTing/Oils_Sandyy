<template>

    <v-row class="pager-header">
        <v-col class="pl-7" :class="extra_calss">
            <slot></slot>
        </v-col>
    </v-row>
    
</template>

<script>
    export default {
        name: '',
        props: {
            extra_calss: {
                type: String
            },
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.tiny_space
    min-height: 0.5vh
    display: block
    width: 100%
</style>