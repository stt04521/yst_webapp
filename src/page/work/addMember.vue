<template>
  <div class="add-member-wrapper">
    <x-header title="添加成员" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="sure">确定</span>
    </x-header>
    <div class="add-member-container">
      <group :gutter="0">
        <cell title="已选成员：">
          <div class="choosed-container">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
            <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          </div>
        </cell>
      </group>
      <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="searchValue"
        position="absolute"
        auto-scroll-to-top top="46px"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"></search>
    </div>
    <radio-component :radioType="radioType" :result="result" :dataList="list"></radio-component>
  </div>
</template>
<script>
  import radioComponent from '@/components/radioComponent'
  import {XHeader, Group, Cell, Search} from 'vux'
  export default {
    name: 'addMember',
    components: {
      XHeader,
      Group,
      Cell,
      Search,
      radioComponent
    },
    data () {
      return {
        searchValue: '',
        radioType: 'radio',
        results: [],
        resultList: [],
        result: {
          choosedList: []
        },
        list: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '11111111'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '222222'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '3333333'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '44444444'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '555555555'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '6666666666'
          }
        ]
      }
    },
    methods: {
      getResult (val) {
        this.results = val ? this.getResult(this.value) : []
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      cancel () {
        console.log('cancel')
      },
      sure () {
        console.log('this.result.choosedList', this.result.choosedList)
      }
    }
  }
</script>
<style scoped lang="less">
  .add-member-wrapper{
    height: 100%;
    overflow: hidden;
    .header{
      span{
        font-size: 16px;
      }
    }
    .add-member-container{
      overflow-y: auto;
      .choosed-container{
        height: 30px;
        width: 252px;
        white-space: nowrap;
        .choosed-avatar{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }

    }
  }
</style>
