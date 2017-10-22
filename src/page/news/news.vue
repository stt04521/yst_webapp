<template>
  <div class="hello">
    <group class="news">
      <cell-box>
        <Flexbox>
          <FlexboxItem :span="2">
            <div class="news_img">
              <img src="" alt="">
            </div>
          </FlexboxItem>
          <FlexboxItem :span="8">
            <h4>待办任务</h4>
            <p class="f_14">财务报表任务已经完成，请…</p>
          </FlexboxItem>
          <FlexboxItem :span="2">
            <p class="f_12">13:00</p>
            <badge text="888"></badge>
          </FlexboxItem>
        </Flexbox>
      </cell-box>
      <cell-box>
        <router-link to="/system/task" class="w100">
          <Flexbox>
            <FlexboxItem :span="2">
              <div class="news_img">
                <img src="" alt="">
              </div>
            </FlexboxItem>
            <FlexboxItem :span="8">
              <h4>任务通知</h4>
              <p class="f_14">财务报表任务已经完成，请…</p>
            </FlexboxItem>
            <FlexboxItem :span="2">
              <p class="f_12">7/31</p>
              <badge text="888"></badge>
            </FlexboxItem>
          </Flexbox>
        </router-link>
      </cell-box>
      <cell-box>
        <Flexbox>
          <FlexboxItem :span="2">
            <div class="news_img">
              <img src="" alt="">
            </div>
          </FlexboxItem>
          <FlexboxItem :span="8">
            <h4>会话消息</h4>
            <p class="f_14">财务报表任务已经完成，请…</p>
          </FlexboxItem>
          <FlexboxItem :span="2">
            <p class="f_12">7/31</p>
            <badge text="888"></badge>
          </FlexboxItem>
        </Flexbox>
      </cell-box>
      <cell-box>
        <Flexbox>
          <FlexboxItem :span="2">
            <div class="news_img">
              <img src="" alt="">
            </div>
          </FlexboxItem>
          <FlexboxItem :span="8">
            <h4>帮助反馈</h4>
            <p class="f_14">&nbsp;</p>
          </FlexboxItem>
          <FlexboxItem :span="2">
          </FlexboxItem>
        </Flexbox>
      </cell-box>

      <cell-box>
        <router-link to="/system/system" class="w100">
          <Flexbox>
            <FlexboxItem :span="2">
              <div class="news_img">
                <img src="" alt="">
              </div>
            </FlexboxItem>
            <FlexboxItem :span="8">
              <h4>系统消息</h4>
              <p class="f_14">财务报表任务已经完成，请…</p>
            </FlexboxItem>
            <FlexboxItem :span="2">
              <p class="f_12">7/31</p>
              <badge text="888"></badge>
            </FlexboxItem>
          </Flexbox>
        </router-link>
      </cell-box>

    </group>
    <div class="main"></div>
  </div>
</template>

<script>
  import {Group, Cell, CellBox, Flexbox, FlexboxItem, Badge} from 'vux'
  export default {
    components: {
      Group,
      Cell,
      CellBox,
      Flexbox,
      FlexboxItem,
      Badge
    },
    name: 'news',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .news {
    h4 {
      color: black;
    }
    .news_img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: #03BD80;
    }

  }
  .main{
    width:375px;
    height:200px;
    background: red;
  }

</style>
