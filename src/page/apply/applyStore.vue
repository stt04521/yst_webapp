<template>
  <div class="apply-store-wrapper">
    <x-header title="应用商店">
      <span slot="right" @click="searchApply">搜索</span>
    </x-header>
    <div class="content-wrapper" :style="{height: height + 'px'}">
      <block-item :isDelete="false" :isShowAddApply="false" @show-detail="showDetail" @add-apply="addApply"></block-item>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import blockItem from '@/components/blockItem'
  export default {
    name: 'applyStore',
    components: {
      XHeader,
      blockItem
    },
    data () {
      return {
        height: 0
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 46
    },
    methods: {
      showDetail (val) {
        this.$router.push({
          name: 'applyDetail'
        })
      },
      addApply () {
        console.log('add apply')
      },
      searchApply () {
        this.$router.push({
          name: 'applyScreen'
        })
      }
    }
  }
</script>
<style scoped lang="less">
.apply-store-wrapper{
  height: 100%;
  overflow: auto;
  .content-wrapper{
    overflow-y: auto;
  }
}
</style>
