<template>
    <div class="func-sort" @click="sortFunc">
        <div class="trangle trangle-up" :class="{ 'tu-active': sort == 1 }"></div>
        <div class="trangle trangle-down" :class="{ 'tb-active': sort == -1 }"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                sort: 0
            }
        },
        methods: {
            rest() {
                this.sort = 0
            },
            sortFunc() {
                this.sort += 1
                this.sort = this.sort > 1 ? -1 : this.sort

                this.$emit('sort_Father', this.sort)
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>