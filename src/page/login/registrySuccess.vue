<template>
  <div class="registry-success-wrapper">
    <span class="jump-out" @click='jumpOut'>跳过</span>    
    <div class="registry-container">
      <icon type="success" is-msg class="icon-style"></icon>
      <div>注册成功</div>
      <div class="title">为了保证平台用户的真实性</div>
      <div class="name">已有569324人完成认证</div>
      <div class="identificate" @click="toIdentificate">去认证>></div>
    </div>
  </div>
</template>
<script>
  import {Icon} from 'vux'
  export default{
    name: 'registrySuccess',
    components: {
      Icon
    },
    methods: {
      jumpOut () {
        console.log('jump out')
      },
      toIdentificate () {
        console.log('to identificate')
      }
    }
  }
</script>
<style scoped lang="less">
  .registry-success-wrapper{
    height: 100%;
    width: 100%;
    overflow: hidden;
    .registry-container{
      width: 200px;
      margin: 40px auto;
      text-align: center;
      font-size: 16px;
      .icon-style{
        margin-bottom: 10px;
      }
      .title{
        margin-top: 40px;
        color: #aaa;
        font-size: 14px;
      }
      .name{
        color: #aaa;
        font-size: 14px;
        margin-bottom: 40px;
      }
      .identificate{
        font-size: 18px;
        color: #0099ff;

      }
    }
    .jump-out{
      position: absolute;
      top: 10px;
      right: 10px;
      color: #0099ff;
    }
  }
</style>
