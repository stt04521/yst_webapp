<template>
  <div :style="{height: height + 'px'}">
    <ul class="content-wrapper">
      <li class="item-container" v-for="(item, index) in scheduleList" :key="index">
        <div class="left">
          <div class="circle"></div>
          <div class="line" v-show="index !== scheduleList.length-1">
            <span class="s-line"></span>
          </div>
        </div>
        <div class="right" @click="toDetail(item)">
          <div class="title">{{ item.content }}</div>
          <div class="address" v-if="isShowAddress">{{ item.address }}</div>
          <div class="create-time" :style="{marginTop: isShowAddress ? '2px' : '27px'}">{{ $moment(item.startTime).format('YYYY-MM-DD HH:mm:ss') }}</div>
          <i class="iconfont icon-shanchu s-delete" @click.stop="deleteItem(item)"/>
          <span class="modify-time">{{ $moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </div>
      </li>
    </ul>
    <div class="create-schedule" @click="addSchedule">
      <i class="iconfont icon-gongxiang- create-schedule-icon"></i>
    </div>
  </div>
</template>
<script>
import { Flow, FlowLine, FlowState, Timeline, TimelineItem } from 'vux'
import {mapActions} from 'vuex'
export default {
  name: 'showSchedule',
  components: {
    Flow,
    FlowLine,
    FlowState,
    Timeline,
    TimelineItem
  },
  props: {
    scheduleList: {
      type: Array,
      default: []
    },
    isShowAddress: {
      type: Boolean
    },
    height: {
      type: Number
    }
  },
  methods: {
    ...mapActions([
      'deleteSchedule',
      'deleteNote'
    ]),
    toDetail (val) {
      // 跳转到日程详情页面 或者 记事详情页面
      if (this.isShowAddress) {
        console.log('schedule: ', val)
        this.$router.push({
          name: 'scheduleDetail',
          params: {
            id: val.id
          }
        })
      } else {
        this.$router.push({
          name: 'noteDetail',
          params: {
            id: val.id
          }
        })
      }
    },
    deleteItem (val) {
      if (this.isShowAddress) {
        this.deleteSchedule(val.id).then((res) => {
          this.$emit('refresh-schedule-list')
        }, (err) => {
          console.log(err)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.deleteNote(val.id).then((res) => {
          this.$emit('refresh-note-list')
        }, (err) => {
          console.log(err)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    addSchedule () {
      // 点击添加日程跳转到添加日程页面
      if (this.isShowAddress) {
        this.$router.push({
          name: 'createSchedule'
        })
      } else {
        this.$router.push({
          name: 'createNote'
        })
      }
    }
  }
}
</script>
<style scoped lang="less">
  .create-schedule{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #0099ff;
    position: fixed;
    bottom: 80px;
    right: 40px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    .create-schedule-icon{
      font-size: 28px;
      color: #fff;
    }
  }

  .content-wrapper{
    &:first-child{
      padding-top: 20px;
    }
  }
  .item-container{
    width: 375px;
    height: 100px;
    padding-left: 30px;
    padding-right: 30px;
    .left{
      display: inline-block;
      flex-direction: column;
      width:20px;
      .circle{
        width: 20px;
        height: 20px;
        border: 2px solid #56c1ff;
        border-radius: 20px;
        box-sizing: border-box;
      }
      .line{
        height: 80px;
        width:20px;
        text-align: center;
        .s-line {
          display: inline-block;
          height: 80px;
          width: 1px;
          background-color: #aaa;
        }
      }
    }
    .right{
      display: inline-block;
      height: 80px;
      width: 293px;
      vertical-align: top;
      padding: 10px 0 10px 10px;
      font-size: 13px;
      position: relative;
      .title{
        width: 252px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

      }
      .address{
        height: 20px;
        margin-top: 2px;
        margin-bottom: 5px;
      }
      .s-delete{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
        color: #aaa;
      }
      .modify-time{
        position: absolute;
        bottom: 23px;
        right: 10px;
      }
    }

  }
</style>
