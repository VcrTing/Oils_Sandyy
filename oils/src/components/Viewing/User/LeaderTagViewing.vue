<template>
    <div v-if="rank > leader" class="btn-leader-tag">
        {{ $t('STATUS.leader') }}
    </div>
    <span v-else></span>
</template>

<script>
    export default {
        name: '',
        props: {
            rank: {
                type: Number
            }
        },
        data() {
            return {
                leader: 5
            }
        },
        mounted() {
            this.leader = this.conf.RANK_LEAD
            console.log(this.rank)
        },
    }
</script>

<style lang="sass" scoped>
    
</style>