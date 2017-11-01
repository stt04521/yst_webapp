import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
        redirect: 'work/todoList',
        component: (resolve) => {
          require(['@/page/work/work'], resolve)
        },
        children: [{
          path: 'todoList',
          component: (resolve) => {
            require(['@/page/work/todoList'], resolve)
          }
        },
        {
          path: 'finishedList',
          component: (resolve) => {
            require(['@/page/work/todoList'], resolve)
          }
        }]
      },
      {
        path: 'contacts', // 联系人
        component: (resolve) => {
          require(['@/page/contacts/contacts'], resolve)
        }
      },
    // 日程
      {
        path: 'schedule', // 日程
        redirect: 'schedule/showSchedule',
        component: (resolve) => {
          require(['@/page/schedule/schedule'], resolve)
        },
        children: [{
          path: 'showSchedule',
          name: 'showSchedule',
          meta: { keepAlive: true },
          component: (resolve) => {
            require(['@/page/schedule/showSchedule'], resolve)
          }
        },
        {
          path: 'showNote',
          name: 'showNote',
          meta: { keepAlive: true },
          component: (resolve) => {
            require(['@/page/schedule/showSchedule'], resolve)
          }
        }
        ]
      },
      {
        path: 'showCalender',
        component: (resolve) => {
          require(['@/page/schedule/showCalender'], resolve)
        }
      }]
    },
    // news
    {
      path: '/system/:type', // 系统消息
      component: (resolve) => {
        require(['@/page/news/system'], resolve)
      }
    },
    {
      path: '/messageDetails', // 消息详情
      component: (resolve) => {
        require(['@/page/news/messageDetails'], resolve)
      }
    },
    {
      path: '/invitingFriends', // 邀请好友
      component: (resolve) => {
        require(['@/page/news/invitingFriends'], resolve)
      }
    },
    // contacts
    {
      path: '/SearchBuddy/:type', // 搜索好友
      component: (resolve) => {
        require(['@/page/contacts/SearchBuddy'], resolve)
      }
    },
    {
      path: '/CreateGroupChat', // 创建群聊
      component: (resolve) => {
        require(['@/page/contacts/CreateGroupChat'], resolve)
      }
    },
    {
      path: '/ContactInfo/:type', // 联系人资料
      component: (resolve) => {
        require(['@/page/contacts/ContactInfo'], resolve)
      }
    },
    {
      path: '/newsList', // 会话消息
      component: (resolve) => {
        require(['@/page/contacts/newsList'], resolve)
      }
    },
    {
      path: '/newsPage/:username', // 会话消息
      name: 'newsPage',
      component: (resolve) => {
        require(['@/page/contacts/newsPage'], resolve)
      }
    },
    {
      path: '/GroupManagement', // 分组管理
      component: (resolve) => {
        require(['@/page/contacts/GroupManagement'], resolve)
      }
    },
    {
      path: '/GroupChatData', // 群聊资料
      component: (resolve) => {
        require(['@/page/contacts/GroupChatData'], resolve)
      }
    },
    {
      path: '/AddMembers', // 添加群成员
      component: (resolve) => {
        require(['@/page/contacts/AddMembers'], resolve)
      }
    },
    {
      path: '/MobilePacket', // 移动分组
      component: (resolve) => {
        require(['@/page/contacts/MobilePacket'], resolve)
      }
    },
    {
      path: '/createSchedule/:info', // 创建日程
      name: 'createSchedule',
      component: (resolve) => {
        require(['@/page/schedule/createSchedule'], resolve)
      }
    },
    {
      path: '/chooseParticipator', // 选择参与者
      name: 'chooseParticipator',
      component: (resolve) => {
        require(['@/page/schedule/chooseParticipator'], resolve)
      }
    },
    {
      path: '/createNote/:info',  // 创建记事
      name: 'createNote',
      component: (resolve) => {
        require(['@/page/schedule/createNote'], resolve)
      }
    },
    {
      path: '/scheduleDetail/:id',  // 日程详情
      name: 'scheduleDetail',
      component: (resolve) => {
        require(['@/page/schedule/scheduleDetail'], resolve)
      }
    },
    {
      path: '/noteDetail/:id',  // 记事详情
      name: 'noteDetail',
      component: (resolve) => {
        require(['@/page/schedule/noteDetail'], resolve)
      }
    },
    {
      path: '/orgnizeApply',  // 组织应用
      name: 'orgnizeApply',
      redirect: '/orgnizeApply/organizeUse',
      component: (resolve) => {
        require(['@/page/work/orgnizeApply'], resolve)
      },
      children: [
        {
          path: 'organizeUse',
          component: (resolve) => {
            require(['@/page/work/useApply'], resolve)
          }
        },
        {
          path: 'personalUse',
          component: (resolve) => {
            require(['@/page/work/useApply'], resolve)
          }
        }
      ]
    },
    {
      path: '/personalApply',  // 个人应用
      name: 'personalApply',
      component: (resolve) => {
        require(['@/page/work/personalApply'], resolve)
      }
    },
    //  任务与计划
    {
      path: '/taskList',  //  任务列表
      name: 'taskList',
      redirect: '/taskList/taskItem',
      component: (resolve) => {
        require(['@/page/work/taskList'], resolve)
      },
      children: [
        {
          path: 'taskItem',   // 任务列表项
          component: (resolve) => {
            require(['@/page/work/taskItem'], resolve)
          }
        }
      ]
    },
    {
      path: '/createTask',  // 新建任务
      name: 'createTask',
      meta: { keepAlive: true },
      component: (resolve) => {
        require(['@/page/work/createTask'], resolve)
      }
    },
    {
      path: '/addMember',  // 添加人员
      name: 'addMember',
      component: (resolve) => {
        require(['@/page/work/addMember'], resolve)
      }
    },
    {
      path: '/planList',  // 计划列表
      name: 'planList',
      component: (resolve) => {
        require(['@/page/work/planList'], resolve)
      }
    },
    {
      path: '/createPlan',  // 新建计划
      name: 'createPlan',
      component: (resolve) => {
        require(['@/page/work/createPlan'], resolve)
      }
    },
    {
      path: '/planDetail',  // 计划详情
      name: 'planDetail',
      component: (resolve) => {
        require(['@/page/work/planDetail'], resolve)
      }
    },
    {
      path: '/taskDetail',  // 计划详情
      name: 'taskDetail',
      component: (resolve) => {
        require(['@/page/work/taskDetail'], resolve)
      }
    },
    {
      path: '/attachmentList',  // 附件列表
      name: 'attachmentList',
      component: (resolve) => {
        require(['@/page/work/attachmentList'], resolve)
      }
    },
    {
      path: '/aboutTask',  // 任务相关人员
      name: 'aboutTask',
      component: (resolve) => {
        require(['@/page/work/aboutTask'], resolve)
      }
    },
    {
      path: '/chooseMember',  // 选择各role人员以及移交任务组件
      component: (resolve) => {
        require(['@/page/work/chooseMember'], resolve)
      }
    },
    {
      path: '/logIn',  // 登录
      name: 'logIn',
      component: (resolve) => {
        require(['@/page/login/logIn'], resolve)
      }
    },
    {
      path: '/registry/:type',  // 注册
      name: 'registry',
      component: (resolve) => {
        require(['@/page/login/registry'], resolve)
      }
    },
    {
      path: '/sureRegistry',  // 确认注册
      name: 'sureRegistry',
      component: (resolve) => {
        require(['@/page/login/sureRegistry'], resolve)
      }
    },
    {
      path: '/forgetPassword',  // 忘记密码
      name: 'forgetPassword',
      component: (resolve) => {
        require(['@/page/login/forgetPassword'], resolve)
      }
    },
    {
      path: '/registrySuccess',  // 注册成功
      name: 'registrySuccess',
      component: (resolve) => {
        require(['@/page/login/registrySuccess'], resolve)
      }
    },
    {
      path: '/personnelTask',  // 个人应用
      redirect: '/personnelTask/taskManage',
      component: (resolve) => {
        require(['@/page/task/personnelTask'], resolve)
      },
      children: [
        {
          path: 'taskManage',  // 应用管理
          component: (resolve) => {
            require(['@/page/task/taskManage'], resolve)
          }
        }
      ]
    },
    // 我的页面
    {
      path: '/mine',  // 我的
      component: (resolve) => {
        require(['@/page/mine/mine'], resolve)
      }
    },
    {
      path: '/myOrganize',  // 我的组织
      name: 'myOrganize',
      component: (resolve) => {
        require(['@/page/mine/myOrganize'], resolve)
      }
    },
    {
      path: '/myOptionalOrganize/:id',  // 我所在的组织
      name: 'myOptionalOrganize',
      component: (resolve) => {
        require(['@/page/mine/myOptionalOrganize'], resolve)
      }
    },
    {
      path: '/createOrganize',  // 创建组织
      name: 'createOrganize',
      component: (resolve) => {
        require(['@/page/mine/createOrganize'], resolve)
      }
    },
    {
      path: '/authentication/:type/:paramList',  // 组织认证
      name: 'authentication',
      component: (resolve) => {
        require(['@/page/mine/authentication'], resolve)
      }
    },
    {
      path: '/organizeInfo/:id',  // 组织信息
      name: 'organizeInfo',
      component: (resolve) => {
        require(['@/page/mine/organizeInfo'], resolve)
      }
    },
    {
      path: '/personnelInfo',  // 个人信息
      name: 'personnelInfo',
      component: (resolve) => {
        require(['@/page/mine/personnelInfo'], resolve)
      }
    },
    {
      path: '/orderList',  // 我的订单
      redirect: '/orderList/orderItem',
      name: 'orderList',
      component: (resolve) => {
        require(['@/page/mine/orderList'], resolve)
      },
      children: [
        {
          path: 'orderItem',
          component: (resolve) => {
            require(['@/page/mine/orderItem'], resolve)
          }
        }
      ]
    },
    {
      path: '/setUp',  // 设置
      name: 'setUp',
      component: (resolve) => {
        require(['@/page/mine/setUp'], resolve)
      }
    },
    {
      path: '/countSafe',  // 账户安全
      name: 'countSafe',
      component: (resolve) => {
        require(['@/page/mine/countSafe'], resolve)
      }
    },
    {
      path: '/inputInfo/:setType/:setInfo',  // 设置手机号，密码，邮箱
      // path: '/inputInfo',  // 设置手机号，密码，邮箱
      name: 'inputInfo',
      component: (resolve) => {
        require(['@/page/mine/inputInfo'], resolve)
      }
    },
    {
      path: '/feedback',  // 帮助与反馈
      name: 'feedback',
      component: (resolve) => {
        require(['@/page/mine/feedback'], resolve)
      }
    },
    {
      path: '/baseFunction',  // 基本功能
      name: 'baseFunction',
      component: (resolve) => {
        require(['@/page/mine/baseFunction'], resolve)
      }
    },
    {
      path: '/operateDetail/:title',  // 操作详情
      name: 'operateDetail',
      component: (resolve) => {
        require(['@/page/mine/operateDetail'], resolve)
      }
    },
    {
      path: '/feedbackPage',  // 意见反馈页面
      name: 'feedbackPage',
      component: (resolve) => {
        require(['@/page/mine/feedbackPage'], resolve)
      }
    },
    {
      path: '/concatUs',  // 意见反馈页面
      name: 'concatUs',
      component: (resolve) => {
        require(['@/page/mine/concatUs'], resolve)
      }
    },
    // 应用
    {
      path: '/singleApply',   // 个人应用
      name: 'singleApply',
      redirect: '/singleApply/applyAdministration',
      component: (resolve) => {
        require(['@/page/apply/singleApply'], resolve)
      },
      children: [
        {
          path: 'applyAdministration',   // 应用管理
          name: 'applyAdministration',
          component: (resolve) => {
            require(['@/components/blockItem'], resolve)
          }
        },
        {
          path: 'applyStore',   // 应用商店
          name: 'applyStore',
          component: (resolve) => {
            require(['@/components/blockItem'], resolve)
          }
        },
        {
          path: 'applyUpdate',   // 应用升级
          name: 'applyUpdate',
          component: (resolve) => {
            require(['@/page/apply/applyUpdate'], resolve)
          }
        }
      ]
    },
    {
      path: '/payedApply',   // 已购应用
      name: 'payedApply',
      component: (resolve) => {
        require(['@/page/apply/payedApply'], resolve)
      }
    },
    {
      path: '/applyDetail',   // 应用详情
      name: 'applyDetail',
      component: (resolve) => {
        require(['@/page/apply/applyDetail'], resolve)
      }
    },
    {
      path: '/shoppingCart',   // 购物车
      name: 'shoppingCart',
      component: (resolve) => {
        require(['@/page/apply/shoppingCart'], resolve)
      }
    },
    {
      path: '/purchaseApply',   // 购物车
      name: 'purchaseApply',
      component: (resolve) => {
        require(['@/page/apply/purchaseApply'], resolve)
      }
    },
    {
      path: '/purchaseSuccess',   // 购买成功
      name: 'purchaseSuccess',
      component: (resolve) => {
        require(['@/page/apply/purchaseSuccess'], resolve)
      }
    },
    {
      path: '/othersPay',   // 找人代付
      name: 'othersPay',
      component: (resolve) => {
        require(['@/page/apply/othersPay'], resolve)
      }
    },
    {
      path: '/applyScreen',   // 应用搜索
      name: 'applyScreen',
      component: (resolve) => {
        require(['@/page/apply/applyScreen'], resolve)
      }
    }
  ]
})
