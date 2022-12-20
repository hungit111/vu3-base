<!-- Label: フォーム -->
<template>
  <span>
    <span class="text-red-700">{{ $t('components.elements.labels.field.require') }}</span>
    <span v-if="!!label" class="ml-2 text-sm text-red-600">{{ label }}</span>
  </span>
</template>
<script setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useToast } from 'vue-toastification'
defineProps({
  label: {
    type: String,
    default: 'button label',
  },
  labelRequire: {
    type: Boolean,
    default: false,
  },
})
const common = useCommon()
const toast = useToast()
</script>
