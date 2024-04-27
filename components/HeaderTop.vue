<script setup lang="ts">
import { openMobile } from '@/composables/openMobile'
const flags = [
  {
    url: 'uz.png',
    lang: 'uz',
  },
  {
    url: 'ru.png',
    lang: 'ru',
  },
  {
    url: 'en.png',
    lang: 'en',
  },
]
const images = [
  {
    name: 'gerb',
    url: 'header/gerb.jpg',
  },
  {
    name: 'uz_flag',
    url: 'header/uz-flag.jpg',
  },
  {
    name: 'music',
    url: 'header/music.png',
  },
]
</script>

<template>
  <div class="text-white bg-brown sm:flex">
    <div class="py-1 v-container">
      <div class="flex justify-center">
        <div class="flex items-center sm:flex-col sm:items-center md:flex-row">
          <ul class="flex items-center">
            <li v-for="flag in flags" :key="flag.lang" class="m-1">
              <button
                class="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <img
                  :src="flag.url"
                  :alt="flag.lang"
                  class="object-cover w-full h-full rounded-full"
                />
              </button>
            </li>
          </ul>
          <button class="search"></button>
        </div>
      </div>
    </div>
    <div class="py-1 v-container">
      <div class="flex justify-center">
        <div class="flex items-center sm:flex-col sm:items-center md:flex-row">
          <ul class="flex items-center">
            <li v-for="image in images" :key="image.name" class="m-1">
              <button
                class="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <img
                  :src="getImageUrl(image.url)"
                  :alt="image.name"
                  class="object-cover w-full h-full rounded-full"
                />
              </button>
            </li>
          </ul>
          <div class="flex items-center">
            <button class="m-1">
              <icon-eye class="w-8 h-7" />
            </button>
            <button @click.prevent="openMobile" class="m-1">
              <icon-mobile class="w-8 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  width: 2em;
  height: 2em;
  border: 1px solid #ffffff;
  border-radius: 50%;
  margin: 0.25em;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease;
}

.search::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  right: -7px;
  width: 0.7em;
  height: 1px;
  transform: rotate(40deg);
  background: #ffffff;
}
</style>
