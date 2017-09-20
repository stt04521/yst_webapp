<template>
  <div style="height:100%;">
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
      :drawer-style="{'background-color':'#624B4B', width: '200px'}"
    >
      <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo(beta)" style="margin-top:20px;">
          <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
          </cell>
          <cell title="Buy me a coffee" link="project/donate" @click.native="drawerVisibility = false">
          </cell>
          <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
          </cell>
        </group>
        <group title="showMode">
          <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
        </group>
        <group title="placement">
          <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
        </group>
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
          <span v-if="route.path === '/' || route.path === '/news'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
        </x-header>
        <transition
          @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
          :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view class="router-view"></router-view>
        </transition>

        <tabbar class="vux-demo-tabbar" id="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
          <tabbar-item :link="{path:'/news'}" :selected="route.path === '/news'" badge="99+">
            <!--<span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>-->
            <img slot="icon" src="../assets/news_ns.png">
            <img slot="icon-active" src="../assets/news.png">
            <span slot="label">Home</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/work'}" :selected="route.path === '/work'" >
            <img slot="icon" src="../assets/work_ns.png">
            <img slot="icon-active" src="../assets/work.png">
            <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>Demos</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'/contacts'}" :selected="route.path === '/contacts'" show-dot badge="New">
            <img slot="icon" src="../assets/contacts_ns.png">
            <img slot="icon-active" src="../assets/contacts.png">
          <span slot="label">Donate</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/schedule'}" :selected="route.path === '/schedule'" show-dot>
            <img slot="icon" src="../assets/schedule_ns.png">
            <img slot="icon-active" src="../assets/schedule.png">
            <span slot="label">Donate</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>

<script>
  import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
  import { mapState, mapActions } from 'vuex'
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
      Actionsheet
    },
    data () {
      return {
        showMenu: false,
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
        msg: 'Hello World!'
      }
    },
    methods: {
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
      ...mapActions([
        'updateDemoPosition'
      ])
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
        return {
          showBack: this.route.path !== '/'
        }
      },
      rightOptions () {
        return {
          showMore: true
        }
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
        if (this.route.path === '/news') return '个人信息'
        if (this.route.path === '/project/donate') return 'Donate'
        if (this.route.path === '/demo') return 'Demo list'
        return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
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
    top: 46px;
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
</style>
