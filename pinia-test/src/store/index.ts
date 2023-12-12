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
            helloWorld1: 'Hello World!!!',
            count1: 0,
            helloWorld2: 'Hello World!!!',
            count2: 0,
        }
    },
    getters: {},
    actions: {}
})