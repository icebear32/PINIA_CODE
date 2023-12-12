<template>
    <div><button @click="handleClick">修改状态数据</button></div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

const store = mainStore()

const handleClick = () => {
    store.count++
    store.count1++
    store.count2++
}
</script>

<style scoped></style>