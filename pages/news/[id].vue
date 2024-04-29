<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>Inner news {{ route.params.id }}</div>
</template>

<style scoped></style>
