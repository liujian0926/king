import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import nickname from "./views/nickname.vue";
import setPassword from "./views/setPassword.vue";
import language from "./views/language.vue";
import register from "./views/register.vue";
import getMoney from "./views/getMoney.vue";

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {component:nickname,path:'/nickname'},
    {component:setPassword,path:'/setPassword'}, 
    {component:language,path:'/language'}, 
    {component:register,path:'/register'}, 
    {component:getMoney,path:'/getMoney'}, 
  ]
})


