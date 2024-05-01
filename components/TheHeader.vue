<script setup lang="ts">
const closeToggle = () => {}
</script>

<template>
  <header-top />
  <header-info />
  <the-navbar @close-toggle="closeToggle" />
</template>
