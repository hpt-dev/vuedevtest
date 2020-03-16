import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const fb = require('./firebase.config.js')

Vue.config.productionTip = false

// handle page reloads
let app:any;

fb.auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            vuetify,
            render: h => h(App)
        })
    }
})