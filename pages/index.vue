<template>
  <div>
    <p class="text-3xl text-red-600">STATION WORK TOP</p>
  </div>
  <div>
    <CommonElementsCInput v-model="state.site" />
  </div>
  <button @click="onClickBtn">click me</button>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
definePageMeta({
  layout: 'default',
})

const state = reactive({
  site: '',
})

const onClickBtn = async () => {
  navigateTo('/demo/form')
}
</script>
