<script setup lang="ts"></script>

<template>
  <app-hero />
  <section>
    <div class="py-12 v-container">
      <h2 class="pb-12 mb-2 text-center title">Our latest news</h2>
      <news-card />
      <div class="flex justify-center">
        <nuxt-link
          to="/news"
          class="mx-1 uppercase border border-brown text-[#373737] rounded-md transition-all font-medium duration-200 px-4 py-2 hover:bg-brown hover:text-white"
          >All</nuxt-link
        >
      </div>
    </div>
  </section>
</template>
