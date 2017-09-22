<template>
  <div class="orgnize-apply-wrapper">
    <x-header title="上海某某某公司" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancleCreateSchedule">取消</span>-->
      <span slot="right" @click="toggle">创建</span>
    </x-header>
    <div class="f-use-container">
      <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
        <tab-item select>
          <router-link to="/work/organizeUse">组织应用</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/work/personalUse">个人应用</router-link>
        </tab-item>
      </tab>

    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default{
    name: 'orgnizeApply',
    components: {
      XHeader
    },
    methods: {
      toggle () {
        console.log('toggle')
      }
    }
  }
</script>
<style scoped lang="less">
  .orgnize-apply-wrapper{
    .header span{
      font-size: 17px;
      color: #fff;
    }
  }
</style>
