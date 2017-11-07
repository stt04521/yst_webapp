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
        <x-textarea :max="1000" v-model="content" placeholder="请输入日程内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间" v-model="startTime"></datetime>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="endTimeChange" :start-date="beginTime" title="截止时间" v-model="endTime"></datetime>
        <cell title="提醒" is-link :value="remindValue" @click.native="showActionSheet"></cell>
      </group>
      <group>
        <!--<x-input title="地点" v-model="address"></x-input>-->
        <x-address title="地点" v-model="address" :list="addressData" placeholder="必填"></x-address>
      </group>
      <group>
        <cell title="参与者" is-link link="/chooseParticipator">
          <!-- 下面内容是显示选中的人员 没有则显示为空 -->
        <!-- <span slot="value">
          <img src="../../assets/news/userImg.jpg" class="item-img"/>
          <img src="../../assets/news/userImg.jpg" class="item-img"/>
          <span>2人</span>
        </span> -->
        </cell>
      </group>
    </view-box>
  </div>
</template>
<script>
  import { XTextarea, Group, DatetimeRange, Datetime, Cell, Actionsheet, XSwitch, PopupHeader, Radio, XHeader, ViewBox, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
  import { mapActions } from 'vuex'
  export default {
    name: 'createSchedule',
    data () {
      return {
        addressData: ChinaAddressV4Data,
        address: [],
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
      XAddress
    },
    methods: {
      ...mapActions([
        'createSchedule',
        'editSchedule'
      ]),
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
      createNewSchedule () {
        let that = this
        let paramData
        if (this.isEdit) {
          paramData = {
            content: this.content,
            startTime: this.startTime,
            endTime: this.endTime,
            address: value2name(this.address, ChinaAddressV4Data),
            remind: this.remind,
            partner: [],
            scheduleId: this.id
          }
          console.log(paramData)
          this.editSchedule(paramData).then(() => {
            that.$router.push({
              name: 'showSchedule'
            })
          }, (err) => {
            console.log(err)
          }).catch((err) => {
            console.log(err)
          })
        } else {
          paramData = {
            content: this.content,
            startTime: this.startTime,
            endTime: this.endTime,
            address: value2name(this.address, ChinaAddressV4Data),
            remind: this.remind,
            partner: []
          }
          this.createSchedule(paramData).then(() => {
            that.$router.push({
              name: 'showSchedule'
            })
          }, (err) => {
            console.log(err)
          }).catch(err => {
            console.log(err)
          })
        }
      }
    },
    created () {
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
