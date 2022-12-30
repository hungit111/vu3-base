<template>
  <NuxtLoadingBar :duration="1000" />
  <CommonLayoutHeader />
  <CommonLayoutSideBar />
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
