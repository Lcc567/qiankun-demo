import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


let instance = null
function render() {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render()
}

export async function bootstrap() { }
export async function mount() {
  render()
}
export async function unmount() {
  instance.$destroy()
  instance = null
}

