<script setup lang="ts">
definePageMeta({
  layout: 'main',
})
</script>

<template>
  <div>
    <h1
      class="text-center text-[#373737] font-medium pb-4 mb-2 text-[40px] leading-[1.2]"
    >
      Hymn of the Republic of Uzbekistan
    </h1>
    <app-socials />
  </div>
</template>

<style scoped>
.social-link {
  position: relative;
  display: inline-block;
  transition: all 0.4s linear;
}

.social-link::before,
.social-link::after {
  content: '';
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 0.4s linear;
}

.social-link:hover {
  transform: scale(0.7);
}

.social-link:hover::before {
  border-left: 2px solid;
  border-right: 2px solid;
  transform: skewX(20deg);
}

.social-link:hover::after {
  border-top: 2px solid;
  border-bottom: 2px solid;
  transform: skewY(-20deg);
}
</style>
