export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fergana power grids',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://feres.uz/uploads/img/logo/logo.png' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Simple Social Sharing for Nuxt' },
        { hid: 'og:description', property: 'og:description', content: 'Simple Social Sharing for Nuxt' },
        { hid: 'og:title', property: 'og:title', content: 'Nuxt-social-share · Nuxt Modules' }
      ]
    },
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-swiper']
})
