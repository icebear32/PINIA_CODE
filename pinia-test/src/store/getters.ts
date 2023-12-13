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