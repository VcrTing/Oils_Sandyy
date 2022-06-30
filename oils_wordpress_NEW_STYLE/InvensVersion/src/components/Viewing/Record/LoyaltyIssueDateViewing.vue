<template>
    <div v-if="_issue != false">
        <slot></slot>
    </div>
    <div v-else class="cr-rego">
        未過賬
    </div>
</template>

<script>
    export default {
        props: [ '_issue' ],
    }
</script>

<style lang="sass" scoped>
    
</style>