<template>
  <div class="tool-tip-wrapper">
    <div class="container">
      <div class="arrow-up">
      </div>
      <ul class="content-container">
        <li v-for="(item, index) in list" :key="index" @click.stop="itemClick(item)">{{ item.title }}</li>
      </ul>
    </div>
    <div class="background" @click.stop="hideToolTip"></div>
  </div>
</template>
<script>
  export default {
    name: 'toolTip',
    props: {
      list: {
        type: Array,
        default: [
          {
            title: 'toolTipTitle',
            key: 'TOOL_TIP_TITLE'
          }
        ]
      }
    },
    methods: {
      hideToolTip () {
        this.$emit('hide-tooltip')
      },
      itemClick (item) {
        this.$emit('item-click', item)
      }
    }
  }
</script>
<style lang="less" scoped>
  .tool-tip-wrapper {
    .background{
      position: fixed;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      z-index: 3;
      background-color: transparent;
      /*background-color: rgba(7, 17, 27, 0.7);*/
    }
    .container{
      position: absolute;
      left: 50%;
      top: 30px;
      background-color: #35495e;
      color: #fff;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      border-radius: 3PX;
      z-index: 500;
      padding: 10px;
      .arrow-up{
        border-left: 5PX solid transparent;
        border-right: 5PX solid transparent;
        border-bottom: 5PX solid #35495e;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        position: absolute;
        left: 50%;
        top: -5PX;
        width: 0;
        height: 0;
      }
      .content-container{

      }
    }

  }
</style>
