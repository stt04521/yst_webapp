<template>
  <div class="participator-wrapper">
    <group>
      <cell is-link title="选择人员" @click.native="chooseFriend"></cell>
    </group>
    <!--<checklist title="已选择的接收人" :options="commonList" @on-change="change">111</checklist>-->
    <checklist title="已选择的接收人" :options="inlineDescList" v-model="inlineDescListValue" @on-change="change"></checklist>
    <!--<div class="choose-container">-->
      <!--<div class="choose-title">已选择的接收人</div>-->
      <!--<ul>-->
        <!--<li class="item-container">-->
          <!--<input type="radio">-->
          <!--<img src="../../assets/news/userImg.jpg" class="p-img">-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>
<script>
  import {Group, Cell, Checklist} from 'vux'
  export default {
    name: 'chooseParticipator',
    data () {
      return {
        checklist001: [],
        inlineDescList: [
          {key: '1', value: '王明友', inlineDesc: ''},
          {key: '2', value: '李明友', inlineDesc: ''},
          {key: '3', value: '张明友'}
        ],
        inlineDescListValue: [1, 2, 3]
      }
    },
    components: {
      Group,
      Cell,
      Checklist
    },
    methods: {
      change (val) {
        console.log(val)
      },
      chooseFriend () {
        console.log('choose friend')
      }
    }
  }
</script>
<style scoped lang="less">
  .participator-wrapper {
    margin-top: -10px;
    .choose-container{
      margin-left: 10px;
      margin-right: 10px;
      .choose-title{
        font-size: 15px;
        color: #aaa;
      }
      .item-container{
        height: 53px;
        line-height: 53px;
        background-color: #fff;
        padding: 20px;
        vertical-align: center;
        .p-img{
          width: 40px;
          height: 40px;
        }
      }
    }
  }
</style>
