import Vue from 'vue'
import App from './App.vue'
import { Row, Col } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Row);
Vue.use(Col);
Vue.config.productionTip = false
import router from '@/router/router';


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({

  render: h => h(App),
  router
}).$mount('#app')
