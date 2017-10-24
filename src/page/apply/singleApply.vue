<template>
  <div class="single-apply-wrapper">
    <x-header :title="pageTitle">
      <span slot="right" @click="toggleModelShow">切换</span>
    </x-header>
    <tab class="tab-container">
      <tab-item selected>
        <router-link :to="{name: 'applyAdministration',params: {isDelete: true}}">应用管理</router-link>
      </tab-item>
      <tab-item :to="{name: 'applyStore',params: {isDelete: false}}">应用商店</tab-item>
      <tab-item :to="{name: 'applyUpdate'}">应用升级</tab-item>
    </tab>
    <div class="content-wrapper" :style="{height: height + 'px'}">
      <!--<router-view></router-view>-->
      <!--<block-item :isDelete="true"></block-item>-->
      <apply-update></apply-update>
    </div>
    <selection-list :dataList="selectionList" @toggle-model-show="toggleModelShow" @change-item="changeOrganize" :showModel="showModel"></selection-list>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem} from 'vux'
  import blockItem from '@/components/blockItem'
  import selectionList from '@/components/selectionList'
  import applyUpdate from './applyUpdate.vue'
//  import {eventBus} from '../../eventBus'
  export default {
    name: 'singleApply',
    components: {
      XHeader,
      Tab,
      TabItem,
      blockItem,
      selectionList,
      applyUpdate
    },
    data () {
      return {
        pageTitle: '个人应用',
        height: 0,
        showModel: false,
        selectionList: [{key: '0', value: '组织01'}, {key: '1', value: '组织02'}, {key: '2', value: '组织03'}, {key: '3', value: '个人应用'}]

      }
    },
    methods: {
      toggleModelShow () {
        this.showModel = !this.showModel
      },
      changeOrganize (item) {
        this.pageTitle = item.value
        this.toggleModelShow()
        // 点击选择组织和个人之后，获取数据，刷新页面
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 83
      console.log(this.isDelete)
    }
  }
</script>
<style scoped lang="less">
  .single-apply-wrapper{
    height: 100%;
    overflow: hidden;
    .tab-container{
      height: 37px;
      line-height: 37px;
    }
    .content-wrapper {
      overflow-y: auto;
    }
  }
</style>
