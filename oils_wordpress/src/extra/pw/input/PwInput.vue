<template>
    <div class="pw-input pb-3">
        <label :for="'ip_' + _uid">
            {{ header }}
        </label>
        <nav class="pw-ip-inner">
            <input :type="typed" v-model="word" :placeholder="pchd"/>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        typed: { type: String, default: 'text' },
        header: { type: String },
        pchd: { type: String, default: '請輸入' }
    },
    watch: {
        word(n) {
            this.$emit('change', n)
        }
    },
    methods: {
        reset(def) {
            this.word = def
        }
    },
    data() {
        return {
            word: ''
        }
    },
    computed: {

    }
}
</script>

<style>

</style>