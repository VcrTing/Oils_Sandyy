<template>
    <button class="app-bar-trigger" @click="open">
        <!--v-icon>
            mdi-chevron-right
        </v-icon-->
        <img src="/static/WEB_ICONS/menu_trigger.png" />
    </button>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            open() {
                this.$emit('btn_Father')
            }
        },
    }
</script>

<style lang="sass" scoped>
.app-bar-trigger
    position: fixed
    z-index: 10 !important
    left: 0
    top: 68%
    transform: translate(0%, -50%) 
    transition: all .3s

    color: white
    // padding: 20px 6px
    transition: all .4s
    border-top-right-radius: 4px
    border-bottom-right-radius: 4px
    // border: 1px solid rgba(0, 0, 0, 0.1)
    border-left-width: 0px
    // background-color: rgba(0, 0, 0 ,0.2)

    opacity: 0.2

    &:hover 
        opacity: 0.34
        // background-color: rgba(0, 0, 0 ,0.5)

.app-bar-trigger * 
    color: currentColor !important

</style>