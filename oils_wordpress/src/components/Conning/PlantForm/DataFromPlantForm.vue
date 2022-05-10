<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            returnMessage(event){
                
                let data = event.data;
                switch (data.cmd) {
                    case 'getFormJson':
                        this.$emit('recive_Father', data)
                        break;
                }
            },
        },
        created() {
            window.addEventListener("message", this.returnMessage);
        },
        destroyed() {
            window.removeEventListener('message', this.returnMessage);
        }
    }
</script>

<style lang="sass" scoped>
    
</style>