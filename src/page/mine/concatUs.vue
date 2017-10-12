<template>
  <div class="concat-us-wrapper">
    <x-header title="联系我们"></x-header>
    <div class="concat-us-container">
      <span class="title">您可以通过以下方式联系我们：</span>
      <span class="detail">客服电话：<span class="tel">027-8265&nbsp;1453</span></span>
      <span class="detail">企业邮箱： yuanshutongtech@163.com</span>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default{
    name: 'concatUs',
    components: {
      XHeader
    }
  }
</script>
<style scoped lang="less">
  .concat-us-wrapper{
    height: 100%;
    overflow: hidden;
    .concat-us-container{
      width: 100%;
      padding: 30px 10px;
      font-size: 15px;
      .title{
        display: block;
        margin-bottom: 20px;

      }
      .detail {
        display: inline-block;
        padding-left: 40px;
        .tel{
          color: #0099ff;
          font-size: 18px;
        }
      }
    }
  }
</style>
