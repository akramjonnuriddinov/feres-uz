<script setup lang="ts"></script>

<template>
  <the-header />
  <div>
    <slot />
  </div>
  <section class="pt-12">
    <div class="v-container">
      <h2 class="pb-12 mb-2 text-center title">Useful resources</h2>
      <usefull-resource />
    </div>
  </section>
  <the-footer />
</template>
