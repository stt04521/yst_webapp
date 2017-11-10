<template>
  <div class="hello">
    <actionsheet v-model="show3" :menus="menus3"  @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <x-header
      title="群聊资料"
    >
      <span slot="right" style="font-size: 17px; color: #fff" @click="onJutmp({path:'/addMembers', query:{id: $route.query.id, userId: userId}})">
        添加人员
      </span>
      <span slot="overwrite-left" @click="goBack" class="header-left-title">＜返回</span>
    </x-header>
    <div class="member">
      <h2>本组织成员</h2>
      <Flexbox wrap="wrap" :gutter="0"  v-click-outside="onClickedOutside">
        <FlexboxItem :span="2" v-for="i in GroupList" :key="i.id" class="relative">
          <img :src="require('@/assets/close.svg')"  class="close" v-show="isClose" @click="delMembers(i.userId)">
          <img :src="require('@/assets/DefaultAvatar.svg') || i.personInfo.portrait"  class="img" v-longtap="{fn:onlongpress,name:'长按'}">
          <p>{{i.personInfo.realName}}</p>
        </FlexboxItem>
      </Flexbox>
      <!--<h2>武汉先天科技有限公司</h2>-->
      <!--<Flexbox wrap="wrap" :gutter="0" >-->
        <!--<FlexboxItem :span="2" v-for="i in 3" :key="i">-->
          <!--<img  src="../../assets/news/userImg.jpg"  >-->
          <!--<p>陈周</p>-->
        <!--</FlexboxItem>-->
      <!--</Flexbox>-->
      </div>
    <group >
      <cell title="群聊名称">
          <span style="color: black"> {{$route.query.name}}</span>
      </cell>
      <cell title="群二维码">
          <img  :src="require('@/assets/contacts/qcode.jpg')" width="20">
      </cell>
    </group>
    <group >
      <x-switch title="免打扰"></x-switch>
      <x-switch title="置顶群聊"></x-switch>
    </group>
    <div class="button_group">
      <x-button class="blue_bg" @click.native="onJutmp({path: `/newsPage/${$route.query.name}`, query: {id: $route.query.id, type: 1}})">发消息</x-button>
    </div>
  </div>

</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Cell, Group, XSwitch, XButton, Actionsheet } from 'vux'
  import { mapActions } from 'vuex'
  import { longtap } from '@/directives/vue-touch'
  import ClickOutside from '@/directives/click-outside'
  export default {
    name: 'hello',
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      Cell,
      Group,
      XSwitch,
      XButton,
      Actionsheet
    },
    directives: {
      longtap,
      ClickOutside
    },
    data () {
      return {
        isClose: false,
        GroupList: [],
        show3: false,
        request: {},
        userId: [],
        menus3: {
          title: '<span style="color:#999999;font-size: 14px">您将在群聊中删除该好友</span>',
          delete: '<span style="color:red">确定删除</span>'
        }
      }
    },
    created () {
      this.getGroupList(this.$route.query.id)
    },
    methods: {
      ...mapActions([
        'GetGroupInfo',
        'DelMembers'
      ]),
      onJutmp (url) {
        this.$router.push(url)
      },
      onClickedOutside () {
        this.isClose = false
      },
      getGroupList (id) {
        let self = this
        self.GetGroupInfo(id).then(res => {
          self.GroupList = res
          self.userId = res.map(item => {
            return item.userId
          })
        })
      },
      onlongpress () {
        let self = this
        self.isClose = true
      },
      onDelete () {
        let self = this
        self.DelMembers(self.request).then(res => {
          self.getGroupList(self.$route.query.id)
        })
      },
      delMembers (id) {
        let self = this
        self.show3 = true
        self.request = {
          groupId: self.$route.query.id,
          userId: id
        }
      },
      goBack () {
        this.$router.push({
          name: 'contacts',
          query: {
            index: 2
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  .member{
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    p{
      text-align: center;
    }
    .close{
      width: 20px;
      position: absolute;
      right: 0;
    }
    .img{
      width: 40px;
    }
    .vux-flexbox .vux-flexbox-item{
      text-align: center;
    }
  }
  .weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box{
    border-color:#118EE9!important;
    background-color: #118EE9!important;
  }
  .button_group{
    padding: 0 10px;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    bottom: 0;
    .blue_bg{
      background-color: #008EE5;
      color: white;
      margin-bottom: 10px;
    }
  }
</style>
