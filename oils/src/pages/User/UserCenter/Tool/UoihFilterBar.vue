<template>
    
    <!--div class="qiong-txt-12">
        <button class="btn-filter" 
            :class="{ 'btn-filter_active': (option == v.v) }" 
            v-for="(v, i) in filter" :key="i" 
            @click="switching(v.v)">

            {{ v.txt }}
        </button>
            <uoih-filter-bar slot="filter" @sign_Father="(f) => $refs.buyRecord.change(f)"></uoih-filter-bar>
    </div-->
    <span></span>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                option: 1,

                filter: [
                    {
                        txt: '已入賬',
                        v: 1,
                    },
                    {
                        txt: '未入賬',
                        v: 2,
                    }
                ]
            }
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