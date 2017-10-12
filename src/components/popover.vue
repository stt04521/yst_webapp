<template>
  <div v-click-outside="onClickedOutside" data-id="popover">
  <div :class="{'hide':ishow}">
    <div class="vux-popover">
      <div class="vux-popover-arrow vux-popover-arrow-up">
      </div>
      <div class="popover-demo-content">
        <slot name="content">
          <div v-html="content"></div>
        </slot>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import ClickOutside from '../directives/click-outside'
  export default {
    props: {
      content: String
    },
    components: {

    },
    data () {
      return {
        isFirst: true,
        ishow: true
      }
    },
    directives: {
      ClickOutside
    },
    methods: {
      onHide () {
        this.ishow = true
        this.$emit('on-hide')
      },
      onShow (value) {
        this.isFirst = value
        this.ishow = false
        this.$emit('on-show')
      },
      onClickedOutside (e) {
        if (this.isFirst) {
          this.isFirst = !this.isFirst
          return false
        }
        this.ishow = true
        this.$emit('on-hide')
      }
    }
  }
</script>

<style scoped lang="less">
  .vux-popover{
    position: absolute;
    left: 50%;
    top: 30px;
    background-color: #35495e;
    color: #fff;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 3PX;
    z-index: 500;
    padding: 10px;
    .vux-popover-arrow-up{
      border-left: 5PX solid transparent;
      border-right: 5PX solid transparent;
      border-bottom: 5PX solid #35495e;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: -5PX;
    }
    .vux-popover-arrow{
      position: absolute;
      width: 0;
      height: 0;
    }
    p{
      font-size: 14px;
    }
    hr{
      margin: 3px 0;
    }
  }

</style>
