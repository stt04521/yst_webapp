<template>
  <div class="set-up-wrapper">
    <x-header title="设置"></x-header>
    <group :gutter="0" class="item-container">
      <cell title="帐号安全" is-link @click.native="showCountSafe"></cell>
    </group>
    <group :gutter="0" class="item-container">
      <x-switch title="wifi下自动下载安装包" v-model="isWifi"></x-switch>
      <x-switch title="接收新消息通知" v-model="isShowNews"></x-switch>
    </group>
    <group :gutter="0" class="item-container">
      <cell title="清空缓存" :value="cache"></cell>
      <cell title="关于" :value="version" is-link></cell>
    </group>
    <button class="log-out" @click="logOut">退出登录</button>
  </div>
</template>
<script>
  import {XHeader, Group, Cell, XSwitch} from 'vux'
  export default {
    name: 'setUp',
    components: {
      XHeader,
      Group,
      Cell,
      XSwitch
    },
    data () {
      return {
        isWifi: false,
        isShowNews: true,
        cache: '2.6M',
        version: 'V1.0'
      }
    },
    methods: {
      logOut () {
        this.$vux.loading.show({
          text: 'Loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 2000)
      },
      showCountSafe () {
        this.$router.push({
          name: 'countSafe'
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .set-up-wrapper{
    .item-container{
      margin-top: 10px;
    }
    .log-out{
      width: 100%;
      height: 45px;
      line-height: 45px;
      background-color: #fff;
      margin-top: 10px;
      border: none
    }
  }
</style>
