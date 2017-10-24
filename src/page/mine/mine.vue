<template>
  <div class="mine-wrapper">
    <span class="title">元数通</span>
    <div class="mine-container">
      <div class="header-container">
        <img src="../../assets/news/userImg.jpg" class="avatar" alt="">
        <span class="name">李明友</span>
        <div class="organize" @click="selectOrganize">
          <span class="organize-name">武汉黎宁游科技有限公司</span>
          <span class="triangle" :class="changeOrganize ? 'triangle-top' : 'triangle-bottom'"></span>
        </div>
      </div>
      <ul class="operate-container">
        <li class="operate-item" v-for="(item, index) in operateList" :key="index" @click="dealClick(item)">
          <img :src="item.icon" class="operate-icon" alt="">
          <span class="item-title">{{ item.title }}</span>
        </li>
      </ul>
      <div class="footer-container">
        <div class="footer-item" @click="setUp">
          <img class="footer-icon" src="../../assets/set_up.png" alt="">
          <span class="footer-title">设置</span>
        </div>
        <div class="footer-item" @click="help">
          <img class="footer-icon" src="../../assets/help.png" alt="">
          <span class="footer-title">帮助与反馈</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mine',
    data () {
      return {
        operateList: [
          {
            icon: require('../../assets/help.png'),
            title: '邀请好友'
          },
          {
            icon: require('../../assets/help.png'),
            title: '加入组织'
          },
          {
            icon: require('../../assets/help.png'),
            title: '创建群聊'
          },
          {
            icon: require('../../assets/help.png'),
            title: '我的应用'
          },
          {
            icon: require('../../assets/help.png'),
            title: '我的订单'
          },
          {
            icon: require('../../assets/help.png'),
            title: '我的组织'
          },
          {
            icon: require('../../assets/help.png'),
            title: '购物车'
          }
        ],
        changeOrganize: false
      }
    },
    methods: {
      dealClick (item) {
        // console.log(item.title)
        if (item.title === '我的订单') {
          this.$router.push({
            name: 'orderList'
          })
        }
        if (item.title === '我的组织') {
          this.$router.push({
            name: 'myOrganize'
          })
        }
      },
      setUp () {
        console.log('set up')
        this.$router.push({
          name: 'setUp'
        })
      },
      help () {
        this.$router.push({
          name: 'feedback'
        })
        console.log('help')
      },
      selectOrganize () {
        this.changeOrganize = !this.changeOrganize
      }
    }
  }
</script>
<style scoped lang="less">
  .mine-wrapper{
    height: 100%;
    overflow: hidden;
    color: #fff;
    font-size: 15px;
    .title{
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 17px;
      color: #fff;
    }
    .mine-container{
      height: 100%;
      padding-top: 40px;
      .header-container{
        padding-top: 20px;
        text-align: center;
        .avatar{
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
        .name{
          display: block;
          margin-top: 5px;
        }
        .organize-name{
          font-size: 13px;
          font-weigh: 100;
        }
        .triangle{
          display: inline-block;
          vertical-align: middle;
          margin-left: 5px;
        }
        .triangle-top{
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
        }
        .triangle-bottom{
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 7px solid #fff;
        }
      }
      .operate-container{
        height: 396px;
        .operate-item{
          height: 62px;
          line-height: 62px;
          padding-left: 30px;
          font-size: 16px;
          font-weight: 100;
          .operate-icon{
            vertical-align: middle;
            margin-right: 30px;
          }
          .operate-title{}
        }

      }
      .footer-container{
        height: 50px;
        line-height: 50px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        .footer-item{
          display: inline-block;
          margin-left: 30px;
          .footer-icon{
            vertical-align: middle;
          }
          .title{}
        }
      }
    }

  }
</style>
