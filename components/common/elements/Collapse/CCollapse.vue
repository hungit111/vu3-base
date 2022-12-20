<!-- CCollapse -->
<!-- https://kddisol.backlog.com/alias/wiki/2325280 -->
<template>
  <div class="w-48">
    <p>CCollapse</p>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
const common = useCommon()
const state = reactive({
  site: '',
})

const props = defineProps({})
</script>
