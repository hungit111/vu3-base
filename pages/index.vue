<template>
  <div>
    <p class="text-3xl text-red-600">STATION WORK TOP</p>
  </div>
  <button @click="onClickBtn">click me</button>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useToast } from 'vue-toastification'
definePageMeta({
  layout: 'default',
})
const common = useCommon()
const toast = useToast()
const state = reactive({
  site: '',
})

const onClickBtn = async () => {
  navigateTo('/demo/form')
}
</script>
