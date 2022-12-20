<template>
  <p>register employee</p>
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
</script>
