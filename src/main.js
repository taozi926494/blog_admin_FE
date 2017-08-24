// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,

  /**
  * 非vuex下的非父子组件通信
  */
  data: {
    Bus: new Vue()
  },

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