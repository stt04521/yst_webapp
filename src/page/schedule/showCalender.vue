<template>
  <div class="calender-wrapper">
    <inline-calendar
      v-model = 'value'
      start-date="2016-04-01"
      end-date="2020-05-30"
      :range="false"
      :show-last-month="true"
      :show-next-month="true"
      :highlight-weekend="false"
      :return-six-rows="true"
      :hide-header="false"
      :hide-week-list="false"
      :replace-text-list="{}"
      :weeks-list="[]"
      :disable-past="false"
      :disable-future="false"
      @on-change="onChange"
    >
    </inline-calendar>
    <div>
      <confirm v-model="showFirm"
               @on-cancel="onCancel"
               @on-confirm="onConfirm">
        <p style="text-align:center;">{{value}}没有创建日程需要创建日程吗？</p>
      </confirm>
    </div>

  </div>
</template>
<script>
  import {InlineCalendar, Group, Cell, Confirm} from 'vux'
  export default {
    name: 'showCalender',
    components: {
      InlineCalendar,
      Group,
      Cell,
      Confirm
    },
    data () {
      return {
        value: '',
        showFirm: false
      }
    },
    methods: {
      onChange (val) {
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
        console.log('on confirm')
        // 点击确定跳转到创建日程页面
        this.$router.push({path: '/createSchedule'})
      }
    }
  }
</script>
<style scoped lang="less">
</style>
