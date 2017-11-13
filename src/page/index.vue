<template>
  <div style="height:100%;" >
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu" ></actionsheet>
    </div>
    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#35495e', width: '248px'}"
    >
      <!-- drawer content -->
      <div slot="drawer">
        <mine></mine>
      </div>

      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <x-header slot="header"
                  style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                  :left-options="leftOptions"
                  :right-options="rightOptions"
                  :title="title"
                  :transition="headerTransition"
                  @on-click-more="onClickMore">
          <span  slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
          <div v-if="route.path === '/contacts'" slot="right" style="font-size: 24px; color: #fff; position: relative" @click="showPopover" id="top">
            <i class="icon-jia-b iconfont" style="font-size: 18px"></i>
            <Popover ref="group1">
              <div slot="content" class="">
                <p @click="onJutmp('/SearchBuddy/addFriends')"><i class="iconfont icon-yaoqing pop-icon"></i>添加好友</p>
                <hr>
                <p @click="onJutmp('/CreateGroupChat')"><i class="iconfont icon-liaotian pop-icon"></i>创建群聊</p>
                <hr>
                <p><i class="iconfont icon-scan pop-icon"></i>扫一扫</p>
              </div>
            </Popover>
          </div>
          <!--<div v-if="route.path === '/news'" slot="right" class="right-toggle" @click="toggleOrganize">-->
            <!--<span class="title">切换</span>-->
            <!--<span class="arrow" :class="isShowOrganizeList ? 'top' : 'bottom'"></span>-->
            <!--<selection-list :top="45"  @toggle-model-show="toggleOrganizeBg" @change-item="toggleOrganizeItem" :showModel="isShowOrganizeList"></selection-list>-->
          <!--</div>-->
          <div v-show="route.path !== '/contacts' && route.path !== '/schedule/showNote'" slot="right" class="right-toggle" @click="toggleModelShow">
            <span class="title">切换</span>
            <span class="arrow" :class="isShowOrganizeList ? 'top' : 'bottom'"></span>
            <selection-list :top="45" :dataList="selectionList" @toggle-model-show="changeModelShow" @change-item="changeOrganize" :showModel="showModel"></selection-list>
          </div>
        </x-header>
        <transition
          @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
          :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
          <router-view class="router-view"></router-view>
        </transition>

        <tabbar class="vux-demo-tabbar" id="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
          <tabbar-item :link="{path:'/news'}" :selected="route.path === '/news'" badge="99+">
            <!--<span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>-->
            <i class="iconfont icon-xiaoxi1" slot="icon"></i>
            <i class="iconfont icon-xiaoxi" slot="icon-active"></i>
            <span slot="label">消息</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/work'}" :selected="route.path.indexOf('work') > -1" >
            <i class="iconfont icon-jishiben" slot="icon"></i>
            <i class="iconfont icon-work-copy" slot="icon-active"></i>
            <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>工作</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'/contacts'}" :selected="route.path === '/contacts'" show-dot badge="New">
            <i class="iconfont icon-lianxiren" slot="icon"></i>
            <i class="iconfont icon-geren" slot="icon-active"></i>
          <span slot="label">联系人</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/schedule'}" :selected="route.path.indexOf('schedule') > -1" show-dot>
            <i class="iconfont icon-calendar1" slot="icon"></i>
            <i class="iconfont icon-calendar" slot="icon-active"></i>
            <span slot="label">日程</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>

