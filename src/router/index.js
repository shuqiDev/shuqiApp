/*
 * @Author: 熊小兜
 * @Date: 2019-11-26 15:10:16
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-07 20:38:52
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router';
import Jingxuan from '@/pages/Jingxuan'
import Bbookstore from '@/pages/Bbookstore'
import Manhua from '@/pages/Manhua'
import Mmore from '@/pages/Mmore';
import Girl from '@/pages/Girl';
import Boy from '@/pages/Boy';
import Over from '@/pages/Over';
import my from '@/pages/my';
import login from '@/pages/login';
import restive from '@/pages/restive';
import shezhi from '@/pages/shezhi';
import xiugei from '@/pages/xiugei';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      component: Jingxuan
    },
    {
      path:'/Bbookstore',
      component: Bbookstore
    },
    {
      path: '/Manhua',
      component: Manhua
    },
    {
      path: '/Jingxuan',
      component: Jingxuan
    },
    {
      path: '/Mmore',
      component: Mmore
    },
    {
      path: '/Girl',
      name: 'Girl',
      component: Girl
    },
    {
      path: '/Boy',
      name: 'Boy',
      component: Boy
    },
    {
      path: '/Over',
      name: 'Over',
      component: Over
    },
    {
      path: '/my',
      name: 'my',
      component: my 
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/restive',
      name: 'restive',
      component: restive
    },{
      path: '/shezhi',
      name: 'shezhi',
      component: shezhi
    },
    {
      path: '/xiugei',
      name: 'xiugei',
      component: xiugei
    }
  ]
})
