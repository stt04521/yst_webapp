<template>
  <div class="create-s-wrapper">
    <div class="v-transfer-dom">
      <actionsheet :menus="remindMenu" v-model="showRemind" @on-click-menu="chooseRemind"></actionsheet>
    </div>
    <!--主体内容-->
    <x-header title="新建日程" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancleCreateSchedule">取消</span>
      <span slot="right" @click="createNewSchedule">{{isEdit ? '保存' : '创建'}}</span>
    </x-header>
    <view-box class="content-container">
      <group>
        <x-textarea :max="1000" v-model="content" placeholder="请输入日程内容" :height="183"></x-textarea>
      </group>
      <group>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间" v-model="startTime"></datetime>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="endTimeChange" :start-date="beginTime" title="截止时间" v-model="endTime"></datetime>
        <cell title="提醒" is-link :value="remindValue" @click.native="showActionSheet"></cell>
      </group>
      <group>
        <x-input title="地点" v-model="address" placeholder="必填" text-align="right"></x-input>
      </group>
      <group>
        <cell title="参与者" is-link @click.native="chooseMember">
          <!-- 下面内容是显示选中的人员 没有则显示为空 -->
          <span slot="value" v-show="$store.state.schedule.scheduleParticipator.length">
            <img v-for="(item, index) in $store.state.schedule.scheduleParticipator" :src="baseurl + item.portrait" class="item-img"/>
            <span>{{ $store.state.schedule.scheduleParticipator.length }}人</span>
          </span>
        </cell>
      </group>
    </view-box>
  </div>
