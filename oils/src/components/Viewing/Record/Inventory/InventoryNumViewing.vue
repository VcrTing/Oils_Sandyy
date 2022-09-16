<template>
    <div>
        <div class="btn-inventory">{{ txt }}</div>
        {{ num }}
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            num: Number,
            typed: Number
        },
        data() {
            return {
                
            }
        },
        computed: {
            txt() {
                let res = '尖'
                if (this.typed == 1) {
                    res = '火'
                }

                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>