<template>
    <collection-ready-inner
        v-if="$store.state.user_backend" @sign_Father="$emit('sign_Father')"
    ></collection-ready-inner>
</template>

<script>
import CollectionReadyInner from './CollectionReadyInner.vue'
    export default {
        components: { CollectionReadyInner },
        mounted() {
            console.log('Ready =', this.$store.state.user_backend)
        },
    }
</script>