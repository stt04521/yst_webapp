<template>
  <div class="personal-apply-wrapper">
    <x-header title="个人应用" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancleCreateSchedule">取消</span>-->
      <span slot="right" @click="toggle">切换</span>
    </x-header>
    <use-apply :alwaysUseList='alwaysUseList' :allApplyList='personalList'></use-apply>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import applyShow from './applyShow.vue'
  import useApply from './useApply.vue'
  export default{
    name: 'personalApply',
    components: {
      XHeader,
      applyShow,
      useApply
    },
    data () {
      return {
        alwaysUseList: [
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '常用应用'
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
  .personal-apply-wrapper{
    .header span{
      color: #fff;
      font-size: 17px;
    }
    .apply-title{
      margin-left: 10px;
      .line {
        width: 2px;
        height: 13px;
        display: inline-block;
        background-color: #09f;
        margin-right: 10px;
      }
      .title {
        color: #aaa;
        font-size: 14px;
      }
    }
  }
</style>
