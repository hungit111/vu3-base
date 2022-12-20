<!-- CCheckBox -->
<!-- https://kddisol.backlog.com/alias/wiki/2337434 -->
<template>
  <div class="w-48">
    <p>check box</p>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
const common = useCommon()
const state = reactive({
  site: '',
})

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
