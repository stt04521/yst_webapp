<template>
  <div>
    <div class="radio-component-wrapper vux-1px-b" v-for="(item, index) in dataList" @click="toggleChoose(item)">
      <div class="left-container">
        <img :src="item.avatar" class="left-img">
        <span class="left-name">{{ item.name }}</span>
      </div>
      <icon type="success-no-circle" class="radio-icon" v-show="choosedList.indexOf(item) > -1"></icon>
    </div>
  </div>
</template>
<script>
  import {Icon} from 'vux'
  export default {
    name: 'radioComponent',
    components: {
      Icon
    },
    props: {
      radioType: {
        type: String,
        default: 'radio'
      },
      dataList: {
        type: Array
      }
    },
    data () {
      return {
        choosedList: []
      }
    },
    methods: {
      toggleChoose (item) {
        console.log(this.radioType)
        if (this.radioType === 'mulRadio') {
          if (this.choosedList.indexOf(item) > -1) {
            this.choosedList = this._.remove(this.choosedList, (ite) => {
              return ite.id !== item.id
            })
          } else {
            this.choosedList = this.choosedList.concat(item)
          }
        }
        if (this.radioType === 'radio') {
          if (this.choosedList.length === 0 || this.choosedList.indexOf(item) < 0) {
            this.choosedList.splice(0, 1)
            this.choosedList = this.choosedList.concat(item)
          } else {
            this.choosedList = []
          }
        }
        this.$emit('choose-list', this.choosedList)
      }
    }
  }
</script>
<style scoped lang="less">
  .radio-component-wrapper{
    position: relative;
    padding: 10px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .left-container{
      .left-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .radio-icon{
      position: absolute;
      top: 18px;
      right: 30px;
    }
  }
</style>
