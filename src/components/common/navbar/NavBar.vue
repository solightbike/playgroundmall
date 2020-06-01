<template>
<div class="nav-bar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</div>
</template>
<script>
export default {
  name: "NavBar",
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
.nav-bar{
    display: flex;
    
    box-shadow: 0px 1px 1px rgba(100,100,100,.1);
    height:44px;
    
    text-align: center;
    line-height: 49px;
    font-size:20px

}
.left,.right{
    width:60px;
    height:49px;
   
}
.center{
    flex:1;
   
    
}
</style>