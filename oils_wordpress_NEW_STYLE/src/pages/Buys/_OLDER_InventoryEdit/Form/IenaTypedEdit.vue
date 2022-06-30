<template>
    <div v-if="item.option == 0" class="py-1">
        <company-viewing :company="item.typed"></company-viewing>
    </div>
    <div v-else class="side-select">
        <select class="input ie-input" v-model="item.typed">
            <option v-for="(v, i) in choise" :key="i" :value="v.v">{{ v.txt }}</option>
        </select>
        <span class="side-icon">
            <v-icon>mdi-chevron-down</v-icon>
        </span>
    </div>
</template>

<script>
import CompanyViewing from '@/components/Viewing/Company/CompanyViewing.vue'
    export default {
  components: { CompanyViewing },
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
                        txt: '尖沙咀'
                    }, 
                    {
                        v: 2,
                        txt: '火炭'
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