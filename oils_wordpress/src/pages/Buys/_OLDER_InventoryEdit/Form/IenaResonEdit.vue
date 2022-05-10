<template>
    <div v-if="item.option == 0" class="py-1">
        {{ choise[item.reson - 1].txt }}
    </div>
    <div v-else class="side-select">
        <select class="input ie-input" v-model="item.reson">
            <option v-for="(v, i) in choise" :key="i" :value="v.v">{{ v.txt }}</option>
        </select>
        <span class="side-icon">
            <v-icon>mdi-chevron-down</v-icon>
        </span>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            item: Object
        },
        data() {
            return {
                v: 0,

                choise: [
                    {
                        v: 1,
                        txt: '壞包裝'
                    }, 
                    {
                        v: 2,
                        txt: '壞質量'
                    }, 
                    {
                        v: 3,
                        txt: '其他原因'
                    }
                
                ]
            }
        },
        mounted() {
            
        },
    }
</script>

<style lang="sass" scoped>
    
</style>