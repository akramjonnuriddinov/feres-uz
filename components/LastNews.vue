<script setup lang="ts"></script>

<template>
  <div class="md:max-w-[33%] w-full">
    <h3 class="flex items-center font-medium text-xl mb-[22px]">
      <span
        class="block w-5 h-5 mr-2 border-2 rounded-full border-brown"
      ></span>
      <span>Сўнгги янгиликлар</span>
    </h3>
    <ul>
      <li class="px-4 py-1 my-2 rounded border border-[#6c757d]" v-for="i in 5">
        <div class="flex items-center mb-4 text-base">
          <icon-calendar class="w-4 h-4 mr-1" />
          <span>24:11:2022</span>
        </div>
        <h4 class="mb-2 overflow-hidden text-xl font-medium line-clamp-4">
          <nuxt-link to="/">
            “FARG‘ONA HETK” AJ TOMONIDAN MUQOBIL ENERGIYA MANBALARINI JORIY
            ETISHGA ALOHIDA E’TIBOR AJ TOMONIDAN MUQOBIL ENERGIYA MANBALARINI
            JORIY ETISHGA ALOHIDA E’TIBOR AJ TOMONIDAN MUQOBIL ENERGIYA
          </nuxt-link>
        </h4>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
