<template>
  <div>
    <p class="text-3xl text-red-600">STATION WORK TOP</p>
  </div>
  <div>
    <CommonElementsCInput v-model="state.site" @click="click" />
  </div>
  <button @click="onClickBtn">click me</button>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
definePageMeta({
  layout: 'default',
})

const state = reactive({
  site: 'ssssssssss',
})

const onClickBtn = async () => {
  navigateTo('/demo/form')
}

function click() {
  console.log('33333333')
}
</script>
