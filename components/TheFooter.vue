<script setup lang="ts">
import IconFacebook from '@/components/icon/Facebook.vue'
import IconYoutube from '@/components/icon/Youtube.vue'
import IconInstagram from '@/components/icon/Instagram.vue'
import IconTwitter from '@/components/icon/Twitter.vue'

const footerLinks = [
  {
    name: 'History of JSC "Fergana Regional Electric Networks Enterprise',
    path: '/',
  },
  {
    name: 'Leadership',
    path: '/',
  },
  {
    name: 'Information on vacancies in the society',
    path: '/',
  },
  {
    name: 'Organizational structure of the society',
    path: '/',
  },
  {
    name: "Subject and goals of the society's activity",
    path: '/',
  },
  {
    name: 'Info',
    path: '/',
  },
  {
    name: 'Certificates and licenses of the Company',
    path: '/',
  },
  {
    name: 'Branches of society',
    path: '/',
  },
  {
    name: 'Manufactured products by society',
    path: '/',
  },
  {
    name: 'Information about the development strategy of the Company',
    path: '/',
  },
  {
    name: 'Conducted public events of the society',
    path: '/',
  },
  {
    name: 'Anti-corruption policy',
    path: '/',
  },
  {
    name: 'Collegial and advisory bodies formed in society',
    path: '/',
  },
]

const socials = [
  {
    name: IconYoutube,
    path: '#',
  },
  {
    name: IconFacebook,
    path: '#',
  },
  {
    name: IconTwitter,
    path: '#',
  },
  {
    name: IconInstagram,
    path: '#',
  },
]
</script>

<template>
  <footer
    class="bg-brown text-[#ffffff80] text-[0.8em] py-12 footer-section relative overflow-hidden"
  >
    <div class="relative z-50 v-container">
      <div class="xl:flex xl:justify-between">
        <div class="md:flex xl:mr-[30px]">
          <div class="flex flex-col md:mr-[30px]">
            <h2 class="text-[#ffffffcc] text-xl font-medium mb-2">
              Information
            </h2>
            <p class="leading-[1.3em] mb-4">
              FERGANA REGIONAL ELECTRIC NETWORK ENTERPRISE JSC
            </p>
            <p class="leading-[2] mb-4">
              This Society's Website is not a site that provides confidential
              information or provides paid services.
            </p>
            <div class="leading-[1.3] mb-4 flex items-center gap-1">
              <icon-clock class="w-3 h-3" />
              <span>9:00-18:00</span>
            </div>
            <div class="leading-[1.3] mb-4 flex items-center gap-1">
              <icon-phone class="w-3 h-3" />
              <span>(0 373) 244-38-11</span>
            </div>
            <div class="leading-[1.3] mb-4 flex items-center gap-1">
              <icon-email class="w-3 h-3" />
              <span>info@feres.uz</span>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-[#ffffffcc] text-xl font-medium mb-2">Menu</h2>
            <ul class="flex flex-col">
              <li
                v-for="footerLink in footerLinks"
                :key="footerLink.name"
                class="leading-[1.5]"
              >
                <nuxt-link :to="footerLink.path" class="leading-[1.5]">{{
                  footerLink.name
                }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <app-rate />
      </div>
      <div class="flex flex-col items-center">
        <ul class="flex items-center mb-[22px]">
          <li
            v-for="social in socials"
            :key="social.path"
            class="mr-8 last:mr-0"
          >
            <a
              :href="social.path"
              class="border border-[#ffffff99] rounded-full w-12 h-12 flex items-center justify-center hover:text-white"
            >
              <component :is="social.name" class="w-5 h-5" />
            </a>
          </li>
        </ul>
        <div>
          <h3 class="text-[#ffffffcc] text-xl font-medium mb-2 text-center">
            Subscribe to our news
          </h3>
          <div class="flex flex-col w-full text-base sm:flex-row">
            <input
              type="email"
              placeholder="email"
              class="text-[#495057] mb-4 leading-[1.75] w-[300px] px-[.75rem] py-[0.375rem] rounded max-w-xl outline-blue-500 sm:mb-0 sm:mr-1"
            />
            <button
              type="button"
              class="px-4 py-2 font-medium text-white transition-all duration-200 bg-blue-500 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
        <div class="mt-[22px] font-medium">
          <p>
            2022 FERES| © BARCHA HUQUQLAR HIMOYALANGAN. SAYT MA`LUMOTLARIDAN
            FOYDALANGANDA FERES.UZ SAYTI KO`RSATILISHI SHART inSoft Company
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section::before {
  content: '';
  display: block;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  outline: 1px solid rgba(255, 255, 255, 0.6);
  position: absolute;
  top: -100px;
  left: -100px;
  animation: bgAnimate 50s linear infinite alternate;
}

.footer-section::after {
  content: '';
  display: block;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  outline: 1px solid rgba(255, 255, 255, 0.6);
  position: absolute;
  bottom: -100px;
  right: -100px;
  animation: bgAnimate2 50s linear infinite alternate;
}
</style>
