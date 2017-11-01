<!--对于责任人等各个角色渲染部分，首先必须五个都显示，然后根据选择显示value-->
<template>
  <div class="create-task-wrapper">
    <x-header title="新建任务" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="create">创建</span>
    </x-header>
    <view-box class="content-container">
      <group :gutter="0">
        <x-textarea :max="1000" placeholder="请输入任务内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group :gutter="0" style="margin-top: 10px;">
        <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="endTimeChange" :start-date="beginTime" title="截止时间"></datetime>
      </group>
      <!--<group>-->
        <!--<cell v-for="(item, index) in relatedList"-->
              <!--:key="index"-->
              <!--:title="item.title"-->
              <!--is-link-->
              <!--@click.native="choosePlays"-->
        <!--&gt;-->
          <!--<div slot="value" class="value-container" v-show="item.list.length">-->
            <!--&lt;!&ndash;根据角色判断，暂时使用title判断&ndash;&gt;-->
            <!--<div v-for="(ite, idx) in item.list.slice(0,5)" class="avatar">-->
              <!--<img :src="ite.avatar" alt="">-->
            <!--</div>-->
            <!--<span>{{item.title === '责任人' ? item.list[0].name : (item.list.length+1)+'人'}}</span>-->
          <!--</div>-->
        <!--</cell>-->
      <!--</group>-->
      <group :gutter="0" style="margin-top: 10px;">
        <cell title="责任人" is-link @click.native="choosePlays('principal')">
          <div v-show="principalList.length">
            <!--<img :src="principalList.img" alt="">-->
            <!--<span>{{ principalList.name }}</span>-->
            <img src="../../assets/news/userImg.jpg" class="play-avatar" alt="">
            <span>呜呜呜呜呜</span>
          </div>
        </cell>
        <cell title="执行者" is-link @click.native="choosePlays('executor')">
          <div v-show="executorList.length">
            <img src="../../assets/news/userImg.jpg" v-for="(item, index) in 7" class="play-avatar" alt="">
            <span>7人</span>
          </div>
        </cell>
        <cell title="审核者" is-link @click.native="choosePlays('checker')">
          <div v-show="checkerList.length">
            <img src="../../assets/news/userImg.jpg" v-for="(item, index) in 7" class="play-avatar" alt="">
            <span>7人</span>
          </div>
        </cell>
        <cell title="参与者" is-link @click.native="choosePlays('participant')">
          <div v-show="participantList.length">
            <img src="../../assets/news/userImg.jpg" v-for="(item, index) in 7" class="play-avatar" alt="">
            <span>7人</span>
          </div>
        </cell>
      </group>
    </view-box>
  </div>
</template>
<script>
  import {XHeader, ViewBox, XTextarea, Group, Datetime, Cell} from 'vux'
  export default {
    name: 'createTask',
    components: {
      XHeader,
      ViewBox,
      XTextarea,
      Group,
      Datetime,
      Cell
    },
    data () {
      return {
        playRole: '',
        role: '',
        beginTime: '2017-01-01',
        principalList: [],  // 责任人
        executorList: [],   // 执行者
        checkerList: [],    // 审核者
        participantList: [],  // 参与者
        relatedList: [
          {
            title: '责任人',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          },
          {
            title: '执行者',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          },
          {
            title: '审核者',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          },
          {
            title: '参与者',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          }
        ]
      }
    },
    methods: {
      cancel () {
        console.log('cancel')
        this.$router.go(-1)
      },
      create () {
        console.log('create')
        this.$router.push({
          name: 'taskList'
        })
        this.principalList = []
        this.executorList = []
      },
      onEvent (event) {
        console.log('on', event)
      },
      startTimeChange (val) {
        // 任务开始时间 截止时间的startDate设置为开始时间
        this.startTime = val
        this.beginTime = this.startTime.split(' ')[0]
      },
      endTimeChange (val) {
        this.endTime = val
      },
      choosePlays (val) {
        console.log('11')
        this.$router.push({
          name: 'addMember',
          query: {
            typeRadio: 'mulRadio',
            role: val
          }
        })
      }
    },
    watch: {
      $route () {
        if (this.$route && this.$route.query) {
          this.role = this.$route.query.role
          let result = this.$route.query.result
          if (this.role === 'principal') {
            this.principalList = result
            console.log('this.principalList: ', this.principalList)
          }
          if (this.role === 'executor') {
            this.executorList = result
            console.log('this.executorList: ', this.executorList)
          }
          if (this.role === 'checker') {
            this.checkerList = result
          }
          if (this.role === 'participant') {
            this.principalList = result
          }
        }
      }
    },
    created () {
      this.playRole = this.$route.query.role
      console.log('create: ', this.$route)
//      let result = this.$route.query.result
//      if (this.role === 'principal') {
//        this.principalList = result
//      }
//      if (this.role === 'executor') {
//        this.executorList = result
//      }
//      if (this.role === 'checker') {
//        this.checkerList = result
//      }
//      if (this.role === 'participant') {
//        this.principalList = result
//      }
    },
    beforeRouteEnter (to, from, next) {
      if (from.path === '/taskList/taskItem') {
        to.meta.keepAlive = false
      }
      console.log('to1: ', to)
      console.log('from1: ', from)
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('from: ', from)
      console.log('to: ', to)
//      next()
      if (to.path === '/addMember') {
        from.meta.keepAlive = true
      }
      if (to.path === '/taskList/taskItem' || from.path === '/taskList/taskItem') {
        to.meta.keepAlive = false
      }
      next()
    }
  }
</script>
<style scoped lang="less">
  .create-task-wrapper{
    height: 100%;
    overflow: hidden;
    .header span {
      color: #fff;
      font-size: 16px;
    }
    .content-container {
      height: 100%;
      .play-avatar {
        width: 26px;
        height: 26px;
        vertical-align: middle;
        margin-right: 5px;
      }
      .value-container{
        .avatar{
          display: inline-block;
          img{
            width: 26px;
            height: 26px;
          }
        }
        span{
          vertical-align: top;
        }
      }

    }
  }
</style>

