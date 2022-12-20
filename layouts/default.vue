<template>
  <NuxtLoadingBar :duration="1000" />
  <Header />
  <slot />
  <Footer />
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  },
}
</script>