</template>
<script>
  import {XInput, XTextarea, Group, DatetimeRange, Datetime, Cell, Actionsheet, XSwitch, PopupHeader, Radio, XHeader, ViewBox} from 'vux'
  import { mapActions } from 'vuex'
  export default {
    name: 'createSchedule',
    data () {
      return {
        baseurl: 'http://192.168.0.12:7000',
        address: '',
        isEdit: false,
        content: '',
        show1: false,
        startTime: '',
        beginTime: '2017-01-01',
        endTime: '',
        showRemind: false,
        remindValue: '一天前',
        remind: -1,
        remindMenu: [
          {
            label: '不提醒',
            value: -1
          },
          {
            label: '一小时',
            value: 3600000
          },
          {
            label: '一天前',
            value: 86400000
          }
        ],
        infoList: {},
        placeHolder: '请输入日程内容',
        id: ''
      }
    },
    components: {
      XTextarea,
      Group,
      DatetimeRange,
      Datetime,
      Cell,
      Actionsheet,
      XSwitch,
      PopupHeader,
      Radio,
      XHeader,
      ViewBox,
//      XAddress,
      XInput
    },
    methods: {
      ...mapActions([
        'createScheduleAction',
        'editSchedule',
        'getCollegeListAction'
      ]),
      startTimeChange (val) {
        this.startTime = val
        this.beginTime = this.startTime.split(' ')[0]
      },
      endTimeChange (val) {
        this.endTime = val
      },
      change (val) {
        console.log(val)
      },
      showActionSheet () {
        this.showRemind = true
      },
      chooseRemind (key, val) {
        this.remindValue = val.label
        this.remind = val.value
      },
      cancleCreateSchedule () {
        this.$router.go(-1)
      },
      getIdFromList (list) {
        let idList = list && list.map((item) => {
          return item.userId
        })
        return idList
      },
      createNewSchedule () {
        let that = this
        let paramData
        // 编辑已有日程
        if (this.isEdit) {
          paramData = {
            content: this.content,
            startTime: this.startTime,
            endTime: this.endTime,
            address: this.address,
            remind: this.remind,
            partner: this.getIdFromList(this.$store.state.schedule.scheduleParticipator),
            scheduleId: this.id
          }
          this.editSchedule(paramData).then(() => {
            that.$router.push({
              name: 'scheduleDetail',
              params: {
                id: this.id
              }
            })
            this.$store.commit('SET_SCHEDULE_PARTICIPATOR', [])
            this.$store.commit('SET_CREATE_SCHEDULE_DATA', {})
          }, (err) => {
            console.log(err)
          }).catch((err) => {
            console.log(err)
          })
        } else {
          // 创建新日程
          paramData = {
            content: this.content,
            startTime: this.startTime,
            endTime: this.endTime,
            address: this.address,
            remind: this.remind,
            partner: this.getIdFromList(this.$store.state.schedule.scheduleParticipator)
          }
          this.createScheduleAction(paramData).then(() => {
            that.$router.push({
              name: 'showSchedule'
            })
            this.$store.commit('SET_SCHEDULE_PARTICIPATOR', [])
            this.$store.commit('SET_CREATE_SCHEDULE_DATA', {})
          }, (err) => {
            console.log(err)
          }).catch(err => {
            console.log(err)
          })
        }
      },
      chooseMember () {
        let paramData = {
          content: this.content,
          startTime: this.startTime,
          endTime: this.endTime,
          address: this.address,
          remind: this.remind
        }
        this.$store.commit('SET_CREATE_SCHEDULE_DATA', paramData)
        this.$router.push({
          name: 'addMember',
          query: {
            role: 'SCHEDULE_PARTICIPATOR'
          }
        })
      },
      isEmptyObject (e) {
        let t
        for (t in e) {
          return true
        }
        return false
      }
    },
    async created () {
      let res = await this.getCollegeListAction()
      this.$store.commit('SET_CAN_CHOOSEDLIST', res)
      if (this.isEmptyObject(this.$store.state.schedule.createScheduleData)) {
        let data = this.$store.state.schedule.createScheduleData
        this.content = data.content
        this.startTime = data.startTime
        this.endTime = data.endTime
        this.address = data.address
        this.remind = data.remind
      }
      // 编辑已有日程
      if (this.$route.query && this.$route.query.info) {
        let info = this.$route.query.info
        if (info.remind === 3600000) {
          this.remindValue = '一小时'
        }
        if (info.remind === 86400000) {
          this.remindValue = '一天前'
        }
        if (info.remind === -1) {
          this.remindValue = '不提醒'
        }
        if (info) {
          this.isEdit = true
          this.infoList = info
          this.content = info.content
          this.startTime = this.$moment(info.startTime).format('YYYY-MM-DD HH:mm:ss')
          this.endTime = this.$moment(info.endTime).format('YYYY-MM-DD HH:mm:ss')
          this.id = info.id
          this.address = info.address
          this.partner = info.partner
          this.$store.commit('SET_SCHEDULE_PARTICIPATOR', this.partner)
        }
      }
    },
    computed: {
      info () {
        if (this.$route.query && this.$route.query.info) {
          let info = this.$route.query.info
          if (info.remind === 3600000) {
            this.remindValue = '一小时'
          }
          if (info.remind === 86400000) {
            this.remindValue = '一天前'
          }
          if (info.remind === -1) {
            this.remindValue = '不提醒'
          }
          if (info) {
            this.isEdit = true
            this.infoList = info
            this.content = info.content
            this.startTime = this.$moment(info.startTime).format('YYYY-MM-DD HH:mm:ss')
            this.endTime = this.$moment(info.endTime).format('YYYY-MM-DD HH:mm:ss')
            this.id = info.id
          }
        }
      }
    }
//    beforeRouteLeave (to, from, next) {
//      if (to.path === '/addMember') {
//        from.meta.keepAlive = true
//      }
//      if (to.path === '/schedule/showSchedule') {
//        from.meta.keepAlive = false
//      }
//      next()
//    },
//    beforeRouteEnter (to, from, next) {
//      if (from.path === '/addMember') {
//        to.meta.keepAlive = true
//      }
//      next()
//    }
//    beforeRouteLeave (to, from, next) {
//      if (to.path === '/addMember') {
//        from.meta.keepAlive = true
//      }
//      next()
//    }
//    beforeRouteEnter (to, from, next) {
//      if (from.path === '/schedule/showSchedule') {
//        to.meta.keepAlive = false
//      }
//      if (from.path === '/addMember') {
//        to.meta.keepAlive = true
//      }
//      next()
//    }
  }
</script>
<style scoped lang="less">
  .create-s-wrapper {
    height: 100%;
    overflow: hidden;
    .content-container {
      margin-top: -20px;
      .item-img {
        width: 26px;
        height: 26px;
        border-radius: 13px;
      }
    }
    .header span{
      font-size: 17px;
      color: #fff;
    }
  }

</style>
