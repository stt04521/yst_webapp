<template>
  <div class="schedule-wrapper">
    <x-header :title="dateTitle"></x-header>
    <ul class="schedule-container" :style="{height: height + 'px'}">
      <li class="item-container" v-for="(item, index) in $store.state.schedule.oneDateSchedule" :key="index" :style="{paddingTop: index === 0 ? '20px': ''}">
        <div class="left">
          <div class="circle"></div>
          <div class="line" v-show="index !== $store.state.schedule.oneDateSchedule.length-1">
            <span class="s-line"></span>
          </div>
        </div>
        <div class="right" @click="toDetail(item)">
          <div class="title">{{ item.content }}</div>
          <div class="address" v-if="true">{{ item.address }}</div>
          <div class="create-time">{{ $moment(item.startTime).format('YYYY-MM-DD HH:mm:ss') }}</div>
          <i class="iconfont icon-shanchu s-delete" @click="deleteItem($event, item)"/>
          <span class="modify-time">{{ $moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'scheduleList',
    components: {
      XHeader
    },
    data () {
      return {
        height: 0,
        dateTitle: '',
        scheduleList: []
      }
    },
    methods: {
      ...mapActions([
        'getScheduleByDateAction'
      ]),
      toDetail (val) {
        this.$router.push({
          name: 'scheduleDetail',
          params: {
            id: val.id
          }
        })
      },
      deleteItem (e, val) {
        e.cancelBubble = true
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
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 46
    },
    created () {
      this.dateTitle = this.$route.query.dateTitle
//      let date = this.dateTitle
//      let paramsDate = {
//        date: date
//      }
//      this.scheduleList = await this.getScheduleByDateAction(paramsDate)
//      console.log(this.scheduleList)
//      this.getScheduleByDateAction(paramsDate).then((res) => {
//        console.log(res)
//      }).catch((err) => {
//        console.log(err)
//      })
    }
  }
</script>
<style lang="less" scoped>
  .schedule-wrapper{
    height: 100%;
    overflow: hidden;
    .schedule-container{
      overflow-y: auto;
      overflow-x: hidden;
      &:first-child {
        padding-top: 20px;
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
    }
  }
</style>
