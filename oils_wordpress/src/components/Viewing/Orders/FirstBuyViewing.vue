<template>
    <div class="ui-fb first_buy" v-if="first">
        <v-icon v-if="!first" size="16">mdi-close</v-icon>
        {{ $t('ORDER.is_new') }}
    </div>
    <div v-else></div>
</template>

<script>
    export default {
        name: '',
        props: {
            first: {
                type: Boolean
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>