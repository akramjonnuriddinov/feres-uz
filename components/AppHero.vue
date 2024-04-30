<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  SwiperA11y,
  SwiperScrollbar,
  SwiperFreeMode,
  SwiperAutoplay,
  SwiperNavigation,
  SwiperPagination,
} from '#imports'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Swiper1 from '@/assets/images/swiper/swiper1.jpg'
import Swiper2 from '@/assets/images/swiper/swiper2.jpg'
import Swiper3 from '@/assets/images/swiper/swiper3.jpg'

const modules = [
  SwiperNavigation,
  SwiperScrollbar,
  SwiperA11y,
  SwiperFreeMode,
  SwiperAutoplay,
  SwiperPagination,
]

const data = [
  {
    text: 'For consumers',
    name: Swiper1,
    path: '/',
  },
  {
    text: 'WELL ORGANIZATIONS',
    name: Swiper2,
    path: '/',
  },
  {
    text: 'Interactive services',
    name: Swiper3,
    path: '/',
  },
]

const onSwiper = (swiper: any) => {
  return swiper
}
const onSlideChange = () => {}
</script>

<template>
  <div class="carousel">
    <swiper
      :loop="true"
      :modules="modules"
      :navigation="true"
      :slides-per-view="1"
      :space-between="0"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      :pagination="true"
      :draggable="true"
      :speed="2000"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        v-for="slide in data"
        :key="slide.name"
        style="height: auto !important; max-height: 700px"
      >
        <div class="relative h-full text-white swiper-item">
          <img
            class="flex object-cover min-h-full"
            loading="lazy"
            :src="slide.name"
            :alt="slide.text"
            width="100%"
            height="100%"
          />
          <h2
            class="absolute leadign-[16px] text-center mb-8 font-medium text-[32px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {{ slide.text }}
          </h2>
          <nuxt-link
            :to="slide.path"
            class="absolute px-4 py-2 font-medium text-center transition-all top-[58%] duration-200 -translate-x-1/2 -translate-y-1/2 border rounded-md border-brown read-more whitespace-nowrap left-1/2 hover:bg-brown max-md:top-[68%] max-sm:top-[80%]"
            >Read More</nuxt-link
          >
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(55, 55, 55, 0.5);
}

.swiper-button-prev {
  width: calc(var(--swiper-navigation-size) / 44 * 44) !important;
}

.swiper-button-next {
  width: calc(var(--swiper-navigation-size) / 44 * 44) !important;
}

.swiper-button-prev:after {
  content: 'a' !important;
  width: 100% !important;
  background-repeat: cover;
  background-size: cover;
  background-image: url('/assets/images/swiper/left-arrow.png') !important;
}

.swiper-button-next:after {
  content: 'a' !important;
  width: 100% !important;
  background-repeat: cover;
  background-size: cover;
  background-image: url('/assets/images/swiper/right-arrow.png') !important;
}

.swiper-pagination-bullet {
  width: 16px !important;
  height: 16px !important;
  border-radius: 4px !important;
  background-color: rgba(69, 53, 47, 0.4) !important;
  display: block;
}

.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 1000;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #45352f !important;
}
</style>
