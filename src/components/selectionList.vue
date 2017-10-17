<template>
  <div class="list-wrapper">
    <div v-show="showModel" class="choose-organize">
      <div class="status-item" @click="changeItem(item)" v-for="(item, index) in dataList" :key="index">{{item.value}}</div>
    </div>
    <div class="bg-color" v-if="showModel" @click="toggleModelShow"></div>
  </div>
</template>
<script>
  export default {
    name: 'selectionList',
    props: {
      dataList: {
        type: Array
      },
      showModel: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeItem (item) {
        this.$emit('change-item', item)
      },
      toggleModelShow () {
        this.$emit('toggle-model-show')
        console.log('222')
      }
    }
  }
</script>
<style scoped lang="less">
  .list-wrapper{
    color: #000;
    .choose-organize{
      z-index: 3;
      position: fixed;
      top: 45px;
      left: 0px;
      right: 0px;
      background-color: #fff;
      text-align: center;
      font-size: 16px;
      width: 100%;
      .status-item{
        height: 45px;
        line-height: 45px;
      }
    }
    .bg-color{
      width:100%;
      height: 100%;
      background-color: rgba(7,17,27,0.7);
      position: fixed;
      top: 45px;
      right: 0px;
      left: 0px;
      z-index:2;
    }
  }
</style>
