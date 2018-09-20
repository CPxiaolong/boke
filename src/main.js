// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'	
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.less'
//import './assets/css/style.css'
import router from './router'
import store from './store/index'
import App from './App'

//axios.defaults.baseURL = 'http://localhost:8080/fmtv/app',
axios.defaults.transformRequest = [function (data) {
    //数据序列化
    return qs.stringify(data);
}]
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
