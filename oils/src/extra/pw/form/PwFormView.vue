<template>
    <div class="pw-form-view">
        <nav class="t-l">
            <p class="fw-b">{{ header_cn }}</p>
            <p>{{ header_en }}</p>
        </nav>
        <div class="fx-1 t-l">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'header_cn',
        'header_en',
    ]
}
</script>

<style lang="sass">
.min-w
    min-width: 5em
</style>