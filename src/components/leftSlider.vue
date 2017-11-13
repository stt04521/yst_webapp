<template>
  <div class="left-delete">
    <div class="move"
         @touchstart="_touchStart"
         @touchmove="_touchMove"
         @touchend="_touchEnd"
         :style="txtStyle">
      <slot></slot>
    </div>
    <div class="deleteIcon" :style="zIndex"  @click.prevent="deleteItem(index)"></div>
  </div>
</template>
<script>
  export default {
    props: {
      index: Number
    },
    data () {
      return {
        startX: 0,
        moveX: 0,
        disX: 0,
        txtStyle: '',
        delWidth: 200,
        top: '',
        zIndex: 'z-index:-1'
      }
    },
    methods: {
      _touchStart (ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          this.startX = ev.touches[0].clientX
          console.log(this.startX)
        }
      },
      _touchMove (ev) {
        ev = ev || event
        if (ev.touches.length === 1) {
          this.moveX = ev.touches[0].clientX
          this.disX = this.startX - this.moveX
          // console.log('disX==>',this.disX)
          if (this.disX < 0 || this.disX === 0) {
            // console.log('没有移动');
            this.txtStyle = 'transform:translateX(0rem)'
          } else if (this.disX > 0) {
            this.txtStyle = 'transform:translateX(-" + this.disX/100 + "rem)'
            if (this.disX >= this.delWidth / 100) {
              this.txtStyle = 'transform:translateX(-" + this.delWidth/100 + "rem)'
              this.zIndex = 'z-index:' + 10 + 'rem'
            }
          }
        }
      },
      _touchEnd (ev) {
        if (event.changedTouches.length === 1) {
          this.startX = 0
          this.zIndex = 'z-index:' + -1 + 'rem'
          console.log(event.changedTouches[0].clientX)
          let endX = event.changedTouches[0].clientX
          this.disX = this.startX - endX
        }
      },
      deleteItem: function (index) {
        this.$emit('deleteItem', index)
      }
    }
  }
</script>

<style>
  .left-delete{
    width:100%;
    height:100%;
    position:relative;
    z-index:2;
  }
  .move{
    position: relative;
  }
  .deleteIcon{
    width: 2rem;
    height:100%;
    position: absolute;
    right:0;
    top:0;
    background-size: contain;
  }
</style>
