<template>
  <div class="apply-screen-wrapper">
    <flexbox class="flex" :gutter="0">
      <flexbox-item :span="1" class="img" @click.native="onBack"><img src="../../assets/contacts/back.png" class="back"></flexbox-item>
      <flexbox-item>
        <search
          @result-click="resultClick"
          @on-change="changeEvent"
          :autoFixed="autoFixed"
          :placeholder="placeholder"
          v-model="value"
          @on-focus="onFocus"
          @on-submit="onSubmit"
          ref="search">
        </search>
      </flexbox-item>
    </flexbox>
    <flexbox :gutter="0" class="tab-container">
      <flexbox-item>
        <group :gutter="0">
          <cell
            :value="choosedStatus"
            is-link
            class="cell-style"
            :border-intent="false"
            :arrow-direction="organizeType ? 'up' : 'down'"
            @click.native="toggleorganizeType"></cell>
        </group>
      </flexbox-item>
      <flexbox-item>
        <group :gutter="0">
          <cell
            :value="choosedIndustry"
            is-link
            class="cell-style"
            :border-intent="false"
            :arrow-direction="industryStatus ? 'up' : 'down'"
            @click.native="toggleIndustry"></cell>
        </group>
      </flexbox-item>
      <flexbox-item>
        <group :gutter="0">
          <cell
            :value="choosedFunction"
            is-link
            class="cell-style"
            :border-intent="false"
            :arrow-direction="functionStatus ? 'up' : 'down'"
            @click.native="toggleFunction"></cell>
        </group>
      </flexbox-item>
    </flexbox>
    <selection-list :top="78" :dataList="organizeList" @toggle-model-show="toggleorganizeType" @change-item="changeOrganize" :showModel="organizeType"></selection-list>
    <!--<selection-list :top="78" :dataList="industryList" @toggle-model-show="toggleIndustry" @change-item="changeIndustry" :showModel="industryStatus"></selection-list>-->
    <mul-selection :top="78" :showModel="industryStatus" @change-industry="changeIndustry"></mul-selection>
    <selection-list :top="78" :dataList="functionList" @toggle-model-show="toggleFunction" @change-item="changeFunction" :showModel="functionStatus"></selection-list>
    <div class="apply-screen-container" :style="{height: height + 'px'}" v-if="resultList.length">
      <div class="item-container" v-for="(item, index) in resultList" :key="index">
        <img :src="item.icon" class="item-icon">
        <div class="detail">
          <div>{{ item.title }}</div>
          <div>V{{ item.version }}</div>
        </div>
        <span class="price">￥{{ item.price }}</span>
      </div>
    </div>
    <div v-else class="search-none">
      <img src="../../assets/search_none.png" class="none-img">
      <span>没有找到应用，试试其他名称吧</span>
    </div>
  </div>
</template>
<script>
  import {Flexbox, FlexboxItem, Search, Group, Cell} from 'vux'
  import selectionList from '@/components/selectionList'
  import mulSelection from '@/components/mulSelection'
  export default {
    name: 'applyScreen',
    components: {
      Flexbox,
      FlexboxItem,
      Search,
      Group,
      Cell,
      selectionList,
      mulSelection
    },
    data () {
      return {
        height: 0,
        autoFixed: false,
        placeholder: '搜索应用名称/应用功能',
        value: '',
        organizeType: false,
        industryStatus: false,
        functionStatus: false,
        choosedStatus: '组织类型',
        choosedIndustry: '行业',
        choosedFunction: '功能分类',
        organizeList: [{key: '0', value: '企业'}, {key: '1', value: '自由团体'}, {key: '2', value: '家庭'}, {key: '3', value: '政府'}],
        industryList: [{key: '0', value: '企业1'}, {key: '1', value: '自由团体1'}, {key: '2', value: '家庭1'}, {key: '3', value: '政府1'}],
        functionList: [{key: '0', value: '功能1'}, {key: '1', value: '功能2'}, {key: '2', value: '功能3'}, {key: '3', value: '功能4'}],
        resultList: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '资产分类信息',
            version: '1.21',
            price: 999
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '资产分类信息',
            version: '1.21',
            price: 555
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '资产分类信息',
            version: '1.21',
            price: 111
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '资产分类信息',
            version: '1.21',
            price: 222
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '资产分类信息',
            version: '1.21',
            price: 888
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '资产分类信息',
            version: '1.21',
            price: 666
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '资产分类信息',
            version: '1.21',
            price: 999
          }
        ]
//        resultList: []
      }
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      onSubmit () {
        this.$refs.search.setBlur()
        console.log(this.value)
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      onBack () {
        this.$router.go(-1)
      },
      changeEvent () {
        console.log('value change')
      },
      toggleorganizeType () {
        this.industryStatus = false
        this.functionStatus = false
        this.organizeType = !this.organizeType
      },
      toggleIndustry () {
        this.organizeType = false
        this.functionStatus = false
        this.industryStatus = !this.industryStatus
      },
      toggleFunction () {
        this.organizeType = false
        this.industryStatus = false
        this.functionStatus = !this.functionStatus
      },
      changeOrganize (item) {
        this.choosedStatus = item.value
        this.toggleorganizeType()
      },
      changeIndustry (item) {
        if (item.title) {
          this.choosedIndustry = item.title
        } else {
          this.choosedIndustry = '行业'
        }
        this.toggleIndustry()
      },
      changeFunction (item) {
        this.choosedFunction = item.value
        this.toggleFunction()
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 78
    }
  }
</script>
<style scoped lang="less">
  .apply-screen-wrapper {
    height: 100%;
    overflow: hidden;
    .flex{
      background-color: #EFEFF4;
      .img{
        padding: 8px 10px;
        height: 28px;
        .back{
          height: 28px;
        }
      }
    }
    .tab-container {
      .cell-style{
        height: 34px;
        line-height: 34px;
        padding: 0px;
        padding-right: 30px;
        font-size: 14px;
        color: #108ee9;
      }
    }
    .apply-screen-container{
      overflow-y: auto;
      .item-container{
        height: 74px;
        width: 333px;
        padding: 10px;
        background-color: #fff;
        margin: 10px auto;
        position: relative;
        .item-icon{
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .detail{
          display: inline-block;
          vertical-align: top;
          padding: 10px;
          font-size: 15px;
        }
        .price{
          position: absolute;
          top: 40px;
          right: 20px;
          font-size: 18px;
          color: #f00;
          font-weight: 700;
        }
      }
    }
    .search-none{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 200px;
      .none-img{
        width: 92px;
        height: 80px;
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
