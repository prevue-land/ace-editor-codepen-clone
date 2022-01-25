<script setup lang="ts">
import { useCodeStore } from '@/stores/code';

const codeStore = useCodeStore();
</script>

<template>
  <span v-if="codeStore.isEmptyDocument">Results will appear here</span>
  <iframe
    v-else
    id="resulting-document"
    frameborder="0"
    :srcdoc="codeStore.resultingDocument"
  ></iframe>
</template>

<style scoped>
#resulting-document {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
