<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        props: {
            is_print: {
                type: Boolean
            }
        },
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            if (this.is_print) {
                setTimeout((e) => {
                    print()
                }, 1200)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>