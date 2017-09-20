<template>
  <div class="schedule-wrapper">
    <!--<tab class="tab-container">-->
      <!--<tab-item class="s-tab-item" selected @click="showSchedule">日程</tab-item>-->
      <!--<tab-item class="s-tab-item" @click="showNotepad">记事本</tab-item>-->
      <!--<img class="schedule-img" src="../assets/schedule.png"/>-->
    <!--</tab>-->
    <flexbox class="tab-wrapper" :gutter="0">
      <flexbox-item :span="10">
        <tab :line-width="1" custom-bar-width="60px" active-color="#108ee9" class="s-tab-container">
          <tab-item select>日程</tab-item>
          <tab-item>记事本</tab-item>
        </tab>
      </flexbox-item>
      <flexbox-item class="s-img-bg"><img class="calender-img" src="../assets/schedule.png"/></flexbox-item>
    </flexbox>

    <div class="content"></div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Tab, TabItem} from 'vux'
  export default {
    name: 'hello',
    components: {
      Flexbox,
      FlexboxItem,
      Tab,
      TabItem
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      showNotepad () {
        console.log('show note pad')
      },
      showSchedule () {
        console.log('show schedule')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang ="less">
  .schedule-wrapper{
    .tab-wrapper {
      height: 37px;
      line-height: 37px;
      text-align: center;
      .s-tab-container{
        height: 37px;
        line-height: 37px;
      }
      .s-img-bg{
        background-color: #fff;
        border:vux-1px-b ;
        .calender-img{
          width: 26px;
          height: 26px;
          vertical-align: middle;
        }
      }

    }

  }
</style>

