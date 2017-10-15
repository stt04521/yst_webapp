<template>
  <div class="list">
    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>

    <!--好友列表-->
    <group v-if="type == 'Friends'">
      <cell
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"
        v-longtap="{fn:onlongpress,name:'长按'}"
        data-id="1"
      >
        <div slot="title" data-id="1">
          好友
          <Popover ref="group1">
            <div slot="content">
              <p @click.stop="onJutmp('/GroupManagement')">分组管理</p>
              <hr>
              <p>姓氏排序</p>
            </div>
          </Popover>
        </div>
      </cell>
      <template v-if="showContent001">
          <cell data-id="2"  v-longtap="{fn:onItemLongpress,name:'长按'}" @click.native="onJutmp(`/ContactInfo/${type}`)">
            <div slot="title" data-id="2">
              General
              <Popover ref="group2" >
                <div slot="content">
                  <p @click.stop="onJutmp('/MobilePacket')">移动分组</p>
                  <hr>
                  <p @click.stop="onShowDele">删除好友</p>
                </div>
              </Popover>
            </div>
            <img slot="icon" width="40" style="display:block;padding-right:25px;" src="../../assets/news/userImg.jpg" data-id="2">
          </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
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
      <template v-if="showContent002">
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



    </group>

  </div>
</template>
<script>
  import { Cell, CellBox, CellFormPreview, Group, Badge, Actionsheet } from 'vux'
  import Popover from '@/components/popover.vue'
  import { longtap } from '@/directives/vue-touch'
  export default {
    name: 'applyShow',
    components: {
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge,
      Popover,
      Actionsheet
    },
    props: {
      type: String
    },
    directives: {
      longtap
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      onlongpress (e) {
        e.preventDefault()
        let id = e.target.getAttribute('data-id')
        this.$refs['group' + id].onShow(true)
      },
      onItemLongpress (e) {
        e.preventDefault()
        console.log(e.target)
        let id = e.target.getAttribute('data-id')
        this.$refs['group' + id].onShow(true)
      },
      onJutmp (url) {
        this.$router.push(url)
      },
      click (key) {
        console.log(key)
      },
      onDelete () {
        this.$vux.toast.show({
          type: 'success',
          text: '删除成功'
        })
      },
      onShowDele () {
        this.show3 = true
      }
    },
    data () {
      return {
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false,
        show3: false,
        menus3: {
          title: '<span style="color:#999999;font-size: 14px">您将与该好友接触好友关系</span>',
          delete: '<span style="color:red">确定删除</span>'
        }
      }
    }
  }
</script>
<style  lang="less">
  .list{
    .weui-cells{
      overflow: initial !important;
    }
  }

</style>
