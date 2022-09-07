import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login.vue'
import NoteList from '../components/NoteList'
import NoteInfo from '../components/NoteInfo'
import NoteTrash from '../components/NoteTrash'
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
      name: 'Login',
      component: Login
    },
    {
      path: '/notebooks',
      name: 'NoteList',
      component: NoteList
    },
    {
      path: '/note/:noteId',
      name: 'NoteInfo',
      component: NoteInfo
    },
    {
      path: '/trash/:noteId',
      name: 'NoteTrash',
      component: NoteTrash
    }
  ]
})
