<template>
    <nav>

        <qiong-space :space="'1vh'"></qiong-space>

        <div class="qiong-txt-td mb-1 qiong-pt-7 unm-title fw-b">
            {{ $t('HEADER.now_member_level') }}
        </div>

        <qiong-space :space="'12px'"></qiong-space>

        <slot name="pay_ievei"></slot>

        <div class="mb-1 mt-4 qiong-pt-15 ">
            <slot name="next_ievei_tit"></slot>
        </div>

        <qiong-space :space="'12px'"></qiong-space>

        <slot name="next_ievei_cont"></slot>
    </nav>
</template>

<script>
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
export default {
  components: { QiongSpace },

}
</script>

<style>

</style>