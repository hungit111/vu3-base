import { ref } from 'vue'
import { debounce } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useLoadingStore } from '~~/stores'
import { Validation } from '@vuelidate/core'
import { DEBOUCE_DELAY } from '~/utils'
export default function useCommonF() {
  // const nuxtApp = useNuxtApp();
  const loading = useLoadingStore()
  const { t } = useI18n({})
  const test = ref(0)

  function isMobileResolution() {
    return window.innerWidth <= 800 // should update logic more
  }

  function checkMobileWeb() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true
    } else {
      return false
    }
  }

  const handleSubmitDebouce = debounce(function (cb: () => void) {
    cb()
  }, DEBOUCE_DELAY)

  async function loadingIndicator(cb: () => void) {
    loading.start()
    await cb()
    setTimeout(() => {
      loading.finish()
    }, 250)
  }

  function getErrors(model: Validation, fieldName: string) {
    try {
      const errors: string[] = []
      if (!model.$dirty) {
        return errors
      }
      const arrError = Object.keys(model).filter((o) => {
        return !o.startsWith('$')
      })

      if (arrError) {
        arrError.forEach((e) => {
          if (model[e].$invalid) {
            errors.push(
              t(`validate.${e}`, {
                fieldName,
                ...model[e].$params,
              })
            )
          }
        })
      }
      return errors
    } catch (ex) {
      console.log('validate error', ex)
    }
  }

  return {
    test,
    handleSubmitDebouce,
    isMobileResolution,
    checkMobileWeb,
    loadingIndicator,
    getErrors,
  }
}
