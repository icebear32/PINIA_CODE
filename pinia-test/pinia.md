# Pinia



## pinia的优点

* Vue3、Vue2都支持
* 抛弃了Mutations的操作，只有state、getters和actions
* 不需要嵌套模块，符合Vue3的Composition api
* 完整的TypeScript支持
* 代码更加简洁



## 开发环境的搭建

```
npm init vite@latest
（创建项目名，选择Vue、TypeScript）
cd xx
npm install
npm run dev
```

```
npm install pinia
```



## 用 pinia 的方式创建一个 store

创建一个 pinia（根存储）并将其传递给应用程序

```ts
import { createPinia } from 'pinia'

const pinia = createPinia()

app.use(pinia)
```

**mian.ts**

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

在**src**目录下创建一个**store**文件夹，并创建一个**index.ts**的文件，创建**store**

```
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"

export const mainStore = defineStore('main', {
    state() {
        return {
            helloWorld: 'Hello World!!!',
        }
    },
    getters: {},
    actions: {}
})
```

在**src**目录下的**components**目录下创建**Ich.vue**文件，使用**store**

```vue
<template>
    <div>{{ store.helloWorld }}</div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

const store = mainStore()
</script>

<style scoped></style>
```