<script>
  import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
  import mine from './mine/mine'
  import { mapState, mapActions } from 'vuex'
  import Popover from '@/components/popover.vue'
  import selectionList from '../components/selectionList'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Radio,
      Group,
      Cell,
      Badge,
      Drawer,
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Loading,
      Actionsheet,
      mine,
      Popover,
      selectionList
    },
    data () {
      return {
        isShowOrganizeList: false,
        showMenu: false,
        showModel: false,
        menus: {
          'language.noop': '<span class="menu-title">Language</span>',
          'zh-CN': '中文',
          'en': 'English'
        },
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left',
        msg: 'Hello World!',
        selectionList: []
      }
    },
    async created () {
      let res = await this.getMyInfoAction()
      this.selectionList = res.organizeId.concat({organizeName: '全部', key: 'all'})
    },
    methods: {
      ...mapActions([
        'updateDemoPosition',
        'FriendGetGroup',
        'getMyInfoAction'
      ]),
      onShowModeChange (val) {
        /** hide drawer before changing showMode **/
        this.drawerVisibility = false
        setTimeout(one => {
          this.showModeValue = val
        }, 400)
      },
      onPlacementChange (val) {
        /** hide drawer before changing position **/
        this.drawerVisibility = false
        setTimeout(one => {
          this.showPlacementValue = val
        }, 400)
      },
      onClickMore () {
        this.showMenu = true
      },
      showPopover () {
        console.log(this.$refs['group1'])
        this.$refs['group1'].onShow()
      },
//      createSchedule () {
//        console.log('create schedule')
//      },
      addSchedule () {
        // 点击添加日程跳转到添加日程页面
        let info = {}
        this.$router.push({
          name: 'createSchedule',
          param: info
        })
      },
      addNote () {
        // 点击添加笔记跳转到添加笔记页面
        this.$router.push({
          name: 'createNote'
        })
      },
      toggleModelShow () {
        this.showModel = !this.showModel
      },
      changeModelShow () {
        this.showModel = true
      },
      changeOrganize (item) {
        this.$store.commit('SET_OVER_ALL_TITLE', item)
      },
      onJutmp (url) {
        this.$router.push(url)
      },
      toggleOrganize () {
        this.isShowOrganizeList = !this.isShowOrganizeList
      },
      toggleOrganizeBg () {
        this.isShowOrganizeList = true
      },
      toggleOrganizeItem (item) {
        // 切换组织，通知当前页面和其他页面更新
        console.log(item)
        this.messageTitle = item.value
      }
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        deviceready: state => state.app.deviceready,
        demoTop: state => state.vux.demoScrollTop,
        isLoading: state => state.vux.isLoading,
        direction: state => state.vux.direction
      }),
      isShowBar () {
        if (/component/.test(this.path)) {
          return true
        }
        return false
      },
      leftOptions () {
//        if (this.route.path === '/showCalender') {
//          return {showBack: true}
//        } else {
//          return {
//            showBack: false
//          }
//        }
        return {
          showBack: this.route.path !== '/'
        }
      },
      rightOptions () {
        // if (this.route.path === '/createSchedule') return { showMore: false }
        if (this.route.path === '/') return { showMore: true }
      },
      headerTransition () {
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
      componentName () {
        if (this.route.path) {
          const parts = this.route.path.split('/')
          if (/component/.test(this.route.path) && parts[2]) return parts[2]
        }
      },
      isDemo () {
        return /component|demo/.test(this.route.path)
      },
      isTabbarDemo () {
        return /tabbar/.test(this.route.path)
      },
      title () {
        if (this.route.path === '/news') return this.$store.state.user.overAllStatus.organizeName + '消息'
        if (this.route.path === '/schedule/showSchedule') return this.$store.state.user.overAllStatus.organizeName + '日程'
        if (this.route.path === '/schedule/showNote') return '记事本'
        if (this.route.path === '/work') {
          return this.$store.state.user.overAllStatus.organizeName + '应用'
        }
        if (this.route.path === '/demo') return 'Demo list'
        return this.componentName ? `Demo/${this.componentName}` : '联系人'
      }
    }
  }
</script>

<style lang="less">
  @import '../styles/changeVux.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
  body {
    background-color: #fbf9fe;
  }

  .demo-icon-22 {
    font-family: 'vux-demo';
    font-size: 22px;
    color: #888;
  }
  .weui-tabbar.vux-demo-tabbar {
    /** backdrop-filter: blur(10px);
    background-color: none;
    background: rgba(247, 247, 250, 0.5);**/
  }
  .vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
    color: #F70968;

  }
  .vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
    color: rgb(53, 73, 94);
  }
  .demo-icon-22:before {
    content: attr(icon);
    font-size: 48px;
  }
  .vux-demo-tabbar-component {
    background-color: #F70968;
    color: #fff;
    border-radius: 7px;
    padding: 0 4px;
    line-height: 14px;
  }
  .weui-tabbar__icon + .weui-tabbar__label {
    margin-top: 0!important;
  }
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  @font-face {
    font-family: 'vux-demo';  /* project id 70323 */
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
  }

  .demo-icon {
    font-family: 'vux-demo';
    font-size: 20px;
    color: #04BE02;
  }

  .demo-icon-big {
    font-size: 28px;
  }

  .demo-icon:before {
    content: attr(icon);
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: #008EE5!important;
  }
  .router-view {
    width: 100%;
    top: 46px;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46PX;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .menu-title {
    color: #888;
  }
  #top{
    .vux-popover{
      position: absolute;
      width: 85px;
      left: 0%;
      top: 0.8rem;
      right: -7px;
      background-color: #EFEFF4;
      color: #333333;
      -webkit-transform: translateX(-78%);
      transform: translateX(-78%);
      border-radius: 3PX;
      z-index: 500;
      padding: 0.26667rem;
      .vux-popover-arrow-up{
        left: 85%;
        border-bottom: 5PX solid #EFEFF4;
      }
      img{
        height: 14px;
        margin: 0 3px;
      }
    }
  }
  // 联系人头部弹出框样式
  .pop-icon {
    display: inline-block;
    margin-right: 5px;
  }
  // 头部自定义返回样式
  .header-left-title {
    color: #fff;
    font-size: 15px;
  }

</style>
