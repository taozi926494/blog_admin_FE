import Vue from 'vue'
import Router from 'vue-router'

import category from '@/views/category.vue'
import list from '@/views/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home',
		component: category
    },
    {
    	path: '/category',
    	name: 'category',
    	component: category
    },
    {
    	path: '/list/:categoryid',
    	component: list
    }
  ]
})
