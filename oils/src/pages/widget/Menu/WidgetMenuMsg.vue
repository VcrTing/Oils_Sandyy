<template>
    <div>
        <menu-msg-widget 
            v-if="this.$store.state.user_backend"
            :id="this.$store.state.platform_data.member_code" :need_avatar="false"></menu-msg-widget>
    </div>
</template>

<script>
import MenuMsgWidget from '@/components/Bar/MenuMsgWidget.vue'
    export default {
        components: { MenuMsgWidget },
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
        },
    }
</script>

<style lang="sass" scoped>
    
</style>