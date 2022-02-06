<script setup lang="ts">
import { useCodeStore } from '@/stores/code';

const codeStore = useCodeStore();
</script>

<template>
  <span v-if="codeStore.isEmptyDocument">Results will be shown here</span>
  <iframe
    v-else
    id="resulting-document"
    frameborder="0"
    allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
    allowfullscreen="true"
    allowpaymentrequest="true"
    allowtransparency="true"
    sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    :srcdoc="codeStore.resultingDocument"
  ></iframe>
</template>

<style scoped>
#resulting-document {
  width: 100%;
  height: 100%;
}
</style>
