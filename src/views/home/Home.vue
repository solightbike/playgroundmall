<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavBar
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