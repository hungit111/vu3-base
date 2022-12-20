<template>
  <Header />
  <slot />
  <Footer />
</template>

<script setup>
import { Footer, Header } from '~~/components/common/layout'
</script>
