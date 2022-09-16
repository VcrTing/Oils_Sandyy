<template>

    <div>
        <v-list-item
            class="pl-15"
            color="white"

            v-for="t in items"
            :key="t.title"

            @click.stop="$router.push({ path: `/home/${t.link}` })"

            :class="{ 'v-list-item--active-MANY': (`/home/${link}` == $route.path) }"
        >
            <v-list-item-avatar class="pr-0 mr-3">
                <v-icon :size="22">{{ t.icon }}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <div tag="div">
                    {{ t.title }}
                </div>
            </v-list-item-content>
        </v-list-item>
    </div>
    
</template>

<script>
    export default {
        name: '',
        props: {
            link: String,
            items: Array
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>