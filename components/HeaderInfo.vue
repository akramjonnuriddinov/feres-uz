<template>
  <div class="bg-white text-brown">
    <div class="v-container">
      <div class="flex items-center justify-center md:flex-col xl:flex-row">
        <nuxt-link to="/" class="flex items-center xl:mr-[200px]">
          <img
            src="@/assets/images/logo.png"
            alt="Logo"
            class="w-24 h-24 m-2"
          />
          <span class="mb-2 font-semibold uppercase">Fergana power grids</span>
        </nuxt-link>
        <div class="hidden font-semibold md:flex">
          <div class="flex items-start m-2">
            <icon-phone class="w-6 h-6 m-1" />
            <div class="flex flex-col text-[#373737]">
              <span>Phone number:</span>
              <a href="tel:+(0 373) 244-38-11">+(0 373) 244-38-11</a>
            </div>
          </div>
          <div class="flex items-start m-2">
            <icon-email class="w-6 h-6 m-1" />
            <div class="flex flex-col text-[#373737]">
              <span>E-mail:</span>
              <a href="mailto:bobakalonov@gmail.com">info@feres.uz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
