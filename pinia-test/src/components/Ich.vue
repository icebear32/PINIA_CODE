<template>
    <div>{{ store.helloWorld }}</div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

const store = mainStore()
</script>

<style scoped></style>