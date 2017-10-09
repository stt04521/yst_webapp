<template>
  <div class="personnel-task-wrapper">
    <x-header title="个人应用" class="header">
      <span slot="right" @click="toggle">切换</span>
    </x-header>
    <tab :line-width="1" custom-bar-width="60px" active-color="#108ee9">
      <tab-item select>
        <router-link to="/personnelTask/taskManage">应用管理</router-link>
      </tab-item>
      <tab-item>
        <router-link to="#">应用商店</router-link>
      </tab-item>
      <tab-item>
        <router-link to="#">应用升级</router-link>
      </tab-item>
    </tab>
    <router-view></router-view>
  </div>
</template>
<script>
import {XHeader, Tab, TabItem} from 'vux'
export default {
  name: 'personnelTask',
  components: {
    XHeader,
    Tab,
    TabItem
  },
  methods: {
    toggle () {
      console.log('toggle')
    }
  }
}
</script>
<style scoped lang='less'>
.personnel-task-wrapper{

}
</style>

