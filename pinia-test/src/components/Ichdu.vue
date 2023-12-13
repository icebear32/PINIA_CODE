<template>
    <div><h3>pinia中的store的互相调用</h3></div>
    <div>
        <button @click="getList">获取列表</button>
    </div>
</template>

<script lang="ts" setup>
import { ichStore } from '../store/ich'

const store = ichStore()
const getList = () => {
    store.getList()
}
</script>

<style scoped></style>