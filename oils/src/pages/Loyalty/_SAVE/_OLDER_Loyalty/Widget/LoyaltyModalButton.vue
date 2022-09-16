<template>
    <div class="btn-tiny_loyalty" @click="openLoyalty">
        <v-icon>mdi-arrow-right</v-icon>
    </div>
</template>

<script>
    export default {
    components: { },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            openLoyalty() {
                /*
                try {
                    const overlay = document.getElementsByClassName('v-overlay__scrim')[0]
                    overlay.click()
                } catch(err) { }

                this.$store.commit('saveModal', 1)
                */
               this.$router.push('/home/buys/loyalty')
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>