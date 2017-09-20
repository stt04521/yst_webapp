<template>
  <div class="schedule-wrapper">
    <flexbox class="tab-wrapper" :gutter="0">
      <flexbox-item :span="10">
        <tab :line-width="1" custom-bar-width="60px" active-color="#108ee9" class="s-tab-container">
          <tab-item select>
            <router-link to="/schedule/showSchedule">日程</router-link>
          </tab-item>
          <tab-item>
            <router-link to="/schedule/showNote">记事本</router-link>
          </tab-item>
        </tab>
      </flexbox-item>
      <flexbox-item class="s-img-bg vux-1px-tb">
        <router-link to="/showCalender">
          <img class="calender-img" src="../assets/schedule.png"/>
        </router-link>
      </flexbox-item>
    </flexbox>
    <div class="content">
      <show-schedule v-show="isShowSchedule" :scheduleList = 'scheduleList' :isShowAddress="true"></show-schedule>
      <show-schedule v-show="isShowNote" :scheduleList = 'scheduleList' :isShowAddress="false"></show-schedule>
      <showCalender v-show="isShowCalender"></showCalender>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Tab, TabItem, InlineCalendar} from 'vux'
  import showSchedule from './showSchedule.vue'
  import showCalender from './showCalender.vue'
  export default {
    name: 'schedule',
    components: {
      Flexbox,
      FlexboxItem,
      Tab,
      TabItem,
      showSchedule,
      showCalender,
      InlineCalendar
    },
    data () {
      return {
        isShowAddress: true,
        isShowSchedule: true,
        isShowCalender: false,
        isShowNote: false,
        scheduleList: [{
          content: '第一条日程记录',
          address: '杭州滨海区',
          createTime: '8月6日 18：00',
          modifyTime: '刚刚'
        },
        {
          content: '第二条日程记录',
          address: '杭州滨海区',
          createTime: '8月6日 18：00',
          modifyTime: '8月10日 8：00'
        },
        {
          content: '第三条日程记录',
          address: '杭州滨海区',
          createTime: '8月6日 18：00',
          modifyTime: '10月6日 18：20'
        },
        {
          content: '第四条日程记录',
          address: '杭州滨海区',
          createTime: '8月6日 18：00',
          modifyTime: '9月6日 18：02'
        },
        {
          content: '第五条日程记录第五条日程记录第五条日程记录第五条日程记录第五条日程记录',
          address: '湖北异常',
          createTime: '8月6日 18：40',
          modifyTime: '刚刚'
        },
        {
          content: '第四条日程记录',
          address: '杭州滨海区',
          createTime: '8月6日 18：00',
          modifyTime: '9月6日 18：02'
        },
        {
          content: '第五条日程记录第五条日程记录第五条日程记录第五条日程记录第五条日程记录',
          address: '湖北异常',
          createTime: '8月6日 18：40',
          modifyTime: '刚刚'
        },
        {
          content: '第四条日程记录',
          address: '杭州滨海区',
          createTime: '8月6日 18：00',
          modifyTime: '9月6日 18：02'
        },
        {
          content: '第五条日程记录第五条日程记录第五条日程记录第五条日程记录第五条日程记录',
          address: '湖北异常',
          createTime: '8月6日 18：40',
          modifyTime: '刚刚'
        },
        {
          content: '第六条程记录',
          address: '湖北武汉',
          createTime: '8月6日 19：00',
          modifyTime: '12月6日 18：00'
        }]
      }
    },
    methods: {
//      showNotepad () {
//        console.log('show note pad')
//      },
//      showSchedule () {
//        console.log('show schedule')
//      }
    },
    watch: {
      $route (to, from) {
        console.log('to: ', to)
        if (to.path === '/schedule/showSchedule' || to.path === '/schedule') {
          this.isShowSchedule = true
          this.isShowCalender = false
          this.isShowNote = false
        }
        if (to.path === '/schedule/showNote') {
          this.isShowSchedule = false
          this.isShowCalender = false
          this.isShowNote = true
        }
        if (to.path === '/schedule/showCalender') {
          console.log(to)
          console.log(from)
          this.isShowSchedule = false
          this.isShowCalender = true
          this.isShowNote = false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less">
  .schedule-wrapper{
    height: 566px;
    overflow: hidden;
    .tab-wrapper {
      height: 37px;
      line-height: 37px;
      text-align: center;
      .s-tab-container{
        height: 37px;
        line-height: 37px;
      }
      .s-img-bg{
        background-color: #fff;
        .calender-img{
          width: 26px;
          height: 26px;
          vertical-align: middle;
        }
      }
    }
    .content{
      margin-top: 10px;
      height: 522px;
      overflow-y: auto;
    }
  }
  .inline-calendar-demo {
    background: rgba(255,255,255,0.9);
  }
</style>

