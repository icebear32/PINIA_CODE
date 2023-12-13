<template>
    <div>{{ store.phoneHidden }}</div>
    <div>{{ phoneHidden }}</div>
    <div>
        <button @click="handleClickChangePhone">修改电话号码</button>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { getterStore } from '../store/getters'

const store = getterStore()

const { phoneHidden } = storeToRefs(store)

const handleClickChangePhone = () => {
    store.phone = "11123456999"
}
</script>

<style scoped></style>