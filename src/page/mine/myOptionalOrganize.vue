<template>
  <div class="my-optional-organize">
    <x-header title="我的组织"></x-header>
    <div class="container" v-show="organizeId.length" :style="{height: height + 'px'}">
      <div class="item-container vux-1px-b" v-for="(item, index) in organizeId" :key="index">
        <img :src="item.logo ? item.logo : defaultLogo" class="etag-icon">
        <span class="etag-name">{{ item.organizeName }}</span>
        <div class="choose-btn" :class="item.id === choosedId ? 'is-choosed' : ''" @click="chooseOrganize(item)">{{ item.id === choosedId ? '已选择' : '选择' }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import {eventBus} from '../../utils/eventBus'
  export default {
    name: 'myOptionalOrganize',
    components: {
      XHeader
    },
    data () {
      return {
        choosedId: '',
        height: 0,
        defaultLogo: require('../../assets/default_organize_logo.png'),
        organizeId: []
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 46
    },
    created () {
      this.choosedId = this.$route.params.id
      this.organizeId = this.$store.getters.myInfo.organizeId
    },
    methods: {
      chooseOrganize (item) {
        console.log('myOptionalOrganize: ', item.id)
        eventBus.$emit('choosed-organize', item.id)
//        console.log(item.id)
        this.$router.push({
          name: 'personnelInfo',
          query: {id: item.id}
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .my-optional-organize{
    height: 100%;
    overflow: hidden;
    .container{
      overflow-y: auto;
      .item-container{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #eee;
        padding: 10px;
        position: relative;
        font-size: 14px;
        .etag-icon{
          width: 40px;
          height: 40px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .choose-btn{
          width: 60px;
          height: 30px;
          line-height: 30px;
          color: #fff;
          background-color: #0099ff;
          text-align: center;
          border: none;
          border-radius: 4px;
          position: absolute;
          top: 25px;
          right: 20px;
          &.is-choosed{
            background-color: #eee;
            color: #999;
          }
        }
      }
    }
  }
</style>
