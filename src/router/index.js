import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'news',
      component: (resolve) => {
        require(['@/page/index'], resolve)
      },
      children: [{
        path: 'news', // 消息页
        component: (resolve) => {
          require(['@/page/news/news'], resolve)
        }
      },
      {
        path: 'work', // 工作
        component: (resolve) => {
          require(['@/page/work'], resolve)
        }
      },
      {
        path: 'contacts', // 联系人
        component: (resolve) => {
          require(['@/page/contacts'], resolve)
        }
      },
      {
        path: 'schedule', // 日程
        component: (resolve) => {
          require(['@/page/schedule'], resolve)
        }
      }]
    },
    {
      path: '/system', // 系统消息
      component: (resolve) => {
        require(['@/page/news/system'], resolve)
      }
    }
  ]
})
