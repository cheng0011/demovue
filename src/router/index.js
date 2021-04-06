import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../views/login.vue'
import home from '../views/home.vue'
import list from '../views/list.vue'
import user from '../views/user.vue'
import add from '../views/add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: list
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    }

  ]
})
