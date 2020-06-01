<template>
 <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="itemImg"></slot></div>
      <div v-else><slot name="item-img-active"></slot></div>
      <div :style="activeStyle"><slot name="itemText"></slot></div>
  </div> 
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
      path:{
          String
      },
      activeColor:{
          String,
          default:'red'
      }
  },
  data () {
    return {
        // isActive:true
        
    };
  },
  computed:{
      isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
        return this.isActive?{'color':this.activeColor}:{}
    }
  },
  methods:{
      itemClick(){
        this.$router.replace(this.path)
                    .catch((err)=>err)
      }
  }
}
</script>
<style lang="less" scoped>
.tab-bar-item{
    flex:1;
    text-align: center;
    font-size:12px;
 }
.tab-bar-item img{
    height:20px;
    margin-top:8px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>