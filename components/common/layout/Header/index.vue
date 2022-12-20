<!-- Label: ニュース -->
<template>
  <p class="text-2xl">header</p>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useToast } from 'vue-toastification'

const common = useCommon()
const toast = useToast()
const state = reactive({
  site: '',
})
const props = defineProps({})
</script>
