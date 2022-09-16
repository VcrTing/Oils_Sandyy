<template>
    <transition name="inner">
        <router-view/>
    </transition>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>