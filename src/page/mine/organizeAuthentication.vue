<template>
  <div class="organize-authenticate-wrapper">
    <x-header title="组织认证" class="header">
    </x-header>
    <group :gutter="0" class="content-container">
      <x-input
        title="统一社会信用码"
        placeholder="请输入"
        show-clear placeholder-align="right"
        text-align="right"
        v-model="creditCode"
      ></x-input>
      <x-input
        title="企业名称"
        placeholder="请输入"
        show-clear placeholder-align="right"
        text-align="right"
        v-model="enterpriseName"
      ></x-input>
      <cell>
        <span slot="title">资质证明<span style="color: #aaa">(请上传营业执照原件照片)</span></span>
      </cell>
      <div class="authentication-container vux-1px-t">
        <img class="img-style" v-for="(item, index) in imgList" :key="index" :src="item.image" alt="">
        <img class="img-style" src="../../assets/default_img.png" @click="upLoadImg">
      </div>
    </group>
    <actionsheet v-model="showUploadChoose" :menus="menusList" @on-click-menu="showAction" show-cancel></actionsheet>
    <button class="btn" :class="creditCode.length > 0 && enterpriseName.length > 0 && imgList.length > 0 ? 'submit': ''" @click="submitCertificate">提交</button>
  </div>
</template>
<script>
  import {XHeader, Group, Cell, XInput, Actionsheet} from 'vux'
  export default {
    name: 'organizeAuthenticate',
    components: {
      XHeader,
      Group,
      Cell,
      XInput,
      Actionsheet
    },
    data () {
      return {
        creditCode: '',
        enterpriseName: '',
        showUploadChoose: false,
        imgList: [
          {
            image: require('../../assets/yingyezhizhao.png')
          },
          {
            image: require('../../assets/yingyezhizhao.png')
          }
        ],
        menusList: [
          {
            label: '拍照'
          },
          {
            label: '相册'
          }
        ]
      }
    },
    methods: {
      upLoadImg () {
        console.log('upLoadImg')
        this.showUploadChoose = true
      },
      submitCertificate () {
        console.log(this.creditCode)
        console.log(this.enterpriseName)
        console.log(this.imgList)
      },
      showAction (key, item) {
        console.log('show action')
        console.log(item)
      }
    }
  }
</script>
<style scoped lang="less">
  .organize-authenticate-wrapper{
    height:100%;
    overflow: hidden;
    font-size: 13px;
    font-weight: 100;
    position: relative;
    .authentication-container{
      width: 100%;
      height: 200px;
      padding-left: 30px;
      .img-style{
        width: 106px;
        height: 156px;
      }
    }
    .btn{
      width: 355px;
      height: 45px;
      line-height: 45px;
      background-color: #ccc;
      border: none;
      border-radius: 4px;
      position: absolute;
      left: 10px;
      bottom: 20px;
      color: #fff;
      &.submit{
        background-color: #0099ff;
      }

    }

  }
</style>
