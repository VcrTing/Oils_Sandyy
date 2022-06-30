<template>
    <span>
        {{ result }}
    </span>
</template>

<script>
    export default {
        name: '',
        props: {
            branch_bonus: {
                type: Array
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            result() {
                let res = 0
                if (this.branch_bonus.length > 0) {

                }

                return res
            }
        }   
    }
</script>

<style lang="sass" scoped>
    
</style>