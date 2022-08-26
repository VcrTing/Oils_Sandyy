<template>
    <div>
        <nav>
            <v-icon>mdi-search</v-icon>
            <input v-model="word" placeholder="輸入內容進行搜索"/>
        </nav>
    </div>
</template>

<script>
export default {
    watch: {
        word(n) {
            console.log('开始搜索 =', n)
        }
    },
    data() {
        return {
            word: ''
        }
    }
}
</script>

<style>

</style>