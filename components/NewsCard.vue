<script setup lang="ts"></script>

<template>
  <ul class="flex flex-col lg:flex-row lg:flex-wrap">
    <li v-for="i in 5" class="relative p-4 lg:w-1/2 xl:w-1/3">
      <div class="news__item">
        <div class="overflow-hidden max-h-[201px]">
          <img
            src="/assets/images/news/news.jpg"
            class="object-cover object-center w-full h-full news__img"
          />
        </div>
        <div class="news__date">
          <p
            class="block font-semibold transition-all duration-300 text-[#ffffff66] mb-4"
          >
            24:11:2022
          </p>
        </div>
        <div class="news__content">
          <h3
            class="news__content_title text-[#ffffffe6] mb-2 text-xl transition-all duration-300 line-clamp-2 overflow-hidden"
          >
            “FARG‘ONA HETK” AJ TOMONIDAN M “FARG‘ONA HETK” AJ TOMONIDAN M AJ
            TOMONIDAN M “FARG‘ONA HETK” AJ TOMONIDAN M
          </h3>
          <p
            class="news__content_text overflow-hidden text-justify line-clamp-4 text-[#ffffff66]"
          >
            “FARG‘ONA HETK1” AJ TOMONIDAN MUQOBIL ENERGIYA MANBALARINI JORIY
            ETISHGA ALOHIDA E’TIBOR QARATILMOQDA Xabaringiz bor, joriy ....
          </p>
        </div>
        <div class="news__views">
          <div class="text-[#ffffff66] flex items-center gap-1">
            <span>3813</span>
            <icon-eye class="w-[18px] h-4" />
          </div>
        </div>
        <nuxt-link to="/" class="read_more btn_nd">Batafsil</nuxt-link>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.news__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 0.5em;
  margin-bottom: 2em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 1px 15px 0px rgba(55, 55, 55, 0.3);
}
.news__item::before {
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
.news__item:hover::before {
  transform: translateX(0%);
  backdrop-filter: blur(0.1em);
}
.news__item .news__img {
  position: absolute;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  transition: 0.3s ease;
}
.news__item:hover .news__img {
  transform: rotate(-2deg) scale(1.1);
  filter: blur(0.3em);
}
.news__item .news__date {
  width: 100%;
  color: #ffffff66;
  font-weight: 600;
  z-index: 2;
  transform: translateY(-100%);
  transition: 0.3s ease;
  transition-delay: 0.3s;
}
.news__item:hover .news__date {
  transform: translateY(0%);
}
.news__item .news__content {
  border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  margin: 0.5em 0.2em;
  z-index: 2;
  transform: translateX(-150%);
  transition: 0.3s ease;
  transition-delay: 0.5s;
}
.news__item:hover .news__content {
  transform: translateX(0%);
}

.news__item .news__views {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  transform: translateY(250%);
  transition: 0.3s ease;
  transition-delay: 0.7s;
}
.news__item:hover .news__views {
  transform: translateY(0%);
}

.news__item:hover .news__views {
  transform: translateY(0%);
}
.news__item .news__views {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  transform: translateY(250%);
  transition: 0.3s ease;
  transition-delay: 0.7s;
}

.news__item:hover .read_more {
  transform: translateY(0px);
}
.news__item .read_more {
  transition-delay: 1s;
  transform: translateY(100px);
  z-index: 2;
}
.btn_nd {
  display: inline-block;
  padding: 0.1em 2em;
  background: #45352f;
  z-index: 2;
  border-radius: 0.2em;
  font-size: 0.8em;
  font-weight: 500;
  margin-left: auto;
  margin-top: 0.5em;
  transition: 0.3s ease;
  color: #ffffff;
}
</style>
