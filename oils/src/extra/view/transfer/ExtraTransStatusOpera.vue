<template>
    <div class="qiong-txt-10 ps-r">
        <div v-show="!loading" class="audit-select" :class="'audit-s-' + res">
            <select class="txt-fff" v-model="res" @change="update" :id="'audit_' + _id">
                <option value="0">審核中</option>
                <option value="1">審核通過</option>
            </select>
            <v-icon class="qiong-txt-12 txt-fff op-70" v-if="res == 0" @click="open">mdi-pencil-outline</v-icon>
            <v-icon class="qiong-txt-12 txt-fff op-70" v-if="res == 1" @click="open">mdi-chevron-down</v-icon>
        </div>
        <div v-show="loading">
            <v-icon class="qiong-txt-20 circle-around">mdi-loading</v-icon>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [
            'one',
            '_id'
        ],
        data() {
            return {
                res: 0,
                loading: false,
            }
        },
        mounted() {
        },
        methods: {
            condition() {
                return {
                    id: this.one.id,
                    is_approved: this.res == 0 ? false : true
                }
            },

            update() {
                this.loading = true
                this.$emit('update', this.condition() )
                setTimeout(() => { this.loading = false }, 1200)
            },
            open() { 
                let res = document.getElementById('audit_' + this._id)
                res.click()
                console.log(res);  }
        }
    }
</script>

<style lang="sass" scoped>
.circle-around 
    color: #999
</style>