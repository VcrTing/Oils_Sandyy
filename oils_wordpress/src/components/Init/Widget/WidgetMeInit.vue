<template>
    <div>

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
            locationMe() {
                let res = sessionStorage.getItem('pdf_oil_me')
                if (res) {
                    res = JSON.parse(res)
                }

                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>