<template>
    <div class="qiong-txt-12">
        <button class="btn-filter-pure" :class="{ 'btn-filter-pure-active': (option == v.v), 'txt-txt_x3_red': (option != v.v) }" 
            v-for="(v, i) in filter" :key="i" @click="switching(v.v)">
            {{ v.txt }}
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                option: 0,

                filter: [
                    {
                        txt: 'Set products',
                        v: 0,
                    },
                    {
                        txt: 'Free products',
                        v: 1,
                    },
                    {
                        txt: 'Single products',
                        v: 2,
                    },
                    {
                        txt: 'LP products',
                        v: 3,
                    }
                ]
            }
        },
        mounted() {
            this.switching(0)
        },
        methods: {
            switching(f) {
                this.option = f
                this.$emit('sign_Father', f)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>