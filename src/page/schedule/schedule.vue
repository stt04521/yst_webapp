<template>
  <div class="schedule-wrapper">
    <flexbox class="tab-wrapper" :gutter="0">
      <flexbox-item :span="10">
        <tab :line-width="1" custom-bar-width="60px" active-color="#108ee9" class="s-tab-container">
          <tab-item :selected="$route.path === '/schedule/showSchedule'" class="tab-item-container">
            <router-link to="/schedule/showSchedule" @click="changeIndex" style="display: block">日程</router-link>
          </tab-item>
          <tab-item class="tab-item-container" :selected="$route.path === '/schedule/showNote'">
            <router-link to="/schedule/showNote" @click="changeIndex" style="display: block">记事本</router-link>
          </tab-item>
        </tab>
      </flexbox-item>
      <flexbox-item class="s-img-bg vux-1px-b">
        <i class="iconfont icon-rili calender-img" @click="toCalender"></i>
      </flexbox-item>
    </flexbox>
    <div class="content-container" :style="{height: height + 'px'}">
      <show-schedule @refresh-schedule-list="getscheduleList" v-show="isShowSchedule" :scheduleList='list' :isShowAddress="true" :height="height"></show-schedule>
      <show-schedule @refresh-note-list="getnoteList" v-show="isShowNote" :scheduleList='list' :isShowAddress="false" :height="height"></show-schedule>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Tab, TabItem, InlineCalendar} from 'vux'
  import showSchedule from './showSchedule.vue'
  import {mapActions} from 'vuex'
  export default {
    name: 'schedule',
    components: {
      Flexbox,
      FlexboxItem,
      Tab,
      TabItem,
      showSchedule,
      InlineCalendar
    },
    data () {
      return {
        height: 0,
        pageIndex: 1,
        isShowAddress: true,
        isShowSchedule: true,
        isShowNote: false,
        list: [],
        scheduleList: [],
        noteList: []
      }
    },
    methods: {
      ...mapActions([
        'getScheduleListAction',
        'getNoteListAction'
      ]),
      changeIndex () {
        this.pageIndex = this.pageIndex === 1 ? 2 : 1
      },
      getscheduleList () {
        let that = this
        this.getScheduleListAction().then((res) => {
          that.list = res
        }).catch(err => {
          console.log('err', err)
        })
        return this.scheduleList
      },
      getnoteList () {
        let that = this
        this.getNoteListAction().then((res) => {
          that.list = res
        }).catch(err => {
          console.log('err', err)
        })
        return this.noteList
      },
      toCalender () {
        this.$router.push({
          name: 'showCalender'
        })
      }
    },
    watch: {
      $route (to, from) {
        if (to.path === '/schedule/showSchedule' || to.path === '/schedule') {
          this.isShowSchedule = true
          this.isShowNote = false
          this.getscheduleList()
        }
        if (to.path === '/schedule/showNote') {
          this.isShowSchedule = false
          this.isShowNote = true
          this.getnoteList()
        }
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 137
    },
    created () {
      let path = this.$route.path
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
      .tab-item-conttainer{
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
        height: 37px;
        line-height: 37px;
        .calender-img{
          font-size: 24px;
          color: #0099ff;
        }
      }
    }
    .content-container{
      /*height: 531px;*/
      /*padding-top: 20px;*/
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

