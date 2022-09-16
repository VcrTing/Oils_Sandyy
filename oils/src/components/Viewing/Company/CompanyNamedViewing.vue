<template>
    <span v-if="named">
        <span v-if="named.startsWith('尖')" :class="{ 'btn-jsz': !clear }">
            尖沙咀
        </span>
        <span v-else-if="named.startsWith('火')" :class="{ 'btn-ht': !clear }">
            火炭
        </span>
    </span>
</template>

<script>
    export default {
        name: '',
        props: [ 'named', 'clear' ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>