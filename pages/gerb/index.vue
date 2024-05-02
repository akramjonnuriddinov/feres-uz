<script setup lang="ts">
import IconFacebook from '@/components/icon/Facebook.vue'
import IconTwitter from '@/components/icon/Twitter.vue'
import IconTelegram from '@/components/icon/Telegram.vue'
import IconOK from '@/components/icon/OK.vue'

definePageMeta({
  layout: 'main',
})

const socials = [
  {
    name: IconFacebook,
    path: '#',
  },
  {
    name: IconTwitter,
    path: '#',
  },
  {
    name: IconTelegram,
    path: '#',
  },
  {
    name: IconOK,
    path: '#',
  },
]
</script>

<template>
  <div>
    <h1
      class="text-center text-[#373737] font-medium pb-4 mb-2 text-[40px] leading-[1.2]"
    >
      O'zbekiston Respublikasining davlat gerbi
    </h1>
    <div>
      <h2 class="mb-2">Ulanish:</h2>
      <ul class="flex items-center justify-center">
        <li v-for="social in socials" :key="social.path" class="mx-3">
          <a :href="social.path" class="social-link">
            <component :is="social.name" class="w-10 h-10" />
          </a>
        </li>
      </ul>
    </div>
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
