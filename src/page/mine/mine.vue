<template>
  <div class="mine-wrapper">
    <span class="title">元数通</span>
    <div class="mine-container">
      <div class="header-container">
        <img :src="myInfo.portrait ? baseurl + myInfo.portrait : defaultLogo" class="avatar" @click="showUserInfo">
        <span class="name">{{ myInfo.realName }}</span>
        <span class="organize-name">{{ orTitle }}</span>
      </div>
      <ul class="operate-container">
        <li class="operate-item" v-for="(item, index) in operateList" :key="index" @click="dealClick(item)">
          <!--<img :src="item.icon" class="operate-icon" alt="">-->
          <i :class="item.class" class="iconfont operate-icon"></i>
          <span class="item-title">{{ item.title }}</span>
        </li>
      </ul>
      <div class="footer-container">
        <div class="footer-item" @click="setUp">
          <i class="iconfont icon-iconshezhi01 footer-icon"></i>
          <span class="footer-title">设置</span>
        </div>
        <div class="footer-item" @click="help">
          <i class="iconfont icon-bangzhu footer-icon"></i>
          <span class="footer-title">帮助与反馈</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'mine',
    data () {
      return {
        myInfo: {},
        baseurl: 'http://192.168.0.12:7000',
        userAvatar: '',
        defaultLogo: require('../../assets/default_organize_logo.png'),
        orTitle: '个人',
        operateList: [
          {
            class: 'icon-jia-b',
            title: '邀请好友',
            key: 'INVITE_FRIEND'
          },
          {
            class: 'icon-qiye',
            title: '加入组织',
            key: 'JOIN_ORGANIZE'
          },
          {
            class: 'icon-liaotian',
            title: '创建群聊',
            key: 'CREATE_GROUP_CHAT'
          },
          {
            class: 'icon-yingyong',
            title: '应用商店',
            key: 'PURCHASE_APPLY'
          },
          {
            class: 'icon-yingyong1',
            title: '个人应用',
            key: 'SINGLE_APPLY'
          },
          {
            class: 'icon-dingdan',
            title: '我的订单',
            key: 'MY_ORDER_LIST'
          },
          {
            class: 'icon-zuzhi',
            title: '我的组织',
            key: 'MY_ORGANIZE'
          },
          {
            class: 'icon-gouwuche',
            title: '购物车',
            key: 'MY_PURCHASE_CART'
          }
        ]
      }
    },
    methods: {
      ...mapActions([
        'getMyInfoAction'
      ]),
      showUserInfo () {
        this.$router.push({
          name: 'personnelInfo'
        })
      },
      dealClick (item) {
        switch (item.key) {
          case 'INVITE_FRIEND':
            this.$router.push({
              name: 'invitingFriends'
            })
            break
          case 'JOIN_ORGANIZE':
            this.$router.push({
              path: 'SearchBuddy/joinOrganize'
            })
            break
          case 'CREATE_GROUP_CHAT':
            this.$router.push({
              name: 'CreateGroupChat'
            })
            break
          case 'PURCHASE_APPLY':
            this.$router.push({
              name: 'applyStore'
            })
            break
          case 'SINGLE_APPLY':
            this.$router.push({
              name: 'showAllApply',
              query: {
                paramData: {
                  id: this.myInfo.userId,
                  title: '个人应用'
                }
              }
            })
            break
          case 'MY_ORDER_LIST':
            this.$router.push({
              name: 'orderList'
            })
            break
          case 'MY_ORGANIZE':
            this.$router.push({
              name: 'myOrganize'
            })
            break
          case 'MY_PURCHASE_CART':
            this.$router.push({
              name: 'shoppingCart'
            })
            break
          default:
            console.log('出错啦')
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
      }
    },
    created () {
      let self = this
      self.getMyInfoAction().then(res => {
        this.myInfo = res
        if (this.myInfo.portrait) {
          this.userAvatar = this.myInfo.portrait
        } else {
          this.userAvatar = require('../../assets/news/qq.png')
        }
      })
    }
  }
</script>
<style lang="less">

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
        height: 429px;
        display: flex;
        flex-direction: column;
        .operate-item{
          flex: 1;
          padding-left: 30px;
          font-size: 16px;
          font-weight: 100;
          display: flex;
          align-items: center;
          .operate-icon{
            vertical-align: middle;
            margin-right: 30px;
            font-size: 24px;
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
          margin-left: 25px;
          .footer-icon{
            vertical-align: middle;
            font-size: 24px;
            margin-right: 5px;
          }
          .title{}
        }
      }
    }

  }
</style>
