import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
const routes:RouteRecordRaw[] = [
  {
       path:'/',
       redirect:'/login'
  },
  {
        path:'/login',
        component:()=>import("../views/Login/index.vue"),
  },
  {
        path:'/register',
        component:()=>import("../views/Register/index.vue"),
  },
  {
        path:'/renew',
        component:()=>import("../views/Renewpasword/index.vue")
  },
  {
        path:'/menu',
        component:()=>import("../views/Menu/index.vue"),
        children:[
            {
                  path:'home',
                  component:()=>import("../views/Home/index.vue")
            },
            {
                  path:'person',
                  component:()=>import("../views/Person/index.vue")
            },
            {
                  path:'algc',
                  component:()=>import("../views/ALGC/index.vue"),
                  children: [
                        {
                              // 设置默认路径
                              path: '',
                              component: () => import('../views/ALGC/ALGCpage2.vue')
                        },
                        {
                              path: 'create',
                              component: () => import('../views/ALGC/ALGCpage1.vue')
                        },
                        {
                              path: 'service',
                              component: () => import('../views/ALGC/ALGCpage2.vue')
                        },
                        {
                              path: 'data',
                              component: () => import('../views/ALGC/ALGCpage3.vue')
                        }
                  ]
            },
            {
                  path:'bug',
                  component:()=>import("../views/BugDialog/index.vue")
            },
            {
                  path:'dialog',
                  component:()=>import("../views/DialogManage/index.vue")
            },
            {
                  path:'feedback',
                  component:()=>import("../views/Feedback/index.vue")
            },
            {
                  path:'inform',
                  component:()=>import("../views/InformSearch/index.vue")
            },
            {
                  path:'leak',
                  component:()=>import("../views/LeakageSituation/index.vue"),
                  children: [{
                        path: '', // 空路径，作为 /leak 的默认子路由
                        component: () => import('../views/LeakageSituation/Leakpage1.vue') // 默认显示 Leakpage1.vue
                  },      
                  {
                        path: 'search',
                        component: () => import('../views/LeakageSituation/Leakpage1.vue')
                  },
                  {
                        path: 'monitor',
                        component: () => import('../views/LeakageSituation/Leakpage2.vue')
                  }
                  ]
            },
            {
                  path:'media',
                  component:()=>import("../views/MediaCreation/index.vue")
            },
            {
                  path:'safe',
                  component:()=>import("../views/SafeTest/index.vue")
            },
            {
                  path:'vip',
                  component:()=>import("../views/VIPsubsbscribe/index.vue"),
                  children: [
                  {
                        // 设置默认路径
                        path: '',
                        component: () => import('../views/VIPsubsbscribe/VIPpage1.vue')
                  },
                  {
                        path: 'ask',
                        component: () => import('../views/VIPsubsbscribe/VIPpage1.vue')
                  },
                  {
                        path: 'buy',
                        component: () => import('../views/VIPsubsbscribe/VIPpage2.vue')
                  },
                  {
                        path: 'subsbscribe',
                        component: () => import('../views/VIPsubsbscribe/VIPpage3.vue')
                  }
                  ]
            }
        ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;