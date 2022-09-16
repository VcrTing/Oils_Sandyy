<template>
    <div class="pw-input pb-3">
        <label :for="'file_' + _uid">
            {{ header }}
        </label>
        <nav class="pw-ip-inner">
            <nav v-if="img" class="pw-demo-img pt-2">
                <img v-if="is_change" :src="fiie_show"/>
                <img v-else :src="def"/>
            </nav>
            <input class="pw-hide" @change="changeFiie($event)" 
                :id="'file_' + _uid" type="file" :placeholder="pchd"
                accept="image/*"
                />
            <button class="pw-btn-def" @click="openF">
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
        btn: { type: String, default: '選擇檔案' },
        def: { type: String, default: '' }
    },
    data() {
        return {
            fiie: '', fiie_show: '', is_change: false
        }
    },
    computed: {
        img() {
            if (this.fiie) { return this.fiie } 
            else { return this.def }
        }
    },
    watch: {
        fiie(n) { 
            this.$emit('change', n) }
    },
    methods: {
        
        changeFiie( eve ) {
            let f = eve.target.files
            f = f ? f[0] : null
            if (f) {
                let rnd = new FileReader()
                rnd.readAsDataURL(f)
                rnd.onload = () => {
                    try { this.fiie_show = rnd.target.result } catch(err) { 
                        this.fiie_show = rnd.result
                    }
                    this.fiie = f
                    this.is_change = true
                }
            } else { }
        },
        openF() {
            document.getElementById('file_' + this._uid).click()
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

.pw-demo-img
    img
        width: auto
        max-width: 100%
        max-height: 100%
    width: auto
    height: calc( 49px + 10vh ) !important
</style>