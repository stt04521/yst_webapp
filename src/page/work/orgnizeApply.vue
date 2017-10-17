<template>
  <div class="orgnize-apply-wrapper">
    <x-header title="上海某某某公司" class="header">
    </x-header>
    <div class="f-use-container">
      <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
        <tab-item selected>
          <router-link to="/orgnizeApply/organizeUse">组织应用</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/orgnizeApply/personalUse">个人应用</router-link>
        </tab-item>
      </tab>
      <div>
        <router-view :alwaysUseList='alwaysUseList' :allApplyList='personalList' @deal-click="showList"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem} from 'vux'
  export default{
    name: 'orgnizeApply',
    components: {
      XHeader,
      Tab,
      TabItem
    },
    data () {
      return {
        showModel: false,
        alwaysUseList: [
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '任务'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '任务'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '组织应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '组织应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '组织应用'
          }
        ],
        personalList: [
          {
            title: '财务管理',
            applyList: [
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              },
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              },
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              },
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              },
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              },
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              },
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              },
              {
                image: require('../../assets/news/userImg.jpg'),
                title: '任务'
              }
            ]
          }
        ]
      }
    },
    methods: {
      showList (item) {
        if (item.title.indexOf('计划') > -1) {
          this.$router.push({
            name: 'planList'
          })
        }
        if (item.title.indexOf('任务') > -1) {
          this.$router.push({
            name: 'taskList'
          })
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .orgnize-apply-wrapper{
    height: 100%;
    overflow: hidden;
    .header span{
      font-size: 17px;
      color: #fff;
    }
    .list-container {
      .choose-organize{
        z-index: 3;
        position: absolute;
        top: 45px;
        background-color: #fff;
        text-align: center;
        font-size: 16px;
        width: 100%;
        .status-item{
          height: 45px;
          line-height: 45px;
        }
      }
      .bg-color{
        width:100%;
        height: 100%;
        background-color: rgba(7,17,27,0.7);
        position: absolute;
        top: 45px;
        right: 0px;
        z-index:2;
      }
    }
  }
</style>
