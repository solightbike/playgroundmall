<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="hotpink">
      <template v-slot:itemImg>
        <img src="~assets/img/tabbar/home.svg" alt />
      </template>
      <template v-slot:item-img-active>
        <img src="~/assets/img/tabbar/home_active.svg" alt />
      </template>
      <template v-slot:itemText>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="hotpink">
      <template v-slot:itemImg>
        <img src="~/assets/img/tabbar/category.svg" alt />
      </template>
      <template v-slot:item-img-active>
        <img src="~/assets/img/tabbar/category_active.svg" alt />
      </template>
      <template v-slot:itemText>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="hotpink">
      <template v-slot:itemImg>
        <img src="~/assets/img/tabbar/shopcart.svg" alt />
      </template>
      <template v-slot:item-img-active>
        <img src="~/assets/img/tabbar/shopcart_active.svg" alt />
      </template>
      <template v-slot:itemText>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="hotpink">
      <template v-slot:itemImg>
        <img src="~assets/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:item-img-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:itemText>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItems";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style lang="less" scoped>
</style>