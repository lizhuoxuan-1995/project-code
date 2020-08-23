import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/reset.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.directive('documentClick', {
  bind(el, binding) {
    document.addEventListener('click', binding.value, false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')