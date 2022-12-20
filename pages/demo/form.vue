<template>
  <!-- <input :value="state.firstName" class="border border-l-pink-500" placeholder="firstName" />
  <div class="input-errors" v-for="error of v$.firstName?.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
  <br /> -->
  <br />
  <CTextBox v-model="state.username" :is-require="true" title="username" />
  <CTextBox v-model="state.password" :is-require="true" title="password" />
  <button class="w-40 h-10 gradient" @click="onClickBtn">click login</button>
</template>
<script setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useUserStore } from '~~/stores'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minLength } from '@vuelidate/validators'
import { CTextBox } from '~~/components/common/elements'
import { useToast } from 'vue-toastification'
import QrcodeVue from 'qrcode.vue'
definePageMeta({
  layout: 'default',
})
const toast = useToast({})
const { login } = useUserStore()
const state = reactive({
  username: '',
  password: '',
  qr: {
    value: 'http://google.com',
    size: 300,
    level: 'H',
  },
})
const rules = computed(() => {
  return {
    username: { required, maxLength: maxLength(10), minLength: minLength(5) },
    password: { required, maxLength: maxLength(10), minLength: minLength(5) },
  }
})
const v$ = useVuelidate(rules, state)

const onClickBtn = async () => {
  const d = await login({
    loginid: state.username,
    pw: state.password,
  })
}
</script>
