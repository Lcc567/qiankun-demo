import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from "qiankun";
import actions from './shared/actions'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);

console.log('actions', actions);

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:8000',
    container: '#vue',
    activeRule: '/vue',
    props: {
      // user: initUser,
      actions
    }
  },
  {
    name: 'reactApp',
    entry: '//localhost:9000',
    container: '#react',
    activeRule: '/react'
  }
]

registerMicroApps(apps)

start({
  prefetch: true,
  singular: false
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
