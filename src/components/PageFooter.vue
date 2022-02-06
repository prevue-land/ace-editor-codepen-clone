<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>
      &copy; {{ currentYear }} Weekly OverVue. This project uses
      <a href="https://github.com/antoniandre/splitpanes">splitpanes</a> and
      <a href="https://github.com/CarterLi/vue3-ace-editor">vue3-ace-editor</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #42b883;
  color: #000;
  text-align: center;
}

a {
  color: #000;
}

a:hover {
  color: #444;
}
</style>
