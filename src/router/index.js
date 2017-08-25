import Vue from 'vue'
import Router from 'vue-router'

import category from '@/views/category.vue'
import list from '@/views/list.vue'
import articleView from '@/views/articleView.vue'
import articleEdit from '@/views/articleEdit.vue'
import articleAdd from '@/views/articleAdd.vue'

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
        name: 'list',
    	component: list
    },
    {
        path: '/article/:articleid',
        name: 'article',
        component: articleView
    },
    {
        path: '/editArticle/:articleid',
        name: 'editArticle',
        component: articleEdit
    },
    {
        path: '/addArticle/:categoryid',
        name: 'addArticle',
        component: articleAdd
    }
  ]
})
