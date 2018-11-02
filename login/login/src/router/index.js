import Vue from 'vue'
import Router from ''
// import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main.vue'
import login from '@/components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
