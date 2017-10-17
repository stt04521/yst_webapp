<template>
  <div class="about-task-wrapper">
    <x-header title="任务相关人员" class="header">
      <span slot="right" @click="addMember">+添加成员</span>
    </x-header>
    <tab active-color="#0099ff" class="tab-container">
      <tab-item selected class="tab-item">执行</tab-item>
      <tab-item class="tab-item">审核</tab-item>
      <tab-item class="tab-item">参与</tab-item>
      <tab-item class="tab-item">责任人</tab-item>
    </tab>
    <div class="content-container">
      <ul>
        <li class="item-container" v-for="(item, index) in dataList" :key="index">
          <img :src="item.avatar" alt="" class="avatar">
          <span class="name">{{ item.name }}</span>
          <div class="show-more-container">
            <img src="../../assets/more.png" @click="toggleShow(index)" v-show="showMore"/>
            <Popover ref="popGroup">
              <div slot="content" class="content">
                <span @click="toPlanList">查看计划</span>
                <span style="color: #0099ff" @click="toCreatePlan">做计划</span>
                <span style="color: #ff0000" @click="deleteTask">删除</span>
              </div>
            </Popover>
          </div>

          <span class="right-operate delete" v-show="showDelete">删除</span>
        </li>
      </ul>
      <button class="show-all" @click="showAll">查看全部计划</button>

    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem} from 'vux'
  import Popover from '@/components/popover.vue'
  export default {
    name: 'aboutTask',
    data () {
      return {
        showDelete: false,
        showMore: true,
        isShowSelect: false,
        dataList: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '李明友'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '123'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '张茜'
          }
        ],
        list: [{key: '1', value: '查看计划'}, {key: '2', value: '做计划'}, {key: '2', value: '删除'}]
      }
    },
    components: {
      XHeader,
      Tab,
      TabItem,
      Popover
    },
    methods: {
      addMember () {
        console.log('add member')
        // 带上必要参数，跳转的页面是一个公共组件
        this.$router.push({path: '/chooseMember'})
      },
      showAll () {
        console.log('show all')
      },
      toggleShow (index) {
        this.$refs['popGroup'][index].onShow()
      },
      toPlanList () {
        this.$router.push({
          name: 'planList'
        })
      },
      toCreatePlan () {
        this.$router.push({
          name: 'createPlan'
        })
      },
      deleteTask () {
        console.log('delete task')
      }
    }
  }
</script>
<style  lang="less">
  .vux-popover{
    color: #000;
    background-color: #fff;
  }
  .about-task-wrapper{
    height: 100%;
    overflow: hidden;
    .header span{
      color: #fff;
      font-size: 16px;
    }
    .tab-container{
      height: 41px;
      line-height: 41px;
      .tab-item{
        height: inherit;
        line-height: inherit;
      }
    }
    .content-container{
      height: 100% ;
      .item-container{
        height: 100%;
        width: 336px;
        padding: 10px;
        margin: 10px auto 0 auto;
        background-color: #fff;
        font-size: 14px;
        position: relative;
        .avatar{
          width: 40px;
          height: 40px;
          vertical-align: middle;
          margin-right: 20px;
        }
        .name{

        }
        .show-more-container{
          position: absolute;
          top: 15px;
          right: 22px;
          .vux-popover{
            background-color: rgba(7, 17, 27, 0.5);
            color: #000;
            top: 24px;
            .vux-popover-arrow-up{
              border-bottom-color: rgba(7, 17, 27, 0.5);
            }
            .content{
              padding: 0px;
              padding-top: 2px;
              padding-bottom: 2px;
              width: 60px;
              text-align: center;
            }
          }
          /*.content{*/
            /*!*background-color: #fff;*!*/
            /*!*color: #000;*!*/
          /*}*/
          /*.vux-popover{*/
            /*position: absolute;*/
            /*width: 85px;*/
            /*left: 0%;*/
            /*top: 0.8rem;*/
            /*right: -7px;*/
            /*background-color: #EFEFF4;*/
            /*color: #333333;*/
            /*-webkit-transform: translateX(-78%);*/
            /*transform: translateX(-78%);*/
            /*border-radius: 3PX;*/
            /*z-index: 500;*/
            /*padding: 0.26667rem;*/
            /*.vux-popover-arrow-up{*/
              /*left: 85%;*/
              /*border-bottom: 5PX solid #EFEFF4;*/
            /*}*/
            /*img{*/
              /*height: 14px;*/
              /*margin: 0 3px;*/
            /*}*/
          /*}*/
        }
        .delete{
          color: #f00;
        }
      }
      .show-all {
        width: 135px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        background-color: #0099ff;
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
