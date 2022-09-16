<template>
    <div style="text-align: center; font-size: 1.12em; line-height: 3em;">
        Sales report for&nbsp;<span>{{ view.ser_timed_en(this.$store.state.chronus.start, true) }}</span>-<span>{{  view.ser_timed_en(this.$store.state.chronus.end, true)  }}</span>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            start: String,
            end: String
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>