import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')

axios.interceptors.request.use(
    config => {
      config.headers.common['Authorization'] = 'Bearer' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjI0ODQxNjkyLCJlbWFpbCI6ImluZm9AdHljb25jcHMuY29tIn0.RhZlOBqQ8tbS3gw0wGWH0B-ZQdjzo6wikJOxOQs6eoA'
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);
