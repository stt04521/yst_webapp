<template>
  <div class="detail-wrapper">
    <x-header title="日程详情" class="header">
      <span slot="overwrite-left" @click="goBack">< 返回</span>
    </x-header>
    <div class="content-container">
      <div class="detail-container">
        <div class="detail-title">{{ info.content }}</div>
        <div class="detail-ite">开始时间：{{ $moment(info.startTime).format('YYYY-MM-DD HH:mm:ss') }}</div>
        <div class="detail-ite">截止时间：{{ $moment(info.endTime).format('YYYY-MM-DD HH:mm:ss') }}</div>
        <div class="detail-ite">地点：{{ info.address }}</div>
        <div class="creator-detail">
          <img class="creator-img" :src="creatorAvatar ? baseurl + creatorAvatar : ''"/>
          <span class="creator">{{ creator }}&nbsp;发出的</span>
          <span class="created-time">{{ $moment(info.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </div>
      </div>
      <div class="participator">
        <div class="p-title">参与者</div>
        <ul class="participate-container" v-show="info.partner && info.partner.length">
          <li class="participate-item" v-for="(item, index) in info.partner" :key="index">
            <img class="avatar" :src="baseurl + item.portrait">
            <span>{{ item.realName }}</span>
          </li>
        </ul>
        <div class="operate">
          <button class="operate-btn" @click="editDetail">编辑</button>
          <button class="cancle-btn" @click="cancleSchedule">取消日程</button>
        </div>
        <br style="clear: both"/>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'scheduleDetail',
    components: {
      XHeader
    },
    data () {
      return {
        baseurl: 'http://192.168.0.12:7000',
        info: {},
        creator: '',
        creatorAvatar: ''
      }
    },
    methods: {
      ...mapActions([
        'getScheduleDetail',
        'deleteSchedule',
        'getMyInfoAction',
        'findPersonInfoByUserIdAction'
      ]),
      goBack () {
        this.$router.push({
          name: 'showSchedule'
        })
      },
      editDetail () {
        // 跳转到编辑日程页面
        let data = this.info
        this.$router.push({
          name: 'createSchedule',
          query: {
            info: data
          }
        })
      },
      cancleSchedule () {
        // 取消日程，删除该条日程记录
        this.deleteSchedule(this.info.id).then((res) => {
          this.$router.go(-1)
        }, (err) => {
          console.log(err)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    async created () {
      let id = this.$route.params.id
//      this.getScheduleDetail(id).then((res) => {
//        this.info = res
//      }).catch((err) => {
//        console.log(err)
//      })
      this.info = await this.getScheduleDetail(id)
      let res = await this.getMyInfoAction()
      if (this.info.creator === res.userId) {
        this.creator = '我'
        this.creatorAvatar = res.portrait
      } else {
        let response = await this.findPersonInfoByUserIdAction(this.info.creator)
        this.creator = response.realName
        this.creatorAvatar = response.portrait
      }
    }
  }
</script>
<style scoped lang="less">
  .container{
    width: 336px;
    margin: 10px auto;
    background-color: #fff;
    padding: 20px 10px;
  }
  .detail-wrapper{
    height: 100%;
    overflow: hidden;
    .header span{
      font-size: 17px;
      color: #fff
    }
    .content-container {
      height: 620px;
      overflow-y: auto;
      overflow-x: hidden;
      .detail-container{
        .container;
        position: relative;
        .detail-title{
          width: 321px;
          overflow-y: auto;
        }
        .detail-ite{
          height: 30px;
          line-height: 30px;
        }
        .creator-detail{
          height: 40px;
          line-height: 40px;
          width: 100%;
          margin-top: 40px;
          position: relative;
          .creator-img{
            width: 30px;
            height: 30px;
            vertical-align: top;
          }
          .creator {
            display: inline-block;
            margin-left: 6px;
            font-weight: 700;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .created-time{
            position: absolute;
            right: 30px;
            bottom: 0px;
          }
        }
      }
      .participator {
        .container;
        .p-title{
          font-size: 14px;
          margin-bottom: 10px;
          margin-left: 10px;
        }
        .participate-container{
          width: 100%;
          padding: 10px 10px;
          .participate-item{
            height: 50px;
            line-height: 50px;
            font-size: 15px;
            .avatar{
              width: 40px;
              height: 40px;
              vertical-align: middle;
              margin-right: 10px;
              display: inline-block;
            }
          }
        }
        .operate{
          text-align: center;
          margin-top: 20px;
          .btn{
            width: 130px;
            height: 35px;
            line-height: 35px;
            border-radius: 5px;
            border-width: 0;
          }
          .operate-btn{
            .btn;
            background-color: #108ee9;
            color: #fff;
            margin-right: 10px;
          }
          .cancle-btn{
            .btn;
            background-color: #f3f3f3;
            color: #aaa;
          }
        }
      }
    }
  }
</style>
