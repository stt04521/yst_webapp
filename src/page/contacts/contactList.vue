<template>
  <div class="list" :style="{height: height+'px',overflow: select == 'true' ? 'inherit':'auto'}">
    <div v-transfer-dom>
      <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    </div>
    <!--好友列表-->
    <group v-if="type == 'Friends'" >
      <template v-for="(item, index) in list">
        <cell
          is-link
          :border-intent="false"
          :arrow-direction="item.showContent ? 'up' : 'down'"
          @click.native.stop="item.showContent = !item.showContent"
          v-longtap="{fn:onlongpress,name:'长按', params: {index}}"
          :data-id="index"
        >
          <div slot="title" :data-id="index">
            {{item.name}}
            <tool-tip v-show="index === toolTipShowIndex"
                      :list="managerList"
                      @item-click="operateGroup"
                      @hide-tooltip="hideToolTip"></tool-tip>
            <!--<div class="pop-background" @click="hidePopove"></div>-->
            <!--<Popover :ref="'group'+index">-->
              <!--<div slot="content">-->
                <!--<p @click.stop="onJutmp('/GroupManagement')">分组管理</p>-->
                <!--<hr>-->
                <!--<p>姓氏排序</p>-->
              <!--</div>-->
            <!--</Popover>-->
          </div>
        </cell>
        <template v-if="item.showContent">
          <template v-for="(item1, index1) in item.friend" >
            <!--好友列表-->
            <cell :data-id="index1"  v-longtap="{fn:onItemLongpress,name:'长按', params: {item1, index1}}" @click.native.stop="onJutmp({path: `/ContactInfo/${type}`, query: {id: item1.personInfo.userId}})" v-if="!select && item1.personInfo">
              <div slot="title" :data-id="index1" >
                {{item1.personInfo.realName}}
                <tool-tip v-show="item1.friendGroupId + index1 === toolTipItemShowIndex"
                          :list="operateList"
                          @item-click="operateFriend"
                          @hide-tooltip="hideTooltip"></tool-tip>
                <!--<Popover :ref="'groupItem'+index1" >-->
                  <!--<div slot="content">-->
                    <!--<p @click.stop="onJutmp({path: '/MobilePacket', query:{id: item1.personInfo.userId}})">移动分组</p>-->
                    <!--<hr>-->
                    <!--<p @click.stop="onShowDele(item1.personInfo.userId)">删除好友</p>-->
                  <!--</div>-->
                <!--</Popover>-->
              </div>
              <img slot="icon" class="icon" :src="baseurl + item1.personInfo.portrait" :data-id="index1" :onerror="errorImg">
            </cell>
            <!--没有好友-->
            <cell v-if="!item1.personInfo" title="此分组为空"></cell>
          </template>
          <!--选择联系人-->
          <radio-component :radioType="'mulRadio'" :result.sync="result" :dataList="item.friend, userId| structure" v-if="select == 'true'&& !Array.isArray(item.friend[0])"></radio-component>
        </template>
      </template>
    </group>

    <!--同事列表-->
    <group v-if="type == 'Colleague'">
      <cell
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"
        title="部门"
      >
      </cell>
      <template v-if="showContent002 && !select">
        <cell
          is-link
          :border-intent="false"
          :arrow-direction="showContent003 ? 'up' : 'down'"
          @click.native="showContent003 = !showContent003"
          title="次部分"
        >
        </cell>
        <template v-if="showContent003">
          <router-link :to="`/ContactInfo/${type}`">
            <cell>
              <span slot="title">General</span>
              <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
            </cell>
          </router-link>
        </template>
      </template>

      <template v-if="showContent002 && select == 'true'">
        <cell
          is-link
          :border-intent="false"
          :arrow-direction="showContent003 ? 'up' : 'down'"
          @click.native="showContent003 = !showContent003"
          title="次部分"
        >
        </cell>
        <template v-if="showContent003">
            <cell>
              <span slot="title">General</span>
              <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
            </cell>
        </template>

      </template>
    </group>
    <!--群组列表-->
    <group v-if="type == 'GroupChat'" >
      <div v-for="item,index in list" :key="item.index">
        <cell
          is-link
          :title="item.name"
          :border-intent="false"
          :arrow-direction="item.showContent ? 'up' : 'down'"
          @click.native="item.showContent = !item.showContent"
          :data-id="index"
        >
        </cell>
        <div v-show="item.showContent">
          <template v-for="item1,index1 in item.value" >
            <!--群组列表-->
            <cell :data-id="index1"  v-longtap="{fn:onItemLongpress,name:'长按'}" @click.native.stop="onJutmp({path: '/GroupChatData',query:{id: item1.id, name: item1.name}})" v-if="!select">
              <div slot="title" :data-id="index1" >
                {{item1.name}}
                <Popover :ref="'groupItem'+index1" >
                  <div slot="content">
                    <p @click.stop="onShowDele(item1.id)">退出群聊</p>
                  </div>
                </Popover>
              </div>
              <div class="img" slot="icon"></div>
              <!--<img slot="icon" class="icon" src="" :data-id="index1" >-->
            </cell>
          </template>
        </div>
      </div>
    </group>
  </div>
