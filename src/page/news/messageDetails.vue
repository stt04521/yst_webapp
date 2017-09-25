<template>
  <div style="height: 100%" class="msdetail">
    <x-header>系统消息</x-header>
    <view-box ref="viewBox" class="content">
      <h2 class="m_b10 f_18">开启智能移动办公的变革</h2>
      <p class="f_12 m_b10">13:00</p>
      <div class="f_14">
        说明：这里可以放一两项简单描述.不带操作，仅可点击查看详情这里可以放一两项简单描述.不带操作，仅可点击查看详情…
      </div>
    </view-box>
  </div>
</template>

<script>
  import { XHeader, ViewBox } from 'vux'
  export default {
    components: {
      XHeader,
      ViewBox
    },
    name: 'messageDetails',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .weui-cells{
    background-color: #FBF9FE;
    &:after{
      border-bottom: none;
    }
    &:before{
      border-top: none;
    }
  }
  .weui-cell:before{
    border-top: none;
  }

</style>
