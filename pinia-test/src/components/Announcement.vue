<template>
    <hr>
    <div>
        <h3>问题：读取的是一次性数据，并不是响应式数据</h3>
    </div>
    <div>{{ count1 }}</div>
    <div>
        <h3>解决问题：</h3>
    </div>
    <div>{{ count2 }}</div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'
import { storeToRefs } from 'pinia'

// 把store的Helloworld和count数据解构出来
const store = mainStore()
const { count1 } = store
// storeToRefs 解决 读取的是一次性数据，并不是响应式数据 问题
const { count2 } = storeToRefs(store)
</script>

<style scoped></style>