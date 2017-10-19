<template>
  <div class="schedule-wrapper">
    <flexbox class="tab-wrapper" :gutter="0">
      <flexbox-item :span="10">
        <tab :line-width="1" custom-bar-width="60px" active-color="#108ee9" class="s-tab-container">
          <tab-item selected class="tab-item">
            <router-link to="/schedule/showSchedule" @click="changeIndex" style="display: block">日程</router-link>
          </tab-item>
          <tab-item class="tab-item">
            <router-link to="/schedule/showNote" @click="changeIndex" style="display: block">记事本</router-link>
          </tab-item>
        </tab>
      </flexbox-item>
      <flexbox-item class="s-img-bg vux-1px-tb">
        <router-link to="/showCalender">
          <img class="calender-img" src="../../assets/schedule.png"/>
        </router-link>
      </flexbox-item>
    </flexbox>
    <div class="content" :style="{height: height + 'px'}">
      <show-schedule v-show="isShowSchedule" :scheduleList = 'list' :isShowAddress="true"></show-schedule>
      <show-schedule v-show="isShowNote" :scheduleList = 'list' :isShowAddress="false"></show-schedule>
      <showCalender v-show="isShowCalender"></showCalender>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Tab, TabItem, InlineCalendar} from 'vux'
  import showSchedule from './showSchedule.vue'
  import showCalender from './showCalender.vue'
  import {mapActions} from 'vuex'
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
        height: 0,
        pageIndex: 1,
        isShowAddress: true,
        isShowSchedule: true,
        isShowCalender: false,
        isShowNote: false,
        list: [],
        scheduleList: [],
        noteList: []
      }
    },
    methods: {
      ...mapActions([
        'getScheduleList',
        'getNoteList'
      ]),
      changeIndex () {
        this.pageIndex = this.pageIndex === 1 ? 2 : 1
      },
      getscheduleList () {
        let that = this
        this.getScheduleList().then((res) => {
          that.list = res
        }, (err) => {
          console.log('err', err)
        }).catch(err => {
          console.log('err', err)
        })
        return this.scheduleList
      },
      getnoteList () {
        let that = this
        this.getNoteList().then((res) => {
          that.list = res
          console.log('noteList', res)
        }, (err) => {
          console.log('err', err)
        }).catch(err => {
          console.log('err', err)
        })
        return this.noteList
      }
    },
    watch: {
      $route (to, from) {
        if (to.path === '/schedule/showSchedule' || to.path === '/schedule') {
          this.isShowSchedule = true
          this.isShowCalender = false
          this.isShowNote = false
          this.getscheduleList()
        }
        if (to.path === '/schedule/showNote') {
          this.isShowSchedule = false
          this.isShowCalender = false
          this.isShowNote = true
          this.getnoteList()
        }
        if (to.path === '/schedule/showCalender') {
          this.isShowSchedule = false
          this.isShowCalender = true
          this.isShowNote = false
        }
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 136
    },
    created () {
      let path = this.$route.path
      console.log('path:', path)
      if (path.indexOf('showSchedule') > -1) {
        this.getscheduleList()
      }
      if (path.indexOf('showNote') > -1) {
        this.getnoteList()
      }
//      this.getScheduleList()
//      this.getNoteList()
//      let that = this
//      this.getScheduleList().then((res) => {
//        this.scheduleList = res
//      }, (err) => {
//        console.log('err', err)
//      }).catch(err => {
//        console.log('err', err)
//      })
//      this.getNoteList().then((res) => {
//        this.noteList = res
//        console.log('noteList', res)
//      }, (err) => {
//        console.log('err', err)
//      }).catch(err => {
//        console.log('err', err)
//      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less">
  .schedule-wrapper{
    height: 100%;
    width: 100%;
    overflow: hidden;
    .tab-wrapper {
      height: 37px;
      line-height: 37px;
      text-align: center;
      .tab-item{
        padding: 0px;
        height: 37px;
        line-height: 37px;
      }
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
      /*height: 531px;*/
      padding-top: 20px;
      overflow-y: auto;
      overflow-x: hidden;
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .inline-calendar-demo {
    background: rgba(255,255,255,0.9);
  }
</style>

