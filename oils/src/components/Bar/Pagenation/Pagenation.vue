<template>
    <ul class="pager px-0 an_upper">
        <li class="" @click="_next(now - 1)">上一頁</li>
        <li class="px-2 ml-1" @click="_next(1)">
            <v-icon class="qiong-txt-14">mdi-chevron-double-left</v-icon>
        </li>
        <li class="pager_fly">
            <input type="text" :value="now" @change="go()" id="inpREF"/><span>/&nbsp;{{ pages }}</span>
        </li>
        <li class="px-2 mr-1" @click="_next(pages)">
            <v-icon class="qiong-txt-14">mdi-chevron-double-right</v-icon>
        </li>
        <li class="" @click="_next(now + 1)">下一頁</li>
    </ul>
</template>

<script>
    export default {
        props: {
            _count: Number,
            _limit: Number,
        },
        data() {
            return { now: 1 }
        },
        watch: {
            now(ne, o) {
                this.$emit('page_Father', (ne - 1) * this._limit, this._limit * ne)
            }
        },
        computed: {
            pages() {
                let res = Math.ceil(this._count / this._limit)
                res = res ? res : 1
                return res
            }
        },
        methods: {
            go(v = null) {
                v = v ? v : document.getElementById('inpREF').value; this._next(v)
            },
            _next(n) {
                n = (n != null) ? n : 1
                n = isNaN(n) ? 1 : n
                n = n <= 0 ? this.pages : n
                n = n > this.pages ? 1 : n
                this.now = n; document.getElementById('inpREF').value = n
            }
        }
    }
</script>