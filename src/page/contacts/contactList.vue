<template>
  <div ref="list">
    <group>
      <cell
        title="好友"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"
        v-long-press="onlongpress"
      ></cell>
      <Popover ref="group">
        <div slot="content">
          <p>分组管理</p>
          <hr>
          <p>姓氏排序</p>
        </div>
      </Popover>
      <template v-if="showContent001">
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
      </template>
      <cell
        title="家人"
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"></cell>

      <template v-if="showContent002">
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
      </template>
      <cell
        title="同学"
        is-link
        :border-intent="false"
        :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003"></cell>

      <template v-if="showContent003">
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
      </template>
      <cell
        title="其他"
        is-link
        :border-intent="false"
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004"></cell>

      <template v-if="showContent004">
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
        <cell>
          <span slot="title">General</span>
          <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        </cell>
      </template>
    </group>


  </div>
</template>
<script>
  import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
  import Popover from '@/components/popover.vue'
  export default {
    name: 'applyShow',
    components: {
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge,
      Popover
    },
    props: {
    },
    mounted () {
//      this.$nextTick(function () {
//        console.log(this.$refs.list.offsetHeight)
//      })
    },
    computed: {
      swiperHeight () {
        console.log(this.$refs.list.offsetHeight)
//        return this.$refs.list.$refs.list.style
      }
    },
    methods: {
      onlongpress (e) {
        e.preventDefault()
        this.$refs.group.onShow(true)
      }
    },
    data () {
      return {
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }],
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false
      }
    }
  }
</script>
<style scoped lang="less">
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }

</style>
