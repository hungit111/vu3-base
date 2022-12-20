<template>
  <p>register individual</p>
</template>
<script setup>
import { reactive } from 'vue'
import useCommon from '~/composables/common'
import { useUserStore } from '~~/stores'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minLength } from '@vuelidate/validators'
import { useToast } from 'vue-toastification'
definePageMeta({
  layout: 'default',
})
</script>
