import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index.vue'
import second from '@/views/second.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home',
		component: index
    },
    {
    	path: '/index',
    	name: 'index',
    	component: index
    },
    {
    	path: '/second',
    	name: 'second',
    	component: second
    }
  ]
})
