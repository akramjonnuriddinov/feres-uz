<script setup lang="ts">
const isMobile = ref(false)
const isTablet = ref(false)
const siteUrl = ref('https://feres-uz.netlify.app/')
const isExpand = ref(false)

onMounted(() => {
  if (!window.location.href.includes('localhost'))
    siteUrl.value = window.location.href
})
</script>

<template>
  <div
    v-if="isMobile"
    class="fixed mobile h-screen bg-[#A5ABB8] p-10 flex justify-center top-0 bottom-0 left-0 right-0 z-[99999]"
  >
    <iframe :src="siteUrl" width="520" height="100%" frameborder="0"></iframe>
  </div>
  <div
    v-else-if="isTablet"
    class="fixed h-screen bg-[#A5ABB8] p-5 flex justify-center top-0 bottom-0 left-0 right-0 z-[99999]"
  >
    <iframe :src="siteUrl" width="920" height="100%" frameborder="0"></iframe>
  </div>
  <div v-else>
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
  </div>

  <section
    id="viewer"
    :class="{ 'translate-y-full': isExpand, 'translate-y-0': !isExpand }"
    class="fixed z-[9999999] bottom-0 py-4 bg-[#ffe877] flex justify-center gap-4 w-full"
  >
    <button
      @click="isExpand = !isExpand"
      class="flex items-center gap-1 px-2 py-1 text-sm rounded-tl-lg rounded-tr-lg expand"
    >
      <span v-if="isExpand">Expand</span>
      <span v-else>Collapse</span>
      <icon-angle-down class="w-3 h-3" />
    </button>
    <div class="flex items-center bg-white rounded-md">
      <button class="p-2 mx-2" @click=";(isMobile = false), (isTablet = false)">
        <icon-desktop class="w-5 h-5" />
      </button>
      <button class="p-2 mx-2" @click=";(isMobile = false), (isTablet = true)">
        <icon-tablet class="w-5 h-5" />
      </button>
      <button class="p-2 mx-2" @click=";(isMobile = true), (isTablet = false)">
        <icon-mobile2 class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

<style>
iframe {
  border-radius: 20px;
  border: none !important;
}

.expand {
  position: absolute;
  top: 0;
  background-color: #ffe877;
  cursor: pointer;
  transform: translateY(-100%);
}
</style>
