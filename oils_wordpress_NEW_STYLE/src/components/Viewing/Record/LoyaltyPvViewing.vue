<template>
    <div>
        <v-icon v-if="is_add" class="icon-lp-plus">
            mdi-plus
        </v-icon>
        <v-icon v-else class="icon-lp-minus">
            mdi-minus
        </v-icon>
        {{ lp }}&nbsp;&nbsp;<span class="txt-s us">LP</span>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            lp: Number,
            is_add: Boolean
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>