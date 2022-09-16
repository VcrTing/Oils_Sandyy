<template>
    <div class="home-bg">
        <slot name="menu"></slot>
        <v-main class="content mobie-main">
            <slot name="content"></slot>
        </v-main>
    </div>
</template>

<script>
    export default {
        components: {
            
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