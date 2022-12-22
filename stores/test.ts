//https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html

import { reactive } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
export const useTestStore = defineStore(
  'test',
  () => {
    const state = reactive({
      test: 'test valueeeeeeeeeee',
    })
    return { state }
  },
  {
    persist: true,
  }
)

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot))
}
