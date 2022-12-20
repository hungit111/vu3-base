<!-- Label: ニュース -->
<template>
  <div>
    <p class="text-3xl text-red-600">{{ $t('welcomedd') }}</p>
  </div>
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
</script>
