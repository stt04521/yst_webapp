<template>
  <div class="use-apply-wrapper">
    <div class="content-wrapper">
      <apply-show :dataList="alwaysUseList" :showAll="false" @click-single-task="dealClick"></apply-show>
    </div>
    <div class='use-apply-container' v-for='(item, index) in allApplyList' :key='index'>
      <div class='apply-title' >
        <span class='line'></span>
        <span class='title'>{{item.title}}</span>
      </div>
      <div class="content-wrapper">
        <apply-show :dataList="item.applyList" :showAll="false"></apply-show>
      </div>
    </div>

  </div>
</template>
<script>
  import applyShow from './applyShow.vue'
  export default {
    name: 'useApply',
    props: {
      alwaysUseList: {
        type: Array,
        default: []
      },
      allApplyList: {
        type: Array,
        default: [
          {
            title: 'have no application',
            applyList: []
          }
        ]
      }
    },
    components: {
      applyShow
    },
    methods: {
      dealClick (item) {
        console.log('item:', item.title)
        console.log(item)
      }
    }
  }
</script>
<style scoped lang="less">
  .use-apply-wrapper{
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
