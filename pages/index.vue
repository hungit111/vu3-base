<template>
  <div>
    <p class="text-3xl text-red-600">STATION WORK TOP</p>
  </div>
  <div>
    <CommonElementsCInput v-model="testState.test" @click="click" />
  </div>
  <button @click="onClickBtn">click me</button>
</template>
<script lang="ts" setup>
import { useTestStore } from '~~/stores/test'
import { storeToRefs } from 'pinia'
definePageMeta({
  layout: 'default',
})
const testStore = useTestStore()
const { state: testState } = storeToRefs(testStore)

const onClickBtn = async () => {
  navigateTo('/demo/form')
}

function click() {
  console.log('33333333')
}
</script>
