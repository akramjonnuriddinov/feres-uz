<script setup lang="ts">
const buttons = ref([
  {
    name: 'normal',
    className: 'normal',
  },
  {
    name: 'grayscale',
    className: 'bg-[#777]',
  },
  {
    name: 'invert',
    className: 'invert text-white',
  },
  {
    name: 'no_image',
    className: 'no-image text-black',
  },
])

const handleClick = (id: any) => {
  if (id == 'grayscale') document.body.classList.add('grayscale')
  if (id == 'invert') document.body.classList.add('invert')
  if (id == 'no_image') document.body.classList.add('no_image')
  if (id == 'normal') document.body.className = ''
}
</script>

<template>
  <div class="bg-white border w-[267px] h-[182px] p-2">
    <h3 class="text-[#343a40] mb-2 font-medium">Ko'rinish</h3>
    <div class="flex items-start gap-1 mb-4">
      <button
        v-for="button in buttons"
        @click="handleClick(button.name)"
        :ref="button.name"
        :key="button.name"
        :class="button.className"
        class="px-4 py-2 text-white border-2 border-[#726e6e]"
      >
        <icon-image class="w-6 h-6" />
      </button>
    </div>
    <h3 class="text-[#343a40] mb-2 font-medium">Shrift o'lchami</h3>
  </div>
</template>

<style>
body.grayscale {
  filter: grayscale(100%);
}
body.invert {
  filter: invert(100%) grayscale(100%);
}
body.no_image img {
  visibility: hidden;
}
.normal {
  background-image: linear-gradient(to bottom, #ff0000, #00ff00, #0000ff);
}
.invert {
  background-image: linear-gradient(to bottom, #fff, #000000);
}
.no-image {
  position: relative;
  background-color: #f0f0f0;
}
.no-image::before {
  position: absolute;
  top: 4px;
  left: 14px;
  content: '';
  display: block;
  width: 80%;
  height: 5px;
  border-radius: 5px;
  z-index: 1000;
  background: rgba(220, 20, 60, 0.7);
  transform-origin: top left;
  transform: rotate(45deg);
}
.no-image::after {
  position: absolute;
  bottom: 4px;
  left: 14px;
  border-radius: 5px;
  content: '';
  display: block;
  width: 80%;
  height: 5px;
  z-index: 1000;
  background: rgba(220, 20, 60, 0.7);
  transform-origin: bottom left;
  transform: rotate(-45deg);
}
</style>
