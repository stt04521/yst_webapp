<template>
  <div class="mul-selection-wrapper" v-show="showModel" :style="{top: top + 'px'}">
    <flexbox :gutter="0" orient="horizontal" justify="center">
      <flexbox-item class="left" :style="{height: height + 'px'}">
        <div @click="leftClick(index)" class="list-item" :class="leftIndex === index ? 'active' : ''" v-for="(item, index) in list" :key="index">{{ item.title }}</div>
      </flexbox-item>
      <flexbox-item class="right" :style="{height: height + 'px'}">
        <div v-show="list[leftIndex].itemList.length" @click="rightClick(item, index)" class="list-item" :class="rightIndex === index ? 'active' : ''" v-for="(item, index) in list[leftIndex].itemList" :key="index">{{ item.title }}</div>
      </flexbox-item>
    </flexbox>
    <button class="select-btn" @click="changeIndustry">确定</button>
  </div>
</template>
<script>
  import {Flexbox, FlexboxItem} from 'vux'
  export default {
    name: 'mulSelection',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: {
      showModel: {
        type: Boolean
      },
      top: {
        type: Number
      }
    },
    data () {
      return {
        leftIndex: 0,
        rightIndex: 10000,
        height: 0,
        choosedIndustry: {},
        list: [
          {
            title: '农、林、牧、渔业',
            key: 0,
            itemList: [
              {
                title: '畜牧业',
                key: 0
              },
              {
                title: '畜牧业',
                key: 0
              },
              {
                title: '畜牧业',
                key: 0
              },
              {
                title: '畜牧业',
                key: 0
              }
            ]
          },
          {
            title: '采矿业',
            key: 1,
            itemList: [
              {
                title: '采矿业01',
                key: 0
              },
              {
                title: '采矿业02',
                key: 0
              },
              {
                title: '采矿业03',
                key: 0
              },
              {
                title: '采矿业04',
                key: 0
              }
            ]
          },
          {
            title: '待定',
            key: 2,
            itemList: [
              {
                title: '待定01',
                key: 0
              },
              {
                title: '待定02',
                key: 0
              },
              {
                title: '待定03',
                key: 0
              },
              {
                title: '待定04',
                key: 0
              }
            ]
          },
          {
            title: '待定',
            key: 3,
            itemList: [
              {
                title: '待定001',
                key: 0
              },
              {
                title: '待定002',
                key: 0
              },
              {
                title: '待定003',
                key: 0
              },
              {
                title: '待定004',
                key: 0
              }
            ]
          },
          {
            title: '待定',
            key: 4,
            itemList: [
              {
                title: '待定0001',
                key: 0
              },
              {
                title: '待定0002',
                key: 0
              },
              {
                title: '待定0003',
                key: 0
              },
              {
                title: '待定0004',
                key: 0
              }
            ]
          },
          {
            title: '待定',
            key: 5,
            itemList: [
              {
                title: '畜牧业',
                key: 0
              },
              {
                title: '畜牧业',
                key: 0
              },
              {
                title: '畜牧业',
                key: 0
              },
              {
                title: '畜牧业',
                key: 0
              }
            ]
          }
        ]
      }
    },
    methods: {
      leftClick (idx) {
        this.leftIndex = idx
        this.rightIndex = 1000
        this.choosedIndustry = {}
      },
      rightClick (ite, idx) {
        this.rightIndex = idx
        this.choosedIndustry = ite
      },
      changeIndustry () {
        this.$emit('change-industry', this.choosedIndustry)
        console.log(this.choosedIndustry)
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - this.top
    }
  }
</script>
<style scoped lang="less">
  .mul-selection-wrapper{
    position: fixed;
    z-index: 3;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(7,17,27,.3);
    font-size: 14px;
    .left{
      background-color: #fff;
      overflow-y: auto;
    }
    .right{
      background-color: #eee;
      overflow-y: auto;
    }
    .list-item{
      text-align: center;
      height: 40px;
      line-height: 40px;
      &.active{
        color: #0099ff;
      }
    }
    .select-btn {
      position: fixed;
      bottom: 20px;
      right: 10px;
      width: 357px;
      text-align: center;
      height: 48px;
      line-height: 48px;
      border: none;
      background-color: #0099ff;
      color: #fff;
      font-size: 18px;
      border-radius: 4px;
    }
  }
</style>
