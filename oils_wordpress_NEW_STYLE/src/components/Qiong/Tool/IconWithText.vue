<template>
    <div class="d-ib">
        <v-icon :class="extra_class">{{ icon }}</v-icon><slot></slot>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [ 'extra_class', 'icon' ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>