<template>
    <div>
        <div>{{ header }}</div>
        <nav>
            文件
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            default: 'Upload ID copy'
        }
    }
}
</script>

<style>

</style>