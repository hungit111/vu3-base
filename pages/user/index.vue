<template>
  <p>login</p>
  <p>{{ state.site }}</p>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useToast } from 'vue-toastification'
definePageMeta({
  layout: 'default',
  middleware: 'auth',
})
const common = useCommon()
const toast = useToast()
const state = reactive({
  site: 'aaaa',
})
</script>
