import Vue from 'vue'
import App from './App'
import store from './store'

import site from './pages/index.vue';
Vue.component('site',site);

Vue.config.ignoredElements.push('wx-open-launch-weapp')

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()

 



