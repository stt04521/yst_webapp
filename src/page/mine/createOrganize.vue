<template>
  <div class="create-organize-wrapper">
    <x-header title="创建组织" slot="overwrite-left" class="header">
    </x-header>
    <div class="create-organize-container">
      <group :gutter="0">
        <x-input
          title="组织名称"
          v-model="organizeName"
          placeholder="至少两个字符"
          show-clear placeholder-align="right"
          text-align="right"
        >
        </x-input>
      </group>
    </div>

  </div>
</template>
<script>
  import {XHeader, Group, XInput} from 'vux'
  export default {
    name: 'createOrganize',
    components: {
      XHeader,
      Group,
      XInput
    },
    data () {
      return {
        organizeName: ''
      }
    },
    methods: {
      verificate () {
        console.log(this.organizeName.length)
      }
    }
  }
</script>
<style scoped lang="less">
  .create-organize-wrapper{
    height: 100%;
    overflow: hidden;
    .create-organize-container{

    }
  }
</style>
