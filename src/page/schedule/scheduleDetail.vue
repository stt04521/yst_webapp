<template>
  <div class="detail-wrapper">
    <x-header title="日程详情" class="header">
    </x-header>
    <div class="content-container">
      <div class="detail-container">
        <div class="detail-title">瓦风机饿哦ii合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教瓦风机饿哦i合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教瓦风机饿哦i合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教瓦风机饿哦i合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教瓦风机饿哦ii合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教瓦风机饿哦i合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教瓦风机饿哦i合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教瓦风机饿哦i合法开绿灯解放打开了房间饿哦i俄方将阿娥ofi俄双方均为i哦才发觉诶佛教</div>
        <div class="detail-ite">开始时间：2017-7-26 18：00</div>
        <div class="detail-ite">截止时间：2017-7-26 18：00</div>
        <div class="detail-ite">地点：湖北省武汉市江夏区武大科技园</div>
        <div class="creator-detail">
          <img class="creator-img" src="../../assets/news/userImg.jpg"/>
          <span class="creator">李明友发出的</span>
          <span class="created-time">13: 00</span>
        </div>
      </div>
      <div class="participator">
        <div class="p-title">参与者</div>
        <ul class="participate-container">
          <li class="participate-item">
            <img class="avatar" src="../../assets/news/userImg.jpg">
            <span>李明友</span>
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
  export default {
    name: 'scheduleDetail',
    components: {
      XHeader
    },
    methods: {
      back () {
        console.log('back')
      },
      editDetail () {
        // 点击参与人员的中的编辑，跳转到选择参与人员页面
        this.$router.push({
          name: 'chooseParticipator'
        })
      },
      cancleSchedule () {
        // 取消日程，删除该条日程记录
        console.log('cancle schedule')
        this.$router.go(-1)
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
            vertical-align: middle;
          }
          .creator {
            display: inline-block;
            margin-left: 6px;
            font-weight: 700;
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
