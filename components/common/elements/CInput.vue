<!-- CTextBox -->
<template>
  <input v-model="dataValue" />
</template>
<script lang="ts">
import { Props } from 'nuxt/dist/head/runtime/types'

const CInput = {
  props: {
    value: {
      type: String,
      default: 'button label',
    },
  },
  setup(props: Props) {
    // const state = reactive({
    //   site: '',
    // })
    // const emit = defineEmits(['update:dataValue'])

    const dataValue = computed({
      get() {
        return props.value
      },
      set(value) {
        console.log(value)

        // emit('update:dataValue', value)
      },
    })

    return {
      dataValue,
      // emit,
    }
  },
}
export default CInput
</script>
