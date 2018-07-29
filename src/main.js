import Vue from 'vue'
import App from './components/App.vue'
import {store} from './store/store'

window.eventBus = new Vue()

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
