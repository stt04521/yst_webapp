<template>
  <div class="content-wrapper">
    <ul>
      <li class="item-container" v-for="(item, index) in scheduleList" :key="index">
        <div class="left">
          <div class="circle"></div>
          <div class="line" v-show="index !== scheduleList.length-1">
            <span class="s-line"></span>
          </div>
        </div>
        <div class="right" @click="toscheduleDetail(item)">
          <div class="title">{{ item.content }}</div>
          <div class="address" v-show="isShowAddress">{{ item.address }}</div>
          <div class="create-time">{{ item.createTime }}</div>
          <img class="s-delete" src="../../assets/delete.png"/>
          <span class="modify-time">{{ item.modifyTime }}</span>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
import { Flow, FlowLine, FlowState, Timeline, TimelineItem } from 'vux'
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
    }
  },
  mounted () {
    console.log(this.isShowAddress)
  },
  methods: {
    toscheduleDetail (val) {
      // 跳转到日程详情页面
      console.log(val)
      this.$router.push({
        name: 'scheduleDetail'
      })
    }
  }
}
</script>
<style scoped lang="less">
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
        margin-top: 2px;
        margin-bottom: 5px;
      }
      .s-delete{
        position: absolute;
        right: 10px;
        top: 10px;
      }
      .modify-time{
        position: absolute;
        bottom: 23px;
        right: 10px;
      }
    }
  }
</style>
