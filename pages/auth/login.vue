<template>
  <!-- <input :value="state.firstName" class="border border-l-pink-500" placeholder="firstName" />
  <div class="input-errors" v-for="error of v$.firstName?.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
  <br /> -->
  <p>test login</p>
  <br />
  <CTextBox v-model="state.username" :is-require="true" title="username" />
  <br />
  <CTextBox v-model="state.password" :is-require="true" title="password" />
  <button @click="onClickBtn">click login</button>
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
const state = reactive({
  username: '',
  password: '',
})
const rules = computed(() => {
  return {
    username: { required, maxLength: maxLength(10), minLength: minLength(5) },
    password: { required, maxLength: maxLength(10), minLength: minLength(5) },
  }
})
const v$ = useVuelidate(rules, state)

const { login } = useUserStore()
const onClickBtn = async () => {
  login({
    loginid: state.username,
    pw: state.password,
  }).then((e) => {
    toast.success('Login done')
  })
}
</script>
