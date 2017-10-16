<template>
  <div class="create-s-wrapper">
    <div class="v-transfer-dom">
      <actionsheet :menus="remindMenu" v-model="showRemind" @on-click-menu="chooseRemind"></actionsheet>
    </div>
    <!--主体内容-->
    <x-header title="新建计划" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancleCreateSchedule">取消</span>
      <span slot="right" @click="CreateSchedule">创建</span>
    </x-header>
    <view-box class="content-container">
      <group>
        <x-textarea :max="1000" placeholder="请输入日程内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="endTimeChange" :start-date="beginTime" title="截止时间"></datetime>
        <cell title="提醒" is-link :value="remindValue" @click.native="showActionSheet"></cell>
      </group>
      <group>
        <cell title="地点" ></cell>
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
  import { XTextarea, Group, DatetimeRange, Datetime, Cell, Actionsheet, XSwitch, PopupHeader, Radio, XHeader, ViewBox } from 'vux'
  export default {
    name: 'createSchedule',
    data () {
      return {
        show1: false,
        startTime: '',
        beginTime: '2017-01-01',
        endTime: '',
        showRemind: false,
        remindValue: '一天前',
        remindMenu: {
          menu1: '不提醒',
          menu2: '一天前',
          menu3: '1小时'
        }
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
      ViewBox
    },
    methods: {
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
      chooseRemind (key, value) {
        this.remindValue = value
      },
      cancleCreateSchedule () {
        console.log('cancel create schedule')
        this.$router.go(-1)
      },
      CreateSchedule () {
        console.log('create schedule')
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .create-s-wrapper {
    height: 100%;
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
