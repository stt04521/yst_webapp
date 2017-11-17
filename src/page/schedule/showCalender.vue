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
      :render-function="buildSlotFn"
    >
    </inline-calendar>
    <div>
      <!--<confirm v-model="showFirm"-->
               <!--@on-cancel="onCancel"-->
               <!--@on-confirm="onConfirm">-->
        <!--<p style="text-align:center;">{{dateValue}}没有创建日程需要创建日程吗？</p>-->
      <!--</confirm>-->
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
        dateValue: ''
//        showFirm: false
 //        useCustomFn: true,
 //        buildSlotFn: () => ''
      }
    },
    methods: {
      onChange () {
//       this.showFirm = true
        this.$router.push({
          name: 'scheduleList',
          query: {
            dateTitle: this.dateValue
          }
        })
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
      },
 //      dateMark (rowIndex, columnIndex, detail) {
 //        console.log(rowIndex, ' 列 ： ', columnIndex, ' 详情： ', detail)
 //      }
      buildSlotFn (line, index, data) {
        return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;}"></div>'
      }
    }
  }
</script>
<style lang="less">
  .calender-wrapper {
    height: 100%;
    overflow: hidden;
    .left-icon{
      color: #fff;
      font-size: 15px;
    }
  }
  .inline-calendar {
    .calendar-header {
      .vux-prev-icon{
        border-color: #0099ff;
      }
      .vux-next-icon{
        border-color: #0099ff;
      }
    }
    td.is-today {
      color: #0099ff !important;
    }
  }
  .inline-calendar td.current > span.vux-calendar-each-date {
    background-color: #0099ff !important;
  }
  .weui-dialog__btn_primary{
    color: #0099ff;
  }
</style>
