<template>
  <div class="registry-success-wrapper">
    <div class="registry-container">
      <icon type="success" is-msg></icon>
      <span>注册成功</span>
    </div>
    <span class="jump-out">跳过</span>
    <div class="content-container">
      <span>为了保证平台用户的真实性</span>
      <span>已有569324人完成认证</span>
      <span>去认证>></span>
    </div>

  </div>
</template>
<script>
  import {Icon} from 'vux'
  export default{
    name: 'registrySuccess',
    components:{
      Icon
    }
  }
</script>
<style scoped lang="less">
  .registry-success-wrapper{
    height: 100%;
    width: 100%;
    position: relative;
  }
</style>
