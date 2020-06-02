<template>
  <div class="home-swiper">
    <swiper>
        <swiper-item v-for="item in cbanners" :key="item.background">
          <a href="javascript:;">
            <img :src="item.image" alt />
          </a>
        </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {};
  },
  props: {
    cbanners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style lang="less" scoped>
</style>