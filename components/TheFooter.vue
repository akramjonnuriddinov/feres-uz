<script setup lang="ts">
const footerLinks = [
  {
    name: 'History of JSC "Fergana Regional Electric Networks Enterprise',
    path: '',
  },
  {
    name: 'Leadership',
    path: '',
  },
  {
    name: 'Information on vacancies in the society',
    path: '',
  },
  {
    name: 'Organizational structure of the society',
    path: '',
  },
  {
    name: "Subject and goals of the society's activity",
    path: '',
  },
  {
    name: 'Info',
    path: '',
  },
  {
    name: 'Certificates and licenses of the Company',
    path: '',
  },
  {
    name: 'Branches of society',
    path: '',
  },
  {
    name: 'Manufactured products by society',
    path: '',
  },
  {
    name: 'Information about the development strategy of the Company',
    path: '',
  },
  {
    name: 'Conducted public events of the society',
    path: '',
  },
  {
    name: 'Anti-corruption policy',
    path: '',
  },
  {
    name: 'Collegial and advisory bodies formed in society',
    path: '',
  },
]
</script>

<template>
  <footer class="bg-brown text-[#ffffff80] text-[0.8em] py-12">
    <div class="v-container">
      <div class="flex flex-col">
        <h2 class="text-[#ffffffcc] text-xl font-medium mb-2">Information</h2>
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
      <app-rate />
    </div>
  </footer>
</template>
