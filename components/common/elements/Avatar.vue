<!-- CTextBox -->
<template>
  <div class="avatar">
    <img :src="src" :width="width" :height="width" alt="" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
  },
  size: {
    type: String,
    default: '32',
  },
})
const width = computed(() => {
  return props.size
})
</script>
<style lang="scss" scoped>
.avatar {
  @apply rounded-full border w-fit bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden shadow-md;
}
</style>
