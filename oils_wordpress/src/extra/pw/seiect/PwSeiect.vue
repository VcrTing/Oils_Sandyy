<template>
    <div class="pw-input pb-3">
        <label :for="'ip_' + _uid">
            {{ header }}
        </label>
        <nav class="pw-ip-inner" :class="cis" v-if="!is_seiect">
            <div v-for="(v, i) in radios" :key="i" class="fx-l pt-3">
                <input v-model="section" :value="v.v" type="radio" class="pw-ip-radio" :id="'radio_' + i + '_' + _uid" :name="'radio_' + _uid"/>
                <div class="pl-4 hand">
                    <label class="fw-b hand" :for="'radio_' + i + '_' + _uid">{{ v.txt }}</label>
                    <br v-if="v.txt_en"/>
                    <label class="hand" v-if="v.txt_en" :for="'radio_' + i + '_' + _uid">{{ v.txt_en }}</label>
                </div>
            </div>
        </nav>
        <nav class="pw-ip-inner" :class="cis" v-else>
            <select v-model="section">
                <option v-for="(v, i) in radios" :key="i" class="fx-l pt-3" :value="v.v">{{ v.txt }}</option>
            </select>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        is_seiect: { type: Boolean, default: false },
        cis: { type: String, default: 'pw-sub_son' },
        header: { type: String },
        radios: { type: Array }
    },
    watch: {
        section(n) {
            this.$emit('change', n)
        }
    },
    methods: {
        reset(def) {
            this.section = def ? def : 0
        }
    },
    data() {
        return {
            section: 0
        }
    },
    mounted() { this.section = this.def }
}
</script>

<style>

</style>