<template>
    <div class="qiong-txt-12">
        <div class="d-ib mr-3">
            <button class="btn-sec-thin btn-in-plus bg-none py-1" @click="$emit('plus_Father')">
                <v-icon class="qiong-txt-14">mdi-plus</v-icon>
                新增記錄
            </button>
        </div>
        <button class="btn-filter" :class="{ 'btn-filter_active': (option == v.v) }" v-for="(v, i) in filter" :key="i" @click="switching(v.v)">
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
                    /*
                    {
                        txt: '全部',
                        v: 0,
                    },
                    {
                        txt: '尖沙咀',
                        v: 1,
                    },
                    {
                        txt: '火炭',
                        v: 2,
                    }
                    */
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