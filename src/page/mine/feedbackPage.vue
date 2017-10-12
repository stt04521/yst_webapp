<template>
  <div class="feedback-page-wrapper">
    <x-header title="意见反馈"></x-header>
    <group :gutter="0" class="text-container">
      <x-textarea v-model="feedbackInfo" class="text-font" :max="1000" :height="187" placeholder="请输入您的意见或反馈" show-counter></x-textarea>
    </group>
    <group :gutter="0" class="text-container">
      <x-input class="text-font" v-model="email" placeholder="请输入您的邮箱或者手机号"></x-input>
    </group>
    <x-button class="submit-btn" type="primary" @click.native="submit">提交</x-button>
  </div>
</template>
<script>
  import {XHeader, Group, XTextarea, XButton, XInput} from 'vux'
  export default {
    name: 'feedbackPage',
    components: {
      XHeader,
      Group,
      XTextarea,
      XButton,
      XInput
    },
    data () {
      return {
        email: '',
        feedbackInfo: ''
      }
    },
    methods: {
      submit () {
        console.log(this.email)
        console.log(this.feedbackInfo)
      }
    }
  }
</script>
<style scoped lang="less">
  .feedback-page-wrapper{
    height: 100%;
    overflow: hidden;
    .text-container{
      width: 355px;
      margin-left: 10px;
      margin-top: 10px;
      border: 1px solid #ccc;
      box-shadow: 1px 1px 3px #ccc;
      .text-font{
        font-size: 14px;
      }
    }
    .submit-btn {
      width: 355px;
      margin-left: 10px;
      background-color: #0099ff;
      margin-top: 80px;
    }
  }
</style>
