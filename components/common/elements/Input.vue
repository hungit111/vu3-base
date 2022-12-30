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
<style lang="scss" scoped>
.input-group {
  @apply m-1  border w-fit flex rounded hover:cursor-pointer hover:outline hover:outline-skin-primary hover:outline-1;

  &__input {
    @apply p-1 focus-visible:outline-none;
  }
  &__prefix {
    @apply border-r p-1;
  }
  &__subfix {
    @apply border-l p-1;
  }
}
.input-errors {
  @apply border-skin-error;
}
</style>
