<template>
  <div class="personal-apply-wrapper">
    <x-header :title="headerTitle" class="header">
    </x-header>
    <use-apply :alwaysUseList='alwaysUseList' :allApplyList='personalList' @deal-click="dealClick"></use-apply>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import applyShow from './applyShow.vue'
  import useApply from './useApply.vue'
  export default{
    name: 'showAllApply',
    components: {
      XHeader,
      applyShow,
      useApply
    },
    data () {
      return {
        showModel: false,
        headerTitle: '个人应用',
        alwaysUseList: [
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
            title: '任务'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
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
      dealClick (item) {
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
    },
    created () {
      let queryData = this.$route.query.paramData
      this.headerTitle = queryData.title
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
