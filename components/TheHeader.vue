<script setup lang="ts">
const closeToggle = () => {
  console.log('hey')
}
</script>

<template>
  <header-top />
  <header-info />
  <the-navbar @close-toggle="closeToggle" />
</template>
