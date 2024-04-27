export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fergana power grids',
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: 'https://feres.uz/uploads/img/logo/logo.png' }
      ]
    }
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
