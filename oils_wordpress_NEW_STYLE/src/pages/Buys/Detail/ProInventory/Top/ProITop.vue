<template>
    <div class="fx-s fw-b" style="align-items: flex-end;">
        <!--button class="btn-thin py-1 px-5 qiong-txt-12 mr-5" @click="$emit('plus_Father')">
            <v-icon class="qiong-txt-16">mdi-plus</v-icon>
            新增庫存
        </button-->

        <div>
            <button v-for="(v, i) in tabs" :key="i"
                @click="now = v.tab"
                class="btn-filter-pure qiong-txt-12"
                :class="{ 'btn-filter-pure-active': (now == v.tab), 'txt-txt_x3_red': (now != v.tab) }"
            >
                {{ v.txt }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                now: 0,
                tabs: [
                    { txt: '全部', tab: 0 },
                    { txt: '加貨', tab: 1 },
                    { txt: '減貨', tab: 2 },
                    { txt: '壞貨', tab: 3 },
                    { txt: '換貨', tab: 4 },
                    { txt: '店鋪樣品消耗', tab: 5 },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>