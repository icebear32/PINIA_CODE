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



## pinia 改变状态数据

**index.ts**

```
// 定义新的数据
count:0
```



```ts
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"

export const mainStore = defineStore('main', {
    state() {
        return {
            helloWorld: 'Hello World!!!',
            count:0
        }
    },
    getters: {},
    actions: {}
})
```

在**src**目录下的**components**目录下创建**CountButton.vue**文件，使用**store**

```vue
<template>
    <div><button @click="handleClick">修改状态数据</button></div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

const store = mainStore()

const handleClick = () => {
    store.count++
}
</script>

<style scoped></style>
```

**Ich.vue**

```vue
// 引用数据
<div>{{ store.count }}</div>
```



```vue
<template>
    <div>{{ store.helloWorld }}</div>
    <div>{{ store.count }}</div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

const store = mainStore()
</script>

<style scoped></style>
```

运行到页面

![image-20231212100651076](D:\document\Pinia\code\pinia-test\public\image-20231212100651076.png)



## 注意事项

**index.ts**，添加**count1**数据

```ts
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"

export const mainStore = defineStore('main', {
    state() {
        return {
            helloWorld: 'Hello World!!!',
            count: 0,
            
            // 解决 读取的是一次性数据，并不是响应式数据 问题的数据
            count1: 0,
        }
    },
    getters: {},
    actions: {}
})
```



**CountButton.vue**，修改事件中对数据**count1**操作

```vue
<template>
    <div><button @click="handleClick">修改状态数据</button></div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

const store = mainStore()

const handleClick = () => {
    store.count++
    store.count1++
}
</script>

<style scoped></style>
```



在**src**目录下的**components**目录下创建**Announcement.vue**文件，使用**store**

把**store**的**Helloworld和count**数据解构出来

```vue
<template>
    <hr>
    <div>
        <h3>问题：读取的是一次性数据，并不是响应式数据</h3>
    </div>
    <div>{{ count1 }}</div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'

// 把store的Helloworld和count数据解构出来
const store = mainStore()
const { count1 } = store
</script>

<style scoped></style>
```



App.vue

```vue
<script setup lang="ts">
import Ich from './components/Ich.vue'
import CountButton from './components/CountButton.vue'
import Announcement from './components/Announcement.vue'
</script>

<template>
  <Ich />
  <CountButton />
  <Announcement />
</template>

<style scoped></style>
```

运行到页面

![image-20231212105229972](D:\document\Pinia\code\pinia-test\public\image-20231212102225098.png)



### 解决方法：使用 Pinia 提供的 storeToRefs 方法

**index.ts**，添加**count2**数据

```ts
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"

export const mainStore = defineStore('main', {
    state() {
        return {
            helloWorld: 'Hello World!!!',
            count: 0,
            
            // 解决 读取的是一次性数据，并不是响应式数据 问题的数据
            count1: 0,
            count2: 0,
        }
    },
    getters: {},
    actions: {}
})
```



**CountButton.vue**，修改事件中对数据**count2**操作

```vue
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
```



**Announcement.vue**

```vue
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
```

运行到页面

![image-20231212104952616](D:\document\Pinia\code\pinia-test\public\image-20231212104007864.png)



## pinia 修改状态数据的四种方式

**index.ts**，添加**text: "text",count3: 0**数据和**actions**处添加方法**changeState()**

```ts
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"

export const mainStore = defineStore('main', {
    state() {
        return {
            helloWorld: 'Hello World!!!',
            count: 0,

            // 解决 读取的是一次性数据，并不是响应式数据 问题的数据
            count1: 0,
            count2: 0,

            // 修改状态数据四种方式的数据
            text: "text",
            count3: 0
        }
    },
    getters: {},
    actions: {
        // 第四种方法 修改状态数据
        changeState() {
            this.count3++
            this.text = 'ich'
        },
    }
})
```

在**src**目录下的**components**目录下创建**ModifyStatusData.vue**文件

```vue
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
```



## pinia 中的 Getters 使用

**需求**：电话号码中间用*****号代替显示

在**store**目录下创建**getters.ts**文件

```ts
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"

export const getterStore = defineStore('getter', {
    state() {
        return {
            phone: '12345678911'
        }
    },
    getters: {
        phoneHidden(state) {
            console.log("getters 被调用")
            
            return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
        }
    },
    actions: {}
})
```

在**src**目录下的**components**目录下创建**getters.vue**文件

```vue
<template>
    <div>{{ store.phoneHidden }}</div>
    <div>{{ phoneHidden }}</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { getterStore } from '../store/getters'

const store = getterStore()

const { phoneHidden } = storeToRefs(store)
</script>

<style scoped></style>
```

运行到页面，出现电话号码中间用*****号代替显示

且当调用两次getters的方法，控制台输出的console语句只有一个，因为数据没有发生改变



添加**handleClickChangePhone**方法改变数据

当数据发生改变，**getters**的**phoneHidden**会被调用

```vue
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
```



## pinia中的store的互相调用

需求：pinia中的store的互相调用

在**store**目录下创建**ich.ts和du.ts**文件

du.ts

```ts
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"

export const duStore = defineStore('du', {
    state() {
        return {
            list: ['ich', 'du', 'ichdu']
        }
    }
})
```

ich.ts

```ts
// 1. 定义状态容器
// 2. 修改容器中的 store
// 3.仓库中的 action 的使用

import { defineStore } from "pinia"
import { duStore } from "./du"

export const ichStore = defineStore('ich', {
    state() {
        return {
        }
    },
    getters: {},
    actions: {
        getList() {
            console.log(duStore().list)
        }
    }
})
```

在**src**目录下的**components**目录下创建**ichdu.vue**文件

```vue
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
```

