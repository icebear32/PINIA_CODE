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