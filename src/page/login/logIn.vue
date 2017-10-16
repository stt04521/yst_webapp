<template>
  <div class="log-in-wrapper">
    <v-header :title="title"></v-header>
    <div  class="content-container">
      <group :gutter="0">
        <x-input title="title" v-model="username" placeholder ="请输入用户名/手机号" class="v-input">
          <img slot="label" src="../../assets/user.png" class="v-img"/>
        </x-input>
        <x-input title="title" v-model="password" placeholder="请输入密码" class="v-input">
          <img slot="label" src="../../assets/password.png" class="v-img"/>
        </x-input>
      </group>
      <div class="operate">
        <span @click="toRegistry">新用户注册</span>
        <span class="forget" @click="toForgetPsw">忘记密码</span>
      </div>
      <button class="login-btn" @click="login">登录</button>
      <div class="warning-msg" v-show="showWarning">
        <icon type="safe_warn" class="warning"></icon>
        <span>密码错误，请重新输入</span>
      </div>

    </div>


  </div>
</template>
<script>
  import {Group, XInput, Icon} from 'vux'
  import VHeader from './header'
  export default{
    name: 'registrySuccess',
    components: {
      VHeader,
      Group,
      XInput,
      Icon
    },
    data () {
      return {
        title: '登录',
        username: '',
        password: '',
        showWarning: false
      }
    },
    methods: {
      login () {
        let userInfo = {
          username: this.username,
          password: this.password
        }
        console.log(userInfo)
        let err = true
        if (err) {
          this.showWarning = true
        }
      },
      toRegistry () {
        this.$router.push({
          name: 'registry'
        })
      },
      toForgetPsw () {
        this.$router.push({
          name: 'forgetPassword'
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .log-in-wrapper{
    .content-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 300px;
      background-color: transparent;
      font-size: 12px;
      .v-input{
        font-size: 14px;
        .v-img{
          width: 20px;
          height: 20px;
          margin-right: 20px;
        }
      }
      .operate{
        padding: 10px;
        font-size: 13px;
        color: dodgerblue;
        .forget{
          float: right;
        }
      }
      .login-btn{
        background-color: #0099ff;
        border: none;
        padding: 10px 55px;
        border-radius: 5px;
        color: #fff;
        margin: 30px auto 0px auto;
        display: block;
      }
      .warning-msg{
        margin: 0 auto;
        width: 142px;
      }
    }
  }
</style>
