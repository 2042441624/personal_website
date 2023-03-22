// 1.引入vue文件
import Vue from 'vue';

// 2.引入App文件
import App from './App.vue';

// 3.element按需引入文件
import '@/element/element';

// 4.开发环境的log消息设置为false
Vue.config.productionTip = false

// 5.vuex状态引入文件
import store from '@/store/store';

// 6.router路由引入文件
import router from '@/router/router';


// 5. 创建和挂载根实例。
new Vue({
  render: h => h(App),
  //挂载app的路由
  router,
  //挂载app的全局状态vuex
  store
}).$mount('#app')
