<template>
    <div>
        <div>
            <slot name="tr"></slot>
            <slot name="td"></slot>
        </div>
        <table-pager-footer></table-pager-footer>
    </div>
</template>

<script>
import TablePagerFooter from '../../../../InvensVersion/src/components/Qiong/Footer/TablePagerFooter.vue'
export default {
  components: { TablePagerFooter },

}
</script>

<style>

</style>