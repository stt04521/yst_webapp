<template>
  <div class="shopping-cart-wrapper">
    <x-header title="购物车">
      <img src="../../assets/delete.png" slot="right">
    </x-header>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    name: 'shoppingCart',
    components: {
      XHeader
    }
  }
</script>
<style scoped lang="less">
  .shopping-cart-wrapper{

  }
</style>
