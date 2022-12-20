<template>
  <p class="sp:w-96 sp:h-5 pc:h-11 gradient sp:text-12 pc:text-25">resize screen to smaller 1024px <ArrowDownIcon /></p>
  <div>{{ $t('hello') }}</div>
  <ArrowTopIcon fill="pink" />
  <ArrowLeftIcon fill="pink" />
</template>
<script setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useUserStore } from '~~/stores'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minLength } from '@vuelidate/validators'
import { CTextBox } from '~~/components/common/elements'
import { useToast } from 'vue-toastification'
import { ArrowTopIcon, ArrowDownIcon, ArrowLeftIcon } from '~~/assets/icons'
definePageMeta({
  layout: 'default',
})
const toast = useToast({})
const { login } = useUserStore()
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

const onClickBtn = async () => {
  const d = await login({
    loginid: state.username,
    pw: state.password,
  })
}
</script>
