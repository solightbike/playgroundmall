<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :cbanners='banners'></home-swiper>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './chilrenComponents/homeSwiper'

import {getHomeMulitData} from 'network/home'
export default {
  name: "Home",
  data() {
    return {
      banners:[]
    };
  },
  components: {
    NavBar,
    HomeSwiper
  },
  created(){
    this.getHomeData()
  },
  methods:{
    getHomeData(){
      getHomeMulitData().then(res=>{
        this.banners = res.data.data.banner.list
        // console.log(this.banners)
      })
    }
  }
};
</script>
<style lang="less" scoped>
#home{
    height: 100vh;
    position: relative;
}
.home-nav-bar{
  background-color:var(--color-tint);
  color:#fff;
}
</style>