import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import Home from './components/Home.vue'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Router from 'vue-router'
import Dialogs from './components/Dialogs.vue'
import Second from './components/Second.vue'
import comments from './components/comments.vue'
import albums from './components/albums.vue'
Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/users/:id',
      name: 'dialogs',
      component: Dialogs
    },
    {
      path: '/posts',
      name: 'sec',
      component: Second
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/posts/comments/:id',
      name: 'comments',
      component: comments
    },
    {
      path: '/users/:iduser/albums/:id',
      component: albums
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
