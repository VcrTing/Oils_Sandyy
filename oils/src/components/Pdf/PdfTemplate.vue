<template>
    <v-container fluid class="pdf-font">
        <slot name="starter"></slot>

        <v-row class="pb-6 mb-6 px-6">
            <v-col cols="12" class="mt-L">
                <slot name="header"></slot>
            </v-col>
            <v-col cols="12" class="ma-0 pt-1 mt-1 fs-L">
                <slot name="content_1"></slot>
            </v-col>
            <v-col cols="12" class="ma-0 pt-1 mt-1 fs-L">
                <slot name="content_2"></slot>
            </v-col>
            <v-col cols="12" class="mt-XL">
                <slot name="footer"></slot>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>