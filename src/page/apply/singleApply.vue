<template>
  <div class="single-apply-wrapper">
    <x-header :title="pageTitle"></x-header>
    <tab class="tab-container" :line-width="1" custom-bar-width="60px" active-color="#108ee9">
      <tab-item selected>
        <router-link to="/singleApply/applyAdministration">应用管理</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/singleApply/applyStore">应用商店</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/singleApply/applyUpdate">应用升级</router-link>
      </tab-item>
    </tab>
    <div class="content-wrapper" :style="{height: height + 'px'}">
      <!--<router-view></router-view>-->
      <block-item :isDelete="true" v-show="isShowAd" :isShowAddApply="true" @show-detail="showDetail" @add-apply="addApply"></block-item>
      <block-item :isDelete="false" v-show="isShowAs" :isShowAddApply="false"></block-item>
      <apply-update v-show="isShowAu"></apply-update>
    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem} from 'vux'
  import blockItem from '@/components/blockItem'
  import applyUpdate from './applyUpdate.vue'
//  import {eventBus} from '../../eventBus'
  export default {
    name: 'singleApply',
    components: {
      XHeader,
      Tab,
      TabItem,
      blockItem,
      applyUpdate
    },
    data () {
      return {
        isShowAd: true,
        isShowAs: false,
        isShowAu: false,
        pageTitle: '个人应用',
        height: 0
      }
    },
    methods: {
      showDetail (val) {
        this.$router.push({
          name: 'applyDetail'
        })
      },
      addApply () {
        console.log('add apply')
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 83
    },
    watch: {
      $route (to, from) {
        if (to.path === '/singleApply/applyAdministration' || to.path === '/singleApply') {
          this.isShowAd = true
          this.isShowAs = false
          this.isShowAu = false
        }
        if (to.path === '/singleApply/applyStore') {
          this.isShowAd = false
          this.isShowAu = false
          this.isShowAs = true
        }
        if (to.path === '/singleApply/applyUpdate') {
          this.isShowAd = false
          this.isShowAs = false
          this.isShowAu = true
        }
      }
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
