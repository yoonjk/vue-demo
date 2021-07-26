import Vue from 'vue'
import App from './App.vue'
import router from './routes'; //설정 라우터 호출
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store';
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = true;

new Vue({
  store
  ,render: h => h(App)
  ,router               //뷰에 설정
}).$mount('#app')
