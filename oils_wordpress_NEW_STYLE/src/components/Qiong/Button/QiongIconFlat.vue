<template>

    <div>
        <v-btn
            class="mx-2"
            fab
            icon
            small
            :color="color"
        >
            <v-icon>
                {{ icon }}
            </v-icon>
        </v-btn>
    </div>

</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: 'mdi-chevron-right'
            },
            color: {
                type: String,
                default: ''
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