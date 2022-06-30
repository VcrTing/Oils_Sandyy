<template>
    <div class="d-ib input-in-simp qiong-txt-14">
        <input type="text" v-model="point" placeholder="" />
    </div>
</template>

<script>
    export default {
        name: '',
        props: [
            '_point'
        ],
        data() {
            return {
                point: null
            }
        },
        mounted() {
            this.point = this._point
        }
    }
</script>

<style lang="css" scoped>
    
</style>