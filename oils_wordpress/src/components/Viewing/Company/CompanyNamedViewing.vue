<template>
    <span v-if="named">
        <span v-if="named.startsWith('尖')" class="btn-jsz">
            尖沙咀
        </span>
        <span v-else-if="named.startsWith('火')" class="btn-ht">
            火炭
        </span>
    </span>
</template>

<script>
    export default {
        name: '',
        props: [ 'named' ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>