<template>
    <div v-if="chars == 4">
        <div class="qiong-td" v-for="(v, i) in body" :key="i">
            <div class="qiong-wide-42 pr-0" v-html="v.txt" :class="v.class_v"></div>
            <div class="qiong-wide-58 pr-0" v-html="v.content" :class="v.class_v"></div>
        </div>
    </div>
    <div v-else>
        <div class="qiong-td" v-for="(v, i) in body" :key="i">
            <div class="qiong-wide-60 pr-0" v-html="v.txt" :class="v.class_v"></div>
            <div class="qiong-wide-40 pr-0" v-html="v.content" :class="v.class_v"></div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            header: {
                type: Object
            },
            body: {
                type: Array
            },

            chars: {
                type: Number,
                default: 4
            }
        },
        name: '',
        data() {
            return {

            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>