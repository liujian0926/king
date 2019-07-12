import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import nickname from "./views/nickname.vue";
import setPassword from "./views/setPassword.vue";

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {component:nickname,path:'/nickname'},
    {component:setPassword,path:'/setPassword'}, 
  ]
})
