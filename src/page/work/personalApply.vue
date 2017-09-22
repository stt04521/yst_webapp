<template>
  <div class="personal-apply-wrapper">
    <x-header title="上海某某某公司" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancleCreateSchedule">取消</span>-->
      <span slot="right" @click="toggle">创建</span>
    </x-header>
    <div class="content-wrapper">
      <apply-show :dataList="personalList" :showAll="false"></apply-show>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import applyShow from './applyShow.vue'
  export default{
    name: 'personalApply',
    components: {
      XHeader,
      applyShow
    },
    data () {
      return {
        personalList: [
          {
            image: require('../../assets/feiji.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00'
          },
          {
            image: require('../../assets/qianbi.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00'
          },
          {
            image: require('../../assets/money.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00'
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
  }
</style>
