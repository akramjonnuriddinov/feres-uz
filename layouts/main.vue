<script setup lang="ts"></script>

<template>
  <the-header />
  <section class="py-[30px] news-section relative overflow-hidden">
    <div class="relative z-10 v-container">
      <div class="flex flex-col md:flex-row">
        <div class="mb-[30px] w-full md:mr-[30px]">
          <slot />
        </div>
        <last-news />
      </div>
    </div>
  </section>
  <section class="pt-12">
    <div class="v-container">
      <h2 class="pb-12 mb-2 text-center title">Useful resources</h2>
      <usefull-resource />
    </div>
  </section>
  <the-footer />
</template>
