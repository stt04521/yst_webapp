<template>
  <div class="list">
    <div v-transfer-dom>
      <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    </div>
    <!--好友列表-->
    <group v-if="type == 'Friends'" >
      <div v-for="item,index in list" :key="item.id">
        <cell
          is-link
          :border-intent="false"
          :arrow-direction="item.showContent ? 'up' : 'down'"
          @click.native="item.showContent = !item.showContent"
          v-longtap="{fn:onlongpress,name:'长按'}"
          :data-id="index"
        >
          <div slot="title" :data-id="index">
            {{item.name}}
            <Popover :ref="'group'+index">
              <div slot="content">
                <p @click.stop="onJutmp('/GroupManagement')">分组管理</p>
                <hr>
                <p>姓氏排序</p>
              </div>
            </Popover>
          </div>
        </cell>
        <template v-if="item.showContent">
          <template v-for="item1,index1 in item.friend" >
            <!--好友列表-->
            <cell :data-id="index1"  v-longtap="{fn:onItemLongpress,name:'长按'}" @click.native.stop="onJutmp(`/ContactInfo/${type}`)" v-if="!select && item1.personInfo">
              <div slot="title" :data-id="index1" >
                {{item1.personInfo.realName}}
                <Popover :ref="'groupItem'+index1" >
                  <div slot="content">
                    <p @click.stop="onJutmp({path: '/MobilePacket', query:{id: item1.personInfo.userId}})">移动分组</p>
                    <hr>
                    <p @click.stop="onShowDele(item1.personInfo.userId)">删除好友</p>
                  </div>
                </Popover>
              </div>
              <img slot="icon" class="icon" :src="item1.personInfo.portrait" :data-id="index1" >
            </cell>
            <!--选择联系人-->
            <checklist  label-position="left" required :options="radio003" v-model="checklist001" v-if="select == 'true' && item1.personInfo">
              <img slot="icon" class="icon" :src="item1.personInfo.portrait">
            </checklist>
            <!--没有好友-->
            <cell v-if="!item1.personInfo" title="此分组为空"></cell>
          </template>
        </template>
      </div>
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

  </div>
</template>
<script>
  import { Cell, CellBox, CellFormPreview, Group, Badge, Actionsheet, Checklist, TransferDom } from 'vux'
  import Popover from '@/components/popover.vue'
  import { longtap } from '@/directives/vue-touch'
  import {mapActions} from 'vuex'
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
      Checklist
    },
    props: {
      type: String,
      select: String,
      list: Array
    },
    directives: {
      longtap,
      TransferDom
    },
    mounted () {

    },
    computed: {
    },
    methods: {
      ...mapActions([
        'FriendDelFriend'
      ]),
      onlongpress (e) {
        e.preventDefault()
        let id = e.target.getAttribute('data-id')
        let attr = 'group' + id
        this.$refs[attr][0].onShow(true)
      },
      onItemLongpress (e) {
        e.preventDefault()
        console.log(e.target)
        let id = e.target.getAttribute('data-id')
        this.$refs['groupItem' + id][0].onShow(true)
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
        self.FriendDelFriend(self.delid).then(res => {
          self.$emit('refresh')
          self.$vux.toast.show({
            type: 'success',
            text: '删除成功'
          })
        })
      },
      onShowDele (id) {
        this.delid = id
        this.show3 = true
      }
    },
    data () {
      return {
        delid: '',
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false,
        checklist001: [],
        show3: false,
        menus3: {
          title: '<span style="color:#999999;font-size: 14px">您将与该好友接触好友关系</span>',
          delete: '<span style="color:red">确定删除</span>'
        },
        radio003: [{
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '001',
          value: 'radio001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '002',
          value: 'radio002'
        }],
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
  }

</style>
