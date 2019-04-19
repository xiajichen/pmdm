import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/Contact',
      component:resolve => require(['../views/menus/Contact'],resolve),
      children:[
        {
          path:'',
          component:resolve => require(['../views/Contact/FeedBack'],resolve)
        },
        {
          path:'/FeedBack',
          component:resolve => require(['../views/Contact/FeedBack'],resolve)
        },
        {
          path:'/Map',
          component:resolve => require(['../views/Contact/Map'],resolve)
        }
      ]
    },
    {
      path:'/IndexPage',
      component:resolve => require(['../views/menus/IndexPage'],resolve)
    },
    {
      path:'/Institution',
      component:resolve => require(['../views/menus/Institution'],resolve)
    },
    {
      path:'/Introduction',
      component:resolve => require(['../views/menus/Introduction'],resolve)
    },
    {
      path: '',
      redirect: '/IndexPage'
    },
    {
      path:'/ArticleDetails',
      component:resolve => require(['../views/ArticleDetails/ArticleDetails'],resolve)
    },
    {
      path:'/Categorys',
      component:resolve => require(['../views/menus/Categorys'],resolve)
    },
    {
      path:'/Download',
      component:resolve => require(['../views/Download/Download'],resolve)
    },
    {
      path:'/Shijian',
      component:resolve => require(['../views/Shijian/Shijain'],resolve)
    }
  ]
})
