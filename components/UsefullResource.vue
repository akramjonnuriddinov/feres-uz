<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  SwiperA11y,
  SwiperScrollbar,
  SwiperFreeMode,
  SwiperAutoplay,
  SwiperNavigation,
} from '#imports'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Feres from '@/assets/images/brands/feres.png'
import HuquqiyPortal from '@/assets/images/brands/huquqiy-portal.png'
import MyGov from '@/assets/images/brands/my-gov.png'
import OpenData from '@/assets/images/brands/open-data.png'

const modules = [
  SwiperNavigation,
  SwiperScrollbar,
  SwiperA11y,
  SwiperFreeMode,
  SwiperAutoplay,
]

const data = [
  {
    name: Feres,
    path: '#',
    text: '',
  },
  {
    name: HuquqiyPortal,
    path: '#',
    text: 'National Legal Internet Portal of the Republic of Uzbekistan',
  },
  {
    name: MyGov,
    path: '#',
    text: 'Single interactive public services portal',
  },
  {
    name: OpenData,
    path: '#',
    text: 'Open data portal of the Republic of Uzbekistan',
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
      :slides-per-view="3"
      :space-between="64"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      :pagination="true"
      :draggable="true"
      :speed="2000"
      :autoplay="{
        delay: 3500000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        v-for="slide in data"
        :key="slide.name"
        class="flex flex-col items-end justify-between"
        style="height: 300px !important"
      >
        <a
          :href="slide.path"
          class="flex flex-col justify-between h-full text-center swiper-item"
        >
          <img
            class="flex object-contain w-[100px]"
            loading="lazy"
            :src="slide.name"
            :alt="slide.text"
          />
          <span class="text-[0.8em] text-[#373737]">{{ slide.text }}</span>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
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
</style>
