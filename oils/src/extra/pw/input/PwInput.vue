<template>
    <div class="pw-input pb-3" :class="{ 'pw-ip-err': err }">
        <label :for="'ip_' + _uid">
            {{ header }}
        </label>
        <nav class="pw-ip-inner" :class="{ 'dis_ip': !can_edit }">
            <input :disabled="!can_edit" :type="typed" v-model="word" :placeholder="pchd"/>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        typed: { type: String, default: 'text' },
        header: { type: String },
        pchd: { type: String, default: '請輸入' },
        err: { type: Boolean },

        can_edit: {
            type: Boolean, default: true
        }
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

<style lang="sass" scoped>
input
    user-select: auto !important
</style>