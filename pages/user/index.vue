<template>
  <p>login</p>
  <p>{{ state.site }}</p>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
definePageMeta({
  layout: 'default',
  middleware: 'auth',
})
const state = reactive({
  site: 'aaaa',
})
</script>
