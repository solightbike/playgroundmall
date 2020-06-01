<template>
<div id="tab-bar">
    <slot></slot>
</div>
</template>
<script>

export default {
  name: "TabBar",
  data () {
    return {
    };
  }
  
}
</script>
<style lang="less" scoped>
#tab-bar{
    display:flex;
    height:49px;
    background: #f2f2f2;
    position: fixed;
    left:0;
    bottom: 0;
    right:0;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1);
}
</style>