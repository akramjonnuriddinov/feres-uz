<template>
  <inline-svg fill="currentColor" style="" :src="getImageUrl(src)" />
</template>

<script setup lang="ts">
defineProps(['src'])
</script>
