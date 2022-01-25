<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>&copy; {{ currentYear }} Weekly OverVue. Released under MIT License</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #42b883;
  color: #000;
  text-align: center;
}
</style>
