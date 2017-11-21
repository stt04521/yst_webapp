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
      @click.native="onChange"
      :render-function="buildSlotFn"
    >
    </inline-calendar>
    <div class="confirm-container" v-show="showFirm">
      <div class="content vux-1px-b">{{dateValue}}没有创建日程需要创建日程吗？</div>
      <div class="footer">
        <a class="item cancel" @click="cancel">取消</a>
        <a class="item sure" @click="onConfirm">确定</a>
      </div>
    </div>
    <div class="background-screen" v-show="showFirm"></div>
  </div>
</template>
<script>
  import {XHeader, InlineCalendar, Confirm} from 'vux'
  import {mapActions} from 'vuex'
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
      ...mapActions([
        'getScheduleByDateAction'
      ]),
      async onChange () {
        let date = this.dateValue
        let paramsDate = {
          date: date
        }
        let res = await this.getScheduleByDateAction(paramsDate)
        if (res.length > 0) {
          this.$router.push({
            name: 'scheduleList',
            query: {
              dateTitle: this.dateValue
            }
          })
          this.$store.commit('SET_ONE_DATE_SCHEDULE', res)
        } else {
          this.showFirm = true
        }
      },
      cancel () {
        this.showFirm = false
      },
      onConfirm () {
        this.$router.push({name: 'createSchedule'})
        this.showFirm = false
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
  // 自定义弹窗
  .confirm-container {
    position: fixed;
    z-index: 5;
    width: 80%;
    max-width: 300PX;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 3PX;
    overflow: hidden;
    .content {
      font-size: 14px;
      padding: 2.7em 20PX 1.7em;
      color: #353535;
      border-bottom: 1px solid #aaa;
      border-bottom-color: #aaa;
    }
    .footer {
      position: relative;
      line-height: 48PX;
      font-size: 18PX;
      display: flex;
      color: #353535;
      .item {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        color: #3CC51F;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        position: relative;
      }
      .sure{
        border-left: 1px solid #aaa;
        color: #0099ff;
      }
    }
  }
  .background-screen{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(7,17,27,0.3);
  }
</style>
