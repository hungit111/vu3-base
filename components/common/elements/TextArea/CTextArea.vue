<!-- CTextArea -->
<!-- https://kddisol.backlog.com/alias/wiki/2337447 -->
<template>
  <div class="w-48">
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
const state = reactive({})

const props = defineProps({
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
