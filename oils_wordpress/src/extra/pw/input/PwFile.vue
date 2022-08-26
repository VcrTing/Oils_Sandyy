<template>
    <div class="pw-input pb-3">
        <label :for="'file_' + _uid">
            {{ header }}
        </label>
        <nav class="pw-ip-inner">
            <input class="pw-hide" @change="changeFiie($event)" :id="'file_' + _uid" type="file" :placeholder="pchd"/>
            <button class="pw-btn-def" @click="file">
                {{ btn }}
            </button>
            <div class="fs-s pw-sub py-3">Maximum file size 5MB</div>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        header: { type: String },
        pchd: { type: String, default: '請輸入' },
        btn: { type: String, default: '選擇檔案' }
    },
    data() {
        return {
            fiie: '', fiie_show: ''
        }
    },
    computed: {

    },
    watch: {
        fiie(n) { this.$emit('change', n) }
    },
    methods: {
        changeFiie( eve ) {
            const f = eve.target.files
            this.file = f ? f[0] : null
        },
        file() {
            const dom = document.getElementById('file_' + this._uid)
            dom.click()
        },
        reset(def) {
            this.fiie_show = def
        }
    }
}
</script>

<style lang="sass">
.pw-hide
    visibility: hidden !important
</style>