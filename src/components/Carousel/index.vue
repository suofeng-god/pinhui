<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      // 监听list
      immediate: true, // 立即监听，不管你数据有没有变化，立即上来监听一次
      handler() {
        this.$nextTick(function () {
          var swiper = new Swiper(this.$refs.cur, {
            cssMode: true,
            autoplay: true,
            speed: 1000,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            mousewheel: true,
            keyboard: true,
          });
        });
      },
    },
  },
};
</script>
