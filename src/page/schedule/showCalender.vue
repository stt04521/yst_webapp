<template>
  <div class="calender-wrapper">
    <x-header title="日程">
      <span @click="goBack" class="left-icon" slot="overwrite-left">＜返回</span>
    </x-header>
    <inline-calendar
      v-model="dateValue"
      start-date="2016-04-01"
      end-date="2020-05-30"
      :show-last-month="true"
      :show-next-month="true"
      :return-six-rows="true"
      :hide-header="false"
      :hide-week-list="false"
      @on-change="onChange"
    >
    </inline-calendar>
    <div>
      <confirm v-model="showFirm"
               @on-cancel="onCancel"
               @on-confirm="onConfirm">
        <p style="text-align:center;">{{dateValue}}没有创建日程需要创建日程吗？</p>
      </confirm>
    </div>

  </div>
</template>
<script>
  import {XHeader, InlineCalendar, Confirm} from 'vux'
  export default {
    name: 'showCalender',
    components: {
      InlineCalendar,
      Confirm,
      XHeader
    },
    data () {
      return {
        dateValue: '',
        showFirm: false
      }
    },
    methods: {
      onChange () {
//       // 根据日期和当前用户Id获取是否存在日程
        // 如果存在日程，则显示日程详情页面
        // 如果不存在日程，confirm提示是否需要创建日程
        this.showFirm = true
      },
      onCancel () {
        console.log('on hide')
        // 点击取消，不做任何跳转
      },
      onConfirm () {
        // 点击确定跳转到创建日程页面
        this.$router.push({name: 'createSchedule'})
      },
      goBack () {
        this.$router.push({
          name: 'showSchedule'
        })
      }
    },
    beforeDestroy () {
      console.log('1111')
    },
    destroyed () {
      console.log('222')
    }
  }
</script>
<style scoped lang="less">
  .calender-wrapper {
    height: 100%;
    overflow: hidden;
    .left-icon{
      color: #fff;
      font-size: 15px;
    }
  }
</style>
