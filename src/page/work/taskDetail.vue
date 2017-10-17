<template>
  <div class="task-detail-wrapper">
    <x-header title="任务"></x-header>
    <div class="content-wrapper">
      <div class="content-container">
        <div class="task-creator">
          <img class="avatar" src="../../assets/news/userImg.jpg" alt="">
          <div class="detail">
            <span class="creator">我发出的</span>
            <span class="time">13:00</span>
            <span class="status">正在进行</span>
          </div>
        </div>
        <div class="task-content">
          完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字完成多行文字
        </div>
        <span class="time">开始时间： 2017-7-26 18：00</span>
        <span class="time">截止时间： 2017-7-26 18：00</span>
      </div>
      <div class="participator-container">
        <div class="title-container">
          <span class="title">任务相关人员</span>
          <span class="show-all" @click="showAll">查看全部>></span>
        </div>
        <ul>
          <!--这里最多只显示三个人，数据需要做处理-->
          <li class="item-container" v-for="(item, index) in list" :key="index">
            <img :src="item.avatar" class="avatar">
            <span>{{ item.name }}</span>
          </li>
        </ul>
        <div class="show-all-file">
          <img src="../../assets/addFile.png" class="add-file">
          <span class="title" @click="showAllFile">查看所有附件</span>
        </div>

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
  import {XHeader} from 'vux'
  export default {
    name: 'taskDetail',
    components: {
      XHeader
    },
    data () {
      return {
        list: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '王明友'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: 'zhangsan'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: 'lishi'
          }
        ],
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
        ],
        recoverContent: ''
      }
    },
    methods: {
      send () {
        console.log(this.recoverContent)
      },
      showAll () {
        this.$router.push({
          name: 'aboutTask'
        })
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
  .task-detail-wrapper{
    height: 100%;
    overflow: hidden;
    .content-wrapper {
      height: 610px;
      overflow-y: auto;
      .content-container{
        width: 333px;
        margin: 10px auto;
        background-color: #fff;
        padding: 20px 10px;
        .task-creator{
          position: relative;
          .avatar{
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
          .detail {
            display: inline-block;
            margin-left: 20px;
            .creator{
              display: block;
              font-weight: 700;
            }
            .time{}
            .status{
              position: absolute;
              top: 10px;
              right: 5px;
              color: #f00;
            }
          }
        }
        .task-content{
          margin-top: 20px;
        }
        .time{
          display: inline-block;
          margin-top: 10px;
        }
      }
      .participator-container{
        width: 333px;
        margin: 10px auto;
        background-color: #fff;
        padding: 20px 10px;
        .title-container{
          height: 32px;
          line-height: 32px;
          position: relative;
          .title{
            font-weight: 700;
            font-size: 14px;
            color: #888
          }
          .show-all{
            position: absolute;
            top: 0px;
            right: 0px;
            color: #0099ff;
            font-size: 13px;
          }
        }
        .item-container {
          height: 60px;
          line-height: 60px;
          font-size: 14px;
          .avatar{
            width: 40px;
            height: 40px;
            vertical-align: middle;
            margin-right: 20px;
          }

        }
        .show-all-file{
          margin-top: 10px;
          .add-file{
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 10px;
          }
          .title{
            color: #0099ff;
          }
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
