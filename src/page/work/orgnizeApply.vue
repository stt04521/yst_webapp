<template>
  <div class="orgnize-apply-wrapper">
    <x-header title="上海某某某公司" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancleCreateSchedule">取消</span>-->
      <span slot="right" @click="toggle">创建</span>
    </x-header>
    <div class="f-use-container">
      <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
        <tab-item select>
          <router-link to="/orgnizeApply/organizeUse">组织应用</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/orgnizeApply/personalUse">个人应用</router-link>
        </tab-item>
      </tab>
      <div>
        <router-view :alwaysUseList='alwaysUseList' :allApplyList='personalList'></router-view>
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
        alwaysUseList: [
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
      toggle () {
        console.log('toggle')
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
  }
</style>
