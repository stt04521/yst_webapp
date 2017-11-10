<template>
  <div class="system-wrapper">
    <x-header :title="headerTitle"></x-header>
    <view-box ref="viewBox" class="content" :style="{height: height + 'px'}">
      <group :gutter="0" class="system-container">
        <cell class="blue_bg f_w reset-padding">
          <span slot="title">新消息</span>
          <span slot="value" class="f_w">查看更多》</span>
        </cell>

        <div class="content-container" v-show="showTaskNotice">
          <div class="title">
            <img src="../../assets/news/userImg.jpg" class="avatar">
            <span>李明友</span>
            <span class="time">13: 00</span>
          </div>
          <div class="detail text-overflow-3">
            有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？
          </div>
        </div>

        <div class="content-container" v-show="showSysMsg">
        <div class="title">
          <span style="font-size: 18px">开启只能移动办公变革</span>
          <span class="time">13: 00</span>
        </div>
        <div class="detail text-overflow-3">
          有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？
        </div>
      </div>

        <div class="content-container" v-show="showVerlidationMsg">
          <div class="detail text-overflow-3">
            有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？
          </div>
          <div class="title">
            <img src="../../assets/news/userImg.jpg" class="avatar">
            <span>李明友</span>
            <span class="time">13: 00</span>
          </div>
        </div>

        <div class="content-container" v-show="showScheduleNotice">
          <div class="detail text-overflow-3">
            有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？有什么具体要求吗？
          </div>
          <div class="title">
            <span>开始时间： 08月1日 16：00</span>
          </div>
        </div>
      </group>
    </view-box>
  </div>
</template>

<script>
  import { XHeader, ViewBox, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
  import { mapActions } from 'vuex'
  export default {
    name: 'system',
    components: {
      XHeader,
      ViewBox,
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge
    },
    data () {
      return {
        height: 0,
        headerTitle: '',
        newList: [],
        showVerlidationMsg: false,
        showTaskNotice: false,
        showSysMsg: false,
        showScheduleNotice: false
      }
    },
    methods: {
      ...mapActions([
        'ListByType'
      ]),
      getAllNew () {
        let self = this
        self.ListByType({type: self.$route.params.type}).then(res => {
          self.newList = res
        })
      }

    },
    created () {
      this.getAllNew()
      let messageType = this.$route.params.type
      if (messageType === 'validationMessage') {
        this.headerTitle = '验证消息'
        this.showVerlidationMsg = true
      }
      if (messageType === 'taskNotice') {
        this.headerTitle = '任务通知'
        this.showTaskNotice = true
      }
      if (messageType === 'sysMsg') {
        this.headerTitle = '系统消息'
        this.showSysMsg = true
      }
      if (messageType === 'scheduleNotice') {
        this.headerTitle = '日程提醒'
        this.showScheduleNotice = true
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 46
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .weui-cell:before{
    border-top: none;
  }
  .system-wrapper{
    height: 100%;
    overflow: hidden;
    .content {
      overflow-y: auto;
    }
    .system-container{
      .content-container{
        .title{
          font-size: 14px;
          position: relative;
          height: 40px;
          line-height: 40px;
          padding: 10px;
          .avatar{
            width: 40px;
            height: 40px;
            margin-right: 15px;
            vertical-align: middle;
          }
          .time{
            position: absolute;
            top: 10px;
            right: 20px;
          }
        }
        .detail {
          margin-top: 15px;
          margin-bottom: 15px;
          padding-left: 10px;
          padding-right: 10px;
          font-size: 14px;
        }
      }
    }
  }

</style>
