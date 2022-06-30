<template>

    <v-list-item
        @click="editChronu"
    >
        <v-list-item-avatar>
            <v-icon>mdi-calendar-edit</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
            <div tag="div">
                {{ this.$t('MENU.date_changer') }}
            </div>
        </v-list-item-content>
    </v-list-item>

</template>

<script>
// mdi-application-cog-outline
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            editChronu() {
                
                this.$router.push('/home/chronus')
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>