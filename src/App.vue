<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './styles/reset';
body {
  background-color: #fbf9fe;
}
#app{
  height: 100%;
}
</style>
