import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)

  function start() {
    loading.value = true
  }
  function finish() {
    loading.value = false
  }
  return { loading, start, finish }
})

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoadingStore, import.meta.hot))
}
