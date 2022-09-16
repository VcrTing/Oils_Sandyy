<template>
    <div class="pdf-panel-total t-r">
        <div class="d-ib total">
            total&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{ _items ? _items.length : 0 }}</span>
        </div>
        <div class="d-ib">
           &nbsp;items
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [ '_items' ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>