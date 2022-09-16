<template>
    <div class="form-wrapper">
        <div class="form-input">
            <label :class="ex_class">
                <slot></slot>
            </label>
            <input class="input-beauty" type="text" :placeholder="placeholder" v-model="v">
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            placeholder: String,
            ex_class: {
                type: String,
                default: 'pr-1'
            }
        },
        data() {
            return {
                v: ''
            }
        },
        methods: {
            value() {
                this.v = this.v ? this.v : ''
                return this.v.trim()
            },

            def(k) {
                this.v = k
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>