import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '~/pages/Index/Index.vue'

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Index
            }
        ]
    })
}
