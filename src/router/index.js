import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
//import Home from '../Home'
import Project from '@/components/Project'

Vue.use(Router)
export default new Router({
  routes: [
      {
          path: '/',
          name: 'home',
          component: {template : '#home'}
      },
      {
          path: '/home',
          name: 'home',
          component: {template : '#home'}
      },
      {
          path: '/Profile',
          name: 'profile',
          component: Profile
      },
      {
          path: '/Project',
          name: 'project',
          component: Project
      }
  ]
})
