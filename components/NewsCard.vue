<script setup lang="ts"></script>

<template>
  <ul class="flex flex-col lg:flex-row lg:flex-wrap">
    <li v-for="i in 5" class="p-4 lg:w-1/2 xl:w-1/3">
      <div
        class="img-wrapper overflow-hidden flex flex-col justify-center items-center cursor-pointer relative max-h-[201px] mb-1"
      >
        <img
          class="object-cover object-center w-full h-full"
          src="/assets/images/news/news.jpg"
          alt="news image"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped>
.img-wrapper {
  box-shadow: 0px 1px 15px 0px rgba(55, 55, 55, 0.3);
}

.img-wrapper::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.2);
  z-index: 1;
  transform: translateY(100%);
  transition: 0.3s ease;
}

.img-wrapper:hover::before {
  transform: translateX(0%);
  backdrop-filter: blur(0.1em);
}
</style>
