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