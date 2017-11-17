<!--对于责任人等各个角色渲染部分，首先必须五个都显示，然后根据选择显示value-->
<template>
  <div class="create-task-wrapper">
    <x-header title="新建任务" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="create">创建</span>
    </x-header>
    <view-box class="content-container">
      <group :gutter="0">
        <x-textarea :max="1000" v-model="content" placeholder="请输入任务内容(必填)" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group :gutter="0" style="margin-top: 10px;">
        <datetime format="YYYY-MM-DD HH:mm" v-model="startTime" @on-change="startTimeChange" title="开始时间"></datetime>
        <datetime format="YYYY-MM-DD HH:mm" v-model="endTime" @on-change="endTimeChange" :start-date="beginTime" title="截止时间"></datetime>
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
        <cell title="责任人" is-link @click.native="choosePlays('PRINCIPAL')">
          <div v-if="$store.state.task.principalList.length" v-for="(item, index) in $store.state.task.principalList" :key="index">
            <img :src="baseurl + item.portrait" class="play-avatar">
            <span>{{ item.userId === myInfo.userId ? '我' : item.realName }}</span>
          </div>
        </cell>
        <cell title="执行者" is-link @click.native="choosePlays('EXECUTOR')">
          <div v-if="$store.state.task.executorList.length">
            <img :src="baseurl + item.portrait" v-for="(item, index) in $store.state.task.executorList" :key="index" class="play-avatar">
            <span>{{ $store.state.task.executorList.length }}人</span>
          </div>
          <div v-else>必填</div>
        </cell>
        <cell title="审核者" placeholder="必填" is-link @click.native="choosePlays('CHECKER')">
          <div v-if="$store.state.task.checkerList.length">
            <img :src="baseurl + item.portrait" v-for="(item, index) in $store.state.task.checkerList" :key="index" class="play-avatar">
            <span>{{ $store.state.task.checkerList.length }}人</span>
          </div>
        </cell>
        <cell title="参与者" is-link @click.native="choosePlays('PARTICIPANT')">
          <div v-if="$store.state.task.participantList.length">
            <img :src="baseurl + item.portrait" v-for="(item, index) in $store.state.task.participantList" :key="index" class="play-avatar" alt="">
            <span>{{ $store.state.task.participantList.length }}人</span>
          </div>
        </cell>
      </group>
    </view-box>
  </div>
</template>
<script>
  import {XHeader, ViewBox, XTextarea, Group, Datetime, Cell} from 'vux'
  import {mapActions} from 'vuex'
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
        content: '',
        startTime: '',
        endTime: '',
        playRole: '',
        baseurl: 'http://192.168.0.12:7000',
        role: '',
        myInfo: [],
        hasChoosedList: [],
        beginTime: '2017-01-01',
        radioType: '',
//        principalList: [],  // 责任人
//        executorList: [],   // 执行者
//        checkerList: [],    // 审核者
//        participantList: [],  // 参与者
        result: [],
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
      ...mapActions([
        'createTaskAction',
        'GetMyInfo',
        'getMyInfoAction'
      ]),
      cancel () {
        console.log('cancel')
        this.$router.push({
          name: 'taskList'
        })
      },
      getIdFromList (list) {
        let idList = list && list.map((item) => {
          return item.userId
        })
        return idList
      },
      create () {
        let paramsData = {
          content: this.content,
          startTime: this.startTime,
          endTime: this.endTime,
          executor: this.getIdFromList(this.$store.state.task.executorList),
          checker: this.getIdFromList(this.state.checkerList),
          participant: this.getIdFromList(this.state.participantList),
          principal: this.state.principalList[0].userId
        }
        console.log('paramsData: ', paramsData)
        this.createTaskAction(paramsData).then(res => {
          console.log('createTaskAction: ', res)
        }).catch(err => {
          console.log(err)
        })
//        this.$router.push({
//          name: 'taskList'
//        })
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
        if (val === 'PRINCIPAL') {
          this.radioType = 'radio'
        } else {
          this.radioType = 'mulRadio'
        }
        this.$router.push({
          name: 'addMember',
          query: {
            typeRadio: this.radioType,
            role: val
          }
        })
      }
    },
//    watch: {
//      $route () {
//        console.log('1111')
//        if (this.$route && this.$route.query) {
//          this.role = this.$route.query.role
//          this.result = this.$route.query.result ? this.$route.query.result : []
//          if (this.$route.path === '/addMemer') {
//            return
//          } else {
//            if (this.role === 'principal') {
//              this.principalList = this.result
//              console.log('this.principalList: ', this.principalList)
//            }
//            if (this.role === 'executor') {
//              this.executorList = this.result
//              console.log('this.executorList: ', this.executorList)
//            }
//            if (this.role === 'checker') {
//              this.checkerList = this.result
//              console.log('this.checkerList: ', this.checkerList)
//            }
//            if (this.role === 'participant') {
//              this.participantList = this.result
//              console.log('this.participantList: ', this.participantList)
//            }
//            this.hasChoosedList.map((item) => {
//              if (item.role === this.role) {
//                item.list = this.result
//              }
//              return item
//            })
//          }
//        }
//      }
//    },
    async created () {
      this.playRole = this.$route.query.role
      let res = await this.getMyInfoAction()
      this.myInfo[0] = res
      console.log('this.principalList: ', this.myInfo)
      this.$store.commit('SET_PRINCIPAL_LIST', this.myInfo)
      console.log('created: ', this.$store.state.task.principalList)
//      this.hasChoosedList = [
//        {
//          role: 'principal',
//          list: this.principalList
//        },
//        {
//          role: 'executor',
//          list: this.executorList
//        },
//        {
//          role: 'checker',
//          list: this.checkerList
//        },
//        {
//          role: 'participant',
//          list: this.participantList
//        }
//      ]
//      console.log('this.hasChoosedList: ', this.hasChoosedList)
    },
    beforeRouteEnter (to, from, next) {
      if (from.path === '/addMember') {
        to.meta.keepAlive = true
      }
      next()
    },
    beforeRouteLeave (to, from, next) {
      if (to.path === '/addMember') {
        from.meta.keepAlive = true
      }
      if (to.path === '/taskList/taskItem' || from.path === '/taskList/taskItem') {
        from.meta.keepAlive = false
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

