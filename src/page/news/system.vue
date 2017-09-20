<template>
  <div style="height: 100%">
    <x-header>系统消息</x-header>
    <view-box ref="viewBox" class="content">
      <group >
        <cell  class="blue_bg f_w">
          <span slot="title">新消息</span>
          <span slot="value" class="f_w">查看更多 》</span>
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
          <span slot="value">13:00</span>
        </cell>
      </group>
    </view-box>
  </div>
</template>

<script>
  import { XHeader, ViewBox, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

  export default {
    name: 'hello',
    components: {
      XHeader,
      ViewBox,
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    padding: 10px 16px 0 16px;
  }

</style>
