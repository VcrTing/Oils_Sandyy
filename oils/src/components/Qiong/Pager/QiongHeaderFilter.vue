<template>

    <v-row class="pager-header" v-if="bigger == 1">
        <v-col :cols="12" :sm="4" class="pl-7" :class="extra_calss">
            <slot name="header"></slot>
        </v-col>
        <v-col :cols="12" :sm="8" class="px-7 fx-r0" :class="extra_calss">
            <slot name="filter"></slot>
        </v-col>
    </v-row>
    <v-row class="pager-header" v-else>
        <v-col :cols="12" :sm="6" class="pl-7" :class="extra_calss">
            <slot name="header"></slot>
        </v-col>
        <v-col :cols="12" :sm="6" class="px-7 fx-r0" :class="extra_calss">
            <slot name="filter"></slot>
        </v-col>
    </v-row>
    
</template>

<script>
    export default {
  components: {  },
        name: '',
        props: {
            bigger: {
                type: Number,
                default: 1
            },
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