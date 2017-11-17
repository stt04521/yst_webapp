<template>
  <div>
    <div class="radio-component-wrapper vux-1px-b" v-for="(item, index) in dataList" @click="toggleChoose($event, item)">
      <div class="left-container">
        <img :src="baseurl + item.portrait" class="left-img">
        <span class="left-name">{{ item.realName }}</span>
      </div>
      <icon type="success-no-circle" class="radio-icon" v-show="choosedIdList.indexOf(item.userId) > -1"></icon>
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
        type: String
      },
      dataList: {
        type: Array
      },
      result: {
        type: Object
      }
    },
    data () {
      return {
        choosedList: [],
        baseurl: 'http://192.168.0.12:7000'
      }
    },
    methods: {
      toggleChoose (e, item) {
        e.cancelBubble = true
        if (this.radioType === 'mulRadio') {
          if (this.choosedIdList.indexOf(item.userId) > -1) {
            this.result.choosedList = this._.remove(this.result.choosedList, (ite) => {
              return ite.id !== item.id
            })
          } else {
            this.result.choosedList = this.result.choosedList.concat(item)
          }
        }
        if (this.radioType === 'radio') {
          if (this.choosedIdList.length === 0 || this.choosedIdList.indexOf(item.userId) < 0) {
            this.result.choosedList.splice(0, 1)
            this.result.choosedList = this.result.choosedList.concat(item)
          } else {
            this.result.choosedList = []
          }
        }
      }
    },
    computed: {
      choosedIdList () {
        return this.result.choosedList.map((item) => {
          return item.userId
        })
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
