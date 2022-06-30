<template>
    
        <v-list-group
            :prepend-icon="'mdi-cog-sync-outline'"
            no-action
            sub-group
            color="rgba(255, 255, 255, 0.6)"

            class="lad_list_group"

            :value="true"
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title class="pl-2 fs-16">
                        {{ title }}
                    </v-list-item-title>
                </v-list-item-content>
            </template>
            
            <menu-item-id-input></menu-item-id-input>

            <menu-item-chronu></menu-item-chronu>
        </v-list-group>
</template>

<script>
import MenuItemChronu from '../menu/MenuItemChronu.vue'
import MenuItemIdInput from '../menu/MenuItemIdInput.vue'
    export default {
        components: { 
            MenuItemChronu, 
            MenuItemIdInput    
        },
        name: '',
        data() {
            return {
                title: ''
            }
        },
        mounted() {
            this.title = this.$t('MENU.web_setting')
        },
    }
</script>

<style lang="sass" scoped>
    
</style>