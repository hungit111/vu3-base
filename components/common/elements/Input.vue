<!-- CTextBox -->
<template>
  <div class="input-group">
    <slot name="prefix">
      <span class="input-group__prefix">@</span>
    </slot>
    <input class="input-group__input" :value="modelValue" @input="input" />
    <slot name="subfix"><span class="input-group__subfix" @click="clear"> clear</span> </slot>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String,
    default: 'button label',
  },
})

function clear() {
  emit('update:modelValue', '')
}

function input(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target?.value)
}
</script>
