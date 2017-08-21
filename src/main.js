// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

var categoryData = [
            {
              title: '前端',
              content: [
                {
                  id: '1-2',
                  name: 'HTML5'
                },
                {
                  id: '2-2',
                  name: 'Vue'
                }
              ]
            },
            {
              title: '后端',
              content: [
                {
                  id: '2-2',
                  name: 'PHP'
                },
                {
                  id: '2-3',
                  name: 'ThinkPHP'
                },
                {
                  id: '2-4',
                  name: 'Django'
                },{
                  id: '2-5',
                  name: 'NodeJS'
                }
              ]
            }
          ]

new Vue({
  el: '#app',
  router,
  /**
  * 将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，
  * 实际上也是 JSX 所要求的，如果在作用域中 h 失去作用， 在应用中会触发报错
  * 所以下面代码啊可以看作
  * render: function (createElement){
  *	    return createElement(app);
  *	}
  */
  render: h => h(App)
})
