<template>
  <div class="create-s-wrapper">
    <group>
      <x-textarea :max="1000" placeholder="请输入日程内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
    </group>
    <group>
      <!--<datetime-range title="开始时间" start-date="2017-01-01" end-date="2019-02-02" @on-change="startTimeChange"></datetime-range>-->
      <!--<datetime-range title="结束时间" start-date="2017-01-01" end-date="2017-02-02" @on-change="endTimeChange"></datetime-range>-->
      <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
      <datetime format="YYYY-MM-DD HH:mm" @on-change="endTimeChange" :start-date="beginTime" title="截止时间"></datetime>
      <!--<cell title="提醒" is-link :value="remindValue" v-model="showRemind" @click="showActionSheet"></cell>-->
      <!--<x-switch title="提醒" v-model="showRemind"></x-switch>-->
      <cell title="提醒" is-link :value="remindValue" @click="showActionSheet"></cell>
    </group>
    <group>
      <cell title="地点" ></cell>
    </group>
    <group>
      <cell title="参与者" is-link>
        <span slot="value">
          <img src="../../assets/news/userImg.jpg" class="item-img"/>
          <img src="../../assets/news/userImg.jpg" class="item-img"/>
          <span>2人</span>
        </span>
      </cell>
    </group>
    <!--<actionsheet v-model="showRemind" :menus="remindMenu" :close-on-clicking-mask="false" show-cancel @on-click-mask="console('on click mask')"></actionsheet>-->

  </div>
</template>
<script>
  import { XTextarea, Group, DatetimeRange, Datetime, Cell, Actionsheet, XSwitch, PopupHeader, Radio } from 'vux'
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
      Radio
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
      }
    }
  }
</script>
<style scoped lang="less">
  .create-s-wrapper {
    margin-top: -20px;
    .item-img {
      width: 26px;
      height: 26px;
      border-radius: 13px;
    }
  }

</style>
