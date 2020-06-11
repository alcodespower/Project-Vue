import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Setting from '../views/Setting.vue'
import IsPC from '../views/IsPC.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            title: '首页'
        },
        component: Home
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting
    },
    {
        path: '/ispc',
        name: 'IsPC',
        component: IsPC
    }
]

const router = new VueRouter({
    routes
})

export default router