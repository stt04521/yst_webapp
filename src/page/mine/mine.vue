<template>
  <div class="mine-wrapper">
    <span class="title">元数通</span>
    <div class="mine-container">
      <div class="header-container">
        <img :src="defaultLogo" class="avatar" alt="" @click="showUserInfo">
        <span class="name">{{ myInfo.realName }}</span>
        <div class="organize" @click="selectOrganize">
          <span class="organize-name">{{ orTitle }}</span>
          <span class="triangle" :class="changeOrganize ? 'triangle-top' : 'triangle-bottom'"></span>
          <Popover ref="popGroup">
            <div slot="content" class="content">
              <span class="pop-item" v-for="(item, index) in chooseList" :key="index" @click="hidePop($event, item)">{{ item.organizeName }}</span>
            </div>
          </Popover>
        </div>

        <!--<selection-list :top="165" :dataList="selectionList" @toggle-model-show="selectOrganize" @change-item="changeorganize" :showModel="changeOrganize"></selection-list>-->
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
  import {mapActions} from 'vuex'
//  import selectionList from '../../components/selectionList'
  import Popover from '@/components/popover.vue'
  export default {
    name: 'mine',
    data () {
      return {
        myInfo: {},
        userAvatar: '',
        defaultLogo: require('../../assets/default_organize_logo.png'),
        orTitle: '个人',
        operateList: [
          {
            icon: require('../../assets/help.png'),
            title: '邀请好友',
            key: 'INVITE_FRIEND'
          },
          {
            icon: require('../../assets/help.png'),
            title: '加入组织',
            key: 'JOIN_ORGANIZE'
          },
          {
            icon: require('../../assets/help.png'),
            title: '创建群聊',
            key: 'CREATE_GROUP_CHAT'
          },
          {
            icon: require('../../assets/help.png'),
            title: '我的应用',
            key: 'MY_APPLY'
          },
          {
            icon: require('../../assets/help.png'),
            title: '我的订单',
            key: 'MY_ORDER_LIST'
          },
          {
            icon: require('../../assets/help.png'),
            title: '我的组织',
            key: 'MY_ORGANIZE'
          },
          {
            icon: require('../../assets/help.png'),
            title: '购物车',
            key: 'MY_PURCHASE_CART'
          }
        ],
        changeOrganize: false,
        chooseList: [{key: 0, organizeName: '个人'}]
      }
    },
    components: {
      Popover
    },
    methods: {
      ...mapActions([
        'GetMyInfo'
      ]),
      showUserInfo () {
        this.$router.push({
          name: 'personnelInfo'
        })
      },
      dealClick (item) {
        if (item.key === 'INVITE_FRIEND') {
          console.log('邀请好友')
        }
        if (item.key === 'JOIN_ORGANIZE') {
          console.log('加入组织')
        }
        if (item.key === 'CREATE_GROUP_CHAT') {
          console.log('创建群聊')
        }
        if (item.key === 'MY_APPLY') {
          console.log('我的应用')
        }
        if (item.key === 'MY_ORDER_LIST') {
          this.$router.push({
            name: 'orderList'
          })
        }
        if (item.key === 'MY_ORGANIZE') {
          this.$router.push({
            name: 'myOrganize'
          })
        }
        if (item.key === 'MY_PURCHASE_CART') {
          this.$router.push({
            name: 'shoppingCart'
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
        this.changeOrganize = true
        this.$refs['popGroup'].onShow()
      },
      hidePop (e, item) {
        e.cancelBubble = true
        this.changeOrganize = false
        this.$refs['popGroup'].onHide()
        this.orTitle = item.organizeName
      }
    },
    created () {
      let self = this
      self.GetMyInfo().then(res => {
        this.myInfo = res
        if (this.myInfo.portrait) {
          this.userAvatar = this.myInfo.portrait
        } else {
          this.userAvatar = require('../../assets/news/qq.png')
        }
        if (res.organizeId) {
          this.chooseList = this.chooseList.concat(res.organizeId)
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
        .organize {
          .vux-popover{
            background-color: #fff;
            color: #000;
            top: 165px;
            .vux-popover-arrow-up{
              border-bottom-color: #fff;
            }
            .content{
              padding: 0px;
              padding-top: 2px;
              padding-bottom: 2px;
              text-align: center;
              .pop-item{
                display: block;
                overflow: hidden;
                white-space: nowrap;
              }
            }
          }
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
        /*height: 396px;*/
        .operate-item{
          height: 62px;
          line-height: 63px;
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
