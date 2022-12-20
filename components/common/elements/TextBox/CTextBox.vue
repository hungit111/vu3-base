<!-- CTextBox -->
<!-- https://kddisol.backlog.com/alias/wiki/2337245 -->
<template>
  <div class="w-48">
    <FieldLabel :label="title" :label-require="isRequire"></FieldLabel>
    <div class="border border-l-pink-500">
      <input v-model="value" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useToast } from 'vue-toastification'
import { FieldLabel } from '~/components/common/elements/Labels'

const common = useCommon()
const toast = useToast()
const state = reactive({
  site: '',
})

const props = defineProps({
  title: {
    type: String,
    default: 'button label',
  },
  isRequire: {
    type: Boolean,
    default: false,
  },
  modelValue: {},
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
