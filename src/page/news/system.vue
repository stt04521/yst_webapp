<template>
  <div style="height: 100%">
    <x-header>系统消息</x-header>
    <view-box ref="viewBox" class="content">
      <group v-if="$route.params.type == 'system'">
        <cell  class="blue_bg f_w">
          <span slot="title">新消息</span>
            <span slot="value" class="f_w">  <router-link to="/messageDetails" class="f_w">查看更多 》</router-link></span>
        </cell>
        <cell title="开启智能移动办公的变革" ></cell>
        <cell-box class="f_14">
          说明：这里可以放一两项简单描述.不带操作，仅可点击查看详情这里可以放一两项简单描述.不带操作，仅可点击查看详情…
        </cell-box>
      </group>
      <group v-if="$route.params.type == 'system'">
        <cell  class="blue_bg f_w">
          <span slot="title">支付成功</span>
          <span slot="value" class="f_w">查看更多 》</span>
        </cell>
        <cell title="任务v1.1" value="13:00" ></cell>
        <cell-box class="f_14">
          使用支付宝购买成功…
        </cell-box>
      </group>

      <group v-if="$route.params.type == 'task'">
        <cell  class="blue_bg f_w">
          <span slot="title">新消息</span>
          <span slot="value" class="f_w">查看更多 》</span>
        </cell>
        <cell inline-desc="刚刚">
        <span slot="title">General</span>
        <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        <span slot="value">13:00</span>
        </cell>
        <cell title="有什么具体要求吗"></cell>
        <cell title="来自任务 财务报表"></cell>
      </group>
    </view-box>
  </div>
</template>

<script>
  import { XHeader, ViewBox, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

  export default {
    name: 'system',
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

  .weui-cell:before{
    border-top: none;
  }
</style>
