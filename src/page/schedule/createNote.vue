<template>
  <div class="create-note-wrapper">
    <group>
      <x-textarea :max="1000" placeholder="请输入记事内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
    </group>
    <group>
      <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
    </group>
  </div>
</template>
<script>
  import { Group, XTextarea, Datetime } from 'vux'
  export default {
    name: 'createNote',
    components: {
      Group,
      XTextarea,
      Datetime
    },
    methods: {
      startTimeChange (val) {
        console.log(val)
      }
    }
  }
</script>
<style scoped lang="less">
  .create-note-wrapper{
    margin-top: -20px;
  }
</style>
