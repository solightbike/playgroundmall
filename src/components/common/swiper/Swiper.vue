<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
        <slot name="indicator" v-if="showIndicator && slideCount>1">
          <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
        </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  props:{
    interval:{
      type:Number,
      default:3000
    },
    autoPlay:{
      type:Boolean,
      default:true
    },
    ratio:{
      type:Number,
      default:0.25
    },
    showIndicator:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      swiperStyle: {},
      slideCount: 0,
      totalWidth: 0,
      currentIndex: 1,
      animDuration:500,
      isX:true,
      isFirst:true,
      scrolling:false
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.handleDom();

      // 2.开启定时器
      if(this.autoPlay){
        this.startTimer();
      }
      
    }, 200);
  },
  methods: {
    startTimer(){
      this.playTime = setInterval(()=>{
        this.currentIndex++
        this.scrollContent(-this.currentIndex*this.totalWidth)
      },this.interval)
    },
    stopTimer(){
      clearInterval(this.playTime)
    },
    handleDom: function() {
      // 1.获取要操作的元素
      let swiperEl = document.querySelector(".swiper");
      let slidesEls = swiperEl.getElementsByClassName("slide");

      // 2.保存个数
      this.slideCount = slidesEls.length;

      // 3.如果大于1个, 那么在前后分别添加一个slide
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
        // swiperEl.style = this.swiperStyle
      }

      // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth);
    },

    touchStart(e) {
      if(this.scrolling){
        return
      }
      e = e || window.event;
      if(this.autoPlay){
        this.stopTimer()
      }
      
      this.startX = e.touches[0].clientX
      this.startY = e.touches[0].clientY
      this.isX = true
      this.isFirst = true
    },

    touchMove(e) {

      if(!this.isX){
        return
      }
      this.swiperStyle.transition = {}
      // 计算用户拖动的距离
      this.currentX = e.touches[0].clientX
      this.currentY = e.touches[0].clientY
      this.distanceX = this.currentX - this.startX
      this.distanceY = this.currentY - this.startY
      let currentPosition = -this.currentIndex * this.totalWidth
      let moveDistance = currentPosition + this.distanceX
      if(this.isFirst){
        this.isFirst = false
        if(Math.abs(this.distanceY)>Math.abs(this.distanceX)){
          this.isX = false
          return
        }
      }
      this.setTransform(moveDistance);
    },

    touchEnd(e) {
      let currentMove = Math.abs(this.distanceX);
      if (this.distanceX === 0) {
        return;
      } else if (this.distanceX > 0 && currentMove > this.totalWidth * this.ratio) {
        this.currentIndex--;
      } else if (this.distanceX < 0 && currentMove > this.totalWidth * this.ratio) {
        this.currentIndex++;
      }
      this.scrollContent(-this.currentIndex * this.totalWidth);
       if(this.autoPlay){
         this.startTimer()
       }
    },

    setTransform: function(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },

    checkPosition: function () {
        window.setTimeout(() => {
          // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }

          // 2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex-1);
        }, 20)
    },

    scrollContent(currentPosition) {
      // 设置正在滚动
      this.scrolling = true
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransform(currentPosition);

      this.checkPosition()
      this.scrolling = false

    }

    
  }
}
</script>
<style lang="less" scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>