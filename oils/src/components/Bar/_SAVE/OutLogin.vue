<template>
    <div>

        <!-- 退出登錄
        <v-list-item
            @click="outLogin"
        >
            <v-list-item-avatar>
                <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <div tag="div">
                    退出登錄
                </div>
            </v-list-item-content>
        </v-list-item> -->

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {

            outLogin() {
                this.$store.commit('changeAuth', null)
                this.$store.commit('saveBackendUser', '')
                this.$router.push({ path: '/login/' })
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>