<template>
  <div class="apply-update-wrapper">
    <apply-item :dataList="list" :isShowBtn="true"></apply-item>
  </div>
</template>
<script>
  import applyItem from './applyItem'
  export default {
    name: 'applyUpdate',
    data () {
      return {
        list: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 0,
            rater: 4
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 1,
            rater: 1
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 200,
            rater: 2
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 0,
            rater: 3
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 0,
            rater: 5
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 0,
            rater: 3
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 0,
            rater: 5
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 0,
            rater: 3
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 0,
            rater: 5
          }
        ]
      }
    },
    components: {
      applyItem
    }
  }
</script>
<style scoped lang="less">
  .apply-update-wrapper {

  }
</style>
