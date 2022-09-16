<template>
    <div>

        <menu-item-chronu></menu-item-chronu>
        <div class="menu-sub_title"
            v-if="show"
        >
            {{ $t('MENU.member_changer') }}
        </div>
        <menu-item-id-input v-if="show"></menu-item-id-input>
    </div>
</template>

<script>
import MenuItemChronu from './MenuItemChronu.vue'
import MenuItemIdInput from './MenuItemIdInput.vue'
    export default {
  components: { MenuItemChronu,
        MenuItemIdInput      
    },
        name: '',
        computed: {
            show() {
                return this.$store.state.is_admin
            }
        }
    }
</script>

<style lang="sass" scoped>
.menu-sub_title
    margin-top: 12px
    font-size: 12px
    margin-left: 24px
    color: #aaa
</style>