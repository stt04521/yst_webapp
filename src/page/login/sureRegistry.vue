<template>
  <div class="registry-container">
    <v-header :title="title"></v-header>
    <div class="content-container">
      <group :gutter="0">
        <x-input v-model="username" placeholder="用户名（请输入6-18个字母或数字）" :is-type="userRule" class="v-input" :required="true" ref="username">
        </x-input>
        <x-input v-model="password" placeholder="密码（6-18位，区分大小写）" class="v-input" :required="true" :min="6" :max="18" :type="vCodeType?'text':'password'" ref="password">
          <img slot="right" :src="require(vCodeType?'@/assets/login/show.jpg':'@/assets/login/hidden.jpg')" width="20" @click="changeVcode">
        </x-input>
      </group>
      <input type="checkbox" /><span>我同意并接受《服务协议》</span>
      <button class="next-step" @click="nextStep">下一步</button>
    </div>
  </div>

</template>
<script>
  import VHeader from './header'
  import {Group, XInput, XButton} from 'vux'
  import Radio from '../../../node_modules/vux/src/components/radio/index'
  import { mapActions } from 'vuex'
  export default {
    name: 'registry',
    data () {
      return {
        title: '注册',
        userRule: function (value) {
          return {
            valid: /^[a-zA-Z0-9]{6,18}$/.test(value),
            msg: '请输入6-18个字母或数字'
          }
        },
        username: '',
        password: '',
        vCodeType: false,
        sendCode: '获取验证码',
        isSendCode: false,
        waitTime: 60
      }
    },
    components: {
      Radio,
      VHeader,
      Group,
      XInput,
      XButton
    },
    methods: {
      ...mapActions([
        'Register'
      ]),
      changeVcode () {
        this.vCodeType = !this.vCodeType
      },
      nextStep () {
        let self = this
        let registryInfo = {
          user: this.username,
          password: this.password,
          phone: this.$route.query.tel
        }
        if (!self.$refs.password.valid || !self.$refs.username.valid) {
          self.$vux.toast.text('请填写正确信息')
          return false
        }
        this.Register(registryInfo).then(() => {
          self.$router.push({
            name: 'registrySuccess'
          })
        })
      },
      sendVCode () {
        this.isSendCode = true
        if (this.isSendCode) {
          this.sendCode = '重新获取(' + this.waitTime + '秒)'
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .registry-container{
    .content-container{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 300px;
      background-color: transparent;
      .v-input{
        font-size: 14px;
        padding-left: 10px;
        .title-slot{
          display: inline-block;
          padding: 0px 10px 0px 10px
        }
      }
      .next-step{
        background-color: #0099ff;
        border: none;
        padding: 10px 55px;
        border-radius: 5px;
        color: #fff;
        margin: 30px auto 0px auto;
        display: block;
      }
    }
  }
</style>
