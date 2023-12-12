<template>
    <div>
        <h3>修改状态数据四种方式的数据</h3>
        <div>{{ store.text }}</div>
        <div>{{ store.count3 }}</div>
    </div>
    <div><button @click="handleClick1">(1)修改状态数据</button></div>
    <div><button @click="handleClickPatch">(2-patch)修改状态数据</button></div>
    <div><button @click="handleClickMethod">(3-method)修改状态数据</button></div>
    <div><button @click="handleClickActions">(4-actions)修改状态数据</button></div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

const store = mainStore()

// 第一种方法
const handleClick1 = () => {
    store.count3++
    // 相对于 store.$patch 慢
    store.text = store.text === 'ich' ? 'du' : 'ich'
}

// 第二种方法
const handleClickPatch = () => {
    // store.$patch 经过优化
    store.$patch({
        count3: store.count3 + 2,
        text: store.text === 'ich' ? 'du' : 'ich'
    })
}

// 第三种方法 $patch 传递函数
const handleClickMethod = () => {
    store.$patch((state: { count3: number; helloWorld: string; }) => {
        state.count3++
        state.helloWorld = state.helloWorld == 'ich' ? 'du' : 'ich'
    })
}

// 第四种方法 actions
const handleClickActions = () => {
    store.changeState()
}
</script>

<style scoped></style>