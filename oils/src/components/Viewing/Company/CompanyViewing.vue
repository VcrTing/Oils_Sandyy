<template>
    <span v-if="company == 1" class="btn-jsz">
        尖沙咀
    </span>
    <span v-else class="btn-ht">
        火炭
    </span>
</template>

<script>
    export default {
        name: '',
        props: {
            company: Number
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>