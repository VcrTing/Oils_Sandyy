<template>
    <div>
        <div v-for="(v, i) in boxs" :key="i">
            <input :disabled="disabled" v-model="chos" type="checkbox" :value="v.v" :id="'box_' + i + '_' + _uid" :name="'box_' + _uid" class="pw-checkbox"/>
            <label :for="'box_' + i + '_' + _uid" class="pl-1 pw-sub hand">{{ v.txt }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        def: { type: Number },
        header: { type: String },
        boxs: {
            type: Array, default: () => [
                {
                    v: 1,
                    txt: 'I have read and agree to the following terms and policies. I certify that I am 18 years old or above and legally able to enter into the Agreement',
                }
            ]
        },
        disabled: {
            type: Boolean, default: false
        }
    },
    watch: {
        chos(n) {
            this.$emit('change', n)
        }
    },
    data() {
        return {
            chos: 0
        }
    },
    mounted() {
        this.chos = this.def ? this.def : 0
    },
    methods: {
        reset(def) {
            this.chos = def
        }
    }
}
</script>

<style>

</style>