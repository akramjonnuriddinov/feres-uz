<script setup lang="ts">
const rate = ref()

const ratings = [
  {
    id: 'good',
    text: 'Good',
  },
  {
    id: 'very-good',
    text: 'Very Good',
  },
  {
    id: 'excellent',
    text: 'Excellent, no flaws',
  },
  {
    id: 'average',
    text: 'Average',
  },
]
</script>

<template>
  <div class="flex flex-col rating">
    <h2>Rate our site</h2>
    <form class="text-lg">
      <label
        v-for="rating in ratings"
        :key="rating.id"
        class="flex items-center mb-2"
      >
        <input
          v-model="rate"
          :id="rating.id"
          :value="rating.id"
          class="mr-1"
          type="radio"
        />
        <span>{{ rating.text }}</span>
      </label>
      <button
        type="button"
        class="px-4 py-2 mx-1 font-medium transition-all duration-200 bg-white border rounded-md text-brown"
      >
        Results
      </button>
    </form>
    <div class="flex justify-end pr-14 py-[10px]">
      <nuxt-link
        to="/"
        class="px-[30px] py-2 mx-1 font-medium transition-all duration-200 bg-white border rounded-md text-brown"
        >ALL</nuxt-link
      >
    </div>
  </div>
</template>

<style scoped>
.rating {
  box-shadow: 0 0 8px black;
  background: #45352f;
  width: 100%;
  max-width: 40rem;
  padding: 1.5rem 1.5rem;
  margin: 2rem auto;
}

@media screen and (min-width: 1200px) {
  .rating {
    max-width: 350px;
  }
}
</style>
