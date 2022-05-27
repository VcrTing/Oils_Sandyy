<template>
    <div class="pdf-panel">
        <div class="pdf-panel-header">
            {{ header }}
        </div>
        <div class="pdf-panel-cont" :class="extra">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [ 'header', 'extra' ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>