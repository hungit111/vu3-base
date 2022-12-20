<template>
  <NuxtLoadingBar :duration="1000" />
  <CommonLayoutHeader />
  <slot />
  <CommonLayoutFooter />
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  },
}
</script>
