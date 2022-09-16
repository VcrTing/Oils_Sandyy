<template>
    <div class="w-full">
        <div :style="{ 'height': space }">

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            space: {
                type: String,
                default: '1vw'
            }
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>