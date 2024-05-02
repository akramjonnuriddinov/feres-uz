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
    name: HuquqiyPortal,
    path: '#',
    text: 'National Legal Internet Portal of the Republic of Uzbekistan',
  },
  {
    name: Feres,
    path: '#',
    text: 'Худудий электр тармоклари АЖ',
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
  <div class="pb-12 carousel useful-resource">
    <swiper
      :loop="true"
      :modules="modules"
      :navigation="true"
      :slides-per-view="4"
      :space-between="64"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      :pagination="true"
      :draggable="true"
      :speed="2000"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        v-for="slide in data"
        :key="slide.name"
        class="flex flex-col items-end justify-between"
        style="height: 200px !important"
      >
        <a
          :href="slide.path"
          class="flex flex-col items-center justify-between min-h-[200px] h-full text-center swiper-item"
        >
          <img
            class="flex object-contain w-full h-[100px]"
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
.useful-resource .swiper-button-prev {
  width: calc(var(--swiper-navigation-size) / 44 * 44) !important;
}

.useful-resource .swiper-button-next {
  width: calc(var(--swiper-navigation-size) / 44 * 44) !important;
}

.useful-resource .swiper-button-prev:after {
  content: 'a' !important;
  width: 100% !important;
  background-repeat: cover;
  background-size: cover;
  /* background-image: url('/assets/images/swiper/left-arrow.png') !important; */
  background-image: none !important;
}

.useful-resource .swiper-button-next:after {
  content: 'a' !important;
  width: 100% !important;
  background-repeat: cover;
  background-size: cover;
  /* background-image: url('/assets/images/swiper/right-arrow.png') !important; */
  background-image: none !important;
}
</style>
