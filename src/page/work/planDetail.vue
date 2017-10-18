<template>
  <div class="plan-detail-wrapper">
    <x-header title="计划" class="header">
    </x-header>
    <div class="plan-detail-container">
      <div class="content-container">
        <span class="title">今天完成那个财务报表</span>
        <span class="status">待审核</span>
        <p class="content">
          完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字
        </p>
        <span class="time">开始时间： 2017-7-26 18：00</span>
        <span class="time">截止时间： 2017-7-26 18：00</span>
        <button class="button">审核通过</button>
        <div class="file" @click="showAllFile">
          <img class="file-icon" src="../../assets/addFile.png" alt="">
          <span>共三个附件</span>
        </div>
        <div class="plan-creator">
          <img class="avatar" src="../../assets/news/userImg.jpg" alt="">
          <span>我发出的</span>
        </div>
        <span class="create-time">13：00</span>
      </div>
      <div class="recover-container">
        <span class="recover-title">回复</span>
        <div class="vux-1px-b recover-bottom"></div>
        <ul>
          <li class="vux-1px-b recover-item-container" v-for="(item, index) in recoverList" :key="index">
            <div class="recover-detail">
              <img :src="item.avatar" class="avatar" alt="">
              <div class="detail-container">
                <span class="name">{{ item.name }}</span>
                <span class="time">{{ item.time }}</span>
                <span class="detail-content">{{ item.content }}</span>
              </div>
            </div>

          </li>
        </ul>
        <div class="recover-content">
          <input class="content" v-model="recoverContent" placeholder="请输入回复内容"></input>
          <button class="send" @click="send">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem, XInput, Group} from 'vux'
  export default{
    name: 'planDetail',
    data () {
      return {
        recoverContent: '',
        recoverList: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '李明友',
            content: '有什么具体要求吗',
            time: '13:00'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '张俊明',
            content: '按照惯例来做',
            time: '13:00'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '李明友',
            content: '有什么具体要求吗',
            time: '13:00'
          }
        ]
      }
    },
    components: {
      XHeader,
      Tab,
      TabItem,
      XInput,
      Group
    },
    methods: {
      send () {
        console.log(this.content)
      },
      showAllFile () {
        this.$router.push({
          name: 'attachmentList'
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .plan-detail-wrapper{
    height: 100%;
    overflow: hidden;
    .plan-detail-container{
      height: 610px;
      overflow-y: auto;
      .content-container{
        width: 326px;
        padding: 15px;
        margin: 10px auto 0px auto;
        background-color: #fff;
        position: relative;
        .title {
          font-size: 14px;
          font-weight: 700;
          display: inline-block;
          margin-top: 10px;
        }
        .status{
          position: absolute;
          top: 25px;
          right: 10px;
          color: #fcf;
        }
        .content{
          padding: 0px;
          margin-top: 20px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .time{
          display: inline-block;
          margin-top: 8px;
        }
        .button{
          background-color: #fff;
          border: 1px solid #0099ff;
          color: #0099ff;
          padding: 3px 10px;
          border-radius: 5px;
          position: absolute;
          right: 15px;
          top: 160px;
        }
        .file{
          margin-top: 20px;
          color: #aaa;
          .file-icon{
            vertical-align: top;
          }
        }
        .plan-creator {
          margin-top: 20px;
          margin-bottom: 15px;
          font-size: 14px;
          font-weight: 600;
          .avatar{
            width: 30px;
            height: 30px;
            vertical-align: middle;
            margin-right: 20px;
          }
        }
        .create-time{
          position: absolute;
          right: 20px;
          bottom: 40px;
          color: #aaa;
        }


      }
      .recover-container{
        width: 326px;
        padding: 5px 15px 15px 15px;
        background-color: #fff;
        margin: 10px auto 0 auto;
        position: relative;
        .recover-title{
          width: 60px;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          color: #0099ff;
          font-size: 15px;
          font-weight: 600;
          border-bottom: 2px solid #0099ff;
          text-align: center;
        }
        .recover-bottom{
          background-color: #aaa;
          width: 262px;
          height: 1px;
          position: absolute;
          top: 35px;
          left: 75px;
        }
        .recover-item-container{
          height: 70px;
          padding: 20px;
          .recover-detail{
            margin-bottom: 20px;
            position: relative;
            color: #aaa;
            .avatar{
              height: 40px;
              width: 40px;
              vertical-align: top;
              margin-right: 10px;
            }
            .detail-container{
              display: inline-block;
              .name {
                font-size: 14px;
                color: #888;
                display: block;
              }
              .time{
                position: absolute;
                right: 0px;
                top: 10px;
              }
              .detail-content{
                display: inline-block;
                margin-top: 20px;
                color: #000;
              }
            }

          }
          .content{
            margin-left: 40px;
          }
        }
        .recover-content{
          margin-top: 20px;
          margin-bottom: 20px;
          .content{
            height: 25px;
            line-height: 25px;
            font-size: 14px;
            width: 230px;
            border-radius: 4px;
            box-shadow: none;
            padding: 0px;
            border-width: 1px;
            &:focus{
              outline: #0099ff auto 5px
            }
          }
          .send{
            margin-left: 20px;
            padding: 5px 15px;
            border-radius: 4px;
            border: none;
            background-color: #0099ff;
            color: #fff;
          }
        }
      }
    }
  }
</style>
