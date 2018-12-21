import Vue from 'vue'
import VueKonva from 'vue-konva'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(VueKonva)

new Vue({
  el: '#app',
  render: h => h(App)
})
