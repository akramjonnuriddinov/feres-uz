<script setup lang="ts">
import { openMobile } from '@/composables/openMobile'
const { locale } = useI18n()

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
    path: 'gerb',
    img_url: 'gerb.jpg',
  },
  {
    path: 'flag',
    img_url: 'uz-flag.jpg',
  },
  {
    path: 'hymn',
    img_url: 'music.png',
  },
]

const isHidden = ref(true)
</script>

<template>
  <div
    @click="isHidden = true"
    :class="{ '-translate-x-full': isHidden, 'translate-x-0': !isHidden }"
    class="full-screen"
  >
    <div class="flex justify-center">
      <input @click.stop type="text" class="rounded form-control" />
    </div>
  </div>
  <div class="text-white bg-brown sm:flex">
    <div class="py-1 v-container">
      <div class="flex justify-center">
        <div class="flex items-center sm:flex-col sm:items-center md:flex-row">
          <ul class="flex items-center">
            <li v-for="flag in flags" :key="flag.lang" class="m-1">
              <button
                @click="locale = flag.lang"
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
          <button @click="isHidden = false" class="search"></button>
        </div>
      </div>
    </div>
    <div class="py-1 v-container">
      <div class="flex justify-center">
        <div class="flex items-center sm:flex-col sm:items-center md:flex-row">
          <ul class="flex items-center">
            <li v-for="image in images" :key="image.path" class="m-1">
              <button
                class="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <nuxt-link :to="image.path" class="flex w-full h-full">
                  <img
                    :src="image.img_url"
                    :alt="image.path"
                    class="object-cover w-full h-full rounded-full"
                  />
                </nuxt-link>
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

.full-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;
}

.form-control {
  width: 40%;
  min-width: 200px;
  padding: 0.3em 0.5em;
  box-shadow: none;
  margin: 0.25em;
}
</style>
