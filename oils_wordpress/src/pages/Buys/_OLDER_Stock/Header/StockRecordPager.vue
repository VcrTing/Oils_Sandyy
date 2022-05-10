<template>
    <ul class="pager">
        <li class="btn-filter" @click="_next(now - 1)">上一页</li>
        <li class="btn-filter pager_fly">
            <input type="text" :value="now" @change="go()" id="inpREF"/><span>/&nbsp;{{ pages }}</span>
        </li>
        <li class="btn-filter" @click="_next(now + 1)">下一页</li>
    </ul>
</template>

<script>
    export default {
        name: '',
        props: {
            _count: Number,
            _limit: Number,
        },
        data() {
            return {
                now: 1,
                pages: 0,

            }
        },
        mounted() {
            this._num_pages()
        },
        watch: {
            now(ne, o) {
                this.$emit('page_Father', (ne - 1) * this._limit, this._limit * ne)
            }
        },
        methods: {
            _num_pages() {
                let res = Math.ceil(this._count / this._limit)
                this.pages = res ? res : 1
            },

            go(v = null) {
                v = v ? v : document.getElementById('inpREF').value
                this._next(v)
            },

            _next(n) {
                n = (n != null) ? n : 1
                n = isNaN(n) ? 1 : n
                n = n <= 0 ? this.pages : n
                n = n > this.pages ? 1 : n
                this.now = n
                document.getElementById('inpREF').value = n
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>