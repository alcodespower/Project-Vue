import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //这里放全局参数
        search: ''
    },
    mutations: {
        //这里是set方法
        updateSearch(state, msg) {
            state.search = msg
        }
    },
    actions: {},
    modules: {}
})