import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import AddUser from './views/AddUser'
import EditUser from './views/EditUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-user',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/edit-user/:userId',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