</template>
<script>
  import { Cell, CellBox, CellFormPreview, Group, Badge, Actionsheet, Checklist, TransferDom } from 'vux'
  import Popover from '@/components/popover.vue'
  import toolTip from '@/components/toolTip.vue'
  import { longtap } from '@/directives/vue-touch'
  import radioComponent from '@/components/radioComponent'
  import { mapActions } from 'vuex'
  export default {
    name: 'applyShow',
    components: {
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge,
      Popover,
      Actionsheet,
      Checklist,
      radioComponent,
      toolTip
    },
    props: {
      type: String,
      select: String,
      list: Array,
      userId: Array,
      result: Object
    },
    directives: {
      longtap,
      TransferDom
    },
    mounted () {
      this.height = document.documentElement.clientHeight - 189
    },
    computed: {
    },
    methods: {
      ...mapActions([
        'FriendDelFriend',
        'DelGroupMembers'
      ]),
      onlongpress (e, val) {
        e.preventDefault()
        this.toolTipShowIndex = val.params.index
//        let id = e.target.getAttribute('data-id')
//        let attr = 'group' + id
//        this.$refs[attr][0].onShow(true)
      },
      onItemLongpress (e, val) {
        e.preventDefault()
        this.toolTipItemShowIndex = val.params.item1.friendGroupId + val.params.index1
        this.currentItem = val.params.item1
      },
      onJutmp (url) {
        this.$router.push(url)
      },
      click (key) {
        console.log(key)
      },
      // 删除好友
      onDelete () {
        let self = this
        let delFun = self.type !== 'GroupChat' ? self.FriendDelFriend : self.DelGroupMembers
        delFun(self.delid).then(res => {
          self.$emit('refresh')
          self.$vux.toast.show({
            type: 'success',
            text: self.type !== 'GroupChat' ? '删除成功' : '退出成功'
          })
        })
      },
      onShowDele (id) {
        this.delid = id
        this.show3 = true
        if (this.type !== 'GroupChat') {
          this.menus3 = {
            title: '<span style="color:#999999;font-size: 14px">您将与该好友接触好友关系</span>',
            delete: '<span style="color:red">确定删除</span>'
          }
        } else {
          this.menus3 = {
            title: '<span style="color:#999999;font-size: 14px">你将退出该群聊</span>',
            delete: '<span style="color:red">确定</span>'
          }
        }
      },
      hidePopove () {
        console.log('111')
      },
      // 隐藏tooltip
      hideToolTip () {
        this.toolTipShowIndex = null
      },
      operateGroup (item) {
        switch (item.key) {
          case 'GROUP_MANAGEMENT':
            this.onJutmp('/GroupManagement')
            break
          case 'SORT_FIRST_NAME':
            console.log('SORT_FIRST_NAME')
            break
          default:
            break
        }
      },
      operateFriend (item) {
        switch (item.key) {
          case 'MOVE_TO_OTHER_GROUP':
            this.$router.push({path: '/MobilePacket', query: {id: this.currentItem.personInfo.userId}})
            break
          case 'DELETE_FRIEND':
            this.onShowDele(this.currentItem.personInfo.userId)
            break
          default:
            break
        }
      },
      hideTooltip () {
        this.toolTipItemShowIndex = null
      }
    },
    filters: {
      structure (data, userId) {
        if (userId) {
          let arr = data.filter(item => { return userId.indexOf(item.personInfo.userId) === -1 })
          return arr.map(item => { return item.personInfo })
        } else {
          return data.map(item => { return item.personInfo })
        }
      }
    },
    data () {
      return {
        toolTipItemShowIndex: null,
        toolTipShowIndex: null,
        currentItem: null,
        managerList: [{title: '分组管理', key: 'GROUP_MANAGEMENT'}, {title: '姓氏排序', key: 'SORT_FIRST_NAME'}],
        operateList: [{title: '移动分组', key: 'MOVE_TO_OTHER_GROUP'}, {title: '删除好友', key: 'DELETE_FRIEND'}],
        baseurl: 'http://192.168.0.12:7000',
        delid: '',
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false,
        show3: false,
        menus3: {},
        errorImg: 'this.src="' + require('@/assets/DefaultAvatar.svg') + '"',
        checkList: [
        ],
        height: 0,
        commonList: [ 'China', 'Japan', 'America' ]
      }
    }
  }
</script>
<style  lang="less">
  .list{
    .weui-cells{
      overflow: initial !important;
    }
    .icon{
      width: 40px;
      display: block;
      padding-right: 25px;
    }
    .img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 30px;
      background: deepskyblue;
    }
  }
</style>
