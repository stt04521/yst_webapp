<template>
  <div  class="msdetail">
    <x-header>邀请好友</x-header>
    <view-box ref="viewBox" class="content">
     <div class="center-center-column p_t80">
       <img src="../../assets/news/code.jpg" alt="" width="200" height="200">
       <p class="f_18 m_t30">扫一扫加入元数通</p>
       <div class="icon_list">
         <div>
           <img src="../../assets/news/weixin.png" alt="">
           <p>微信好友</p>
         </div>
         <div>
           <img src="../../assets/news/qq.png" alt="">
           <p>qq好友</p>
         </div>
       </div>
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
    name: 'invitingFriends',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .icon_list{
    width: 200px;
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
</style>
