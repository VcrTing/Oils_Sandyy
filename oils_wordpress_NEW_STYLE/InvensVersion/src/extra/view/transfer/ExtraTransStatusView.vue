<template>
    <span class="qiong-txt-10">
        <span v-if="v == 1" class="tag-audit">
            审核通过
        </span>
        <span v-else class="tag-auditing">
            审核中
        </span>
    </span>
</template>

<script>
    export default {
        name: '',
        props: [
            'v'
        ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>