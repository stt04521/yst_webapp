<template>
  <div class="header-wrapper">
    <span>{{ title }}</span>
    <img class="logo" src="../../assets/logo.png" alt="">
    <span>元数通</span>
  </div>
</template>
<script>
  export default{
    name: 'header',
    props: {
      title: {
        type: String,
        default: '标题'
      }

    }
  }
</script>
<style scoped lang="less">
  .header-wrapper{
    position: fixed;
    left: 50%;
    margin-right: 50%;
    transform: translate(-50%);
    margin-top: 20px;
    font-size: 17px;
    text-align: center;
    width: 79px;
    .logo{
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
</style>
