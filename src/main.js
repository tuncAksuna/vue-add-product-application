import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

Vue.component("App", App);

new Vue({
    el: '#app',
    render: h => h(App)
})