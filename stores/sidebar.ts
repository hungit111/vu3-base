import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
export const useSidebarStore = defineStore('sidebar', () => {
  const show = ref(false)

  function toggle() {
    show.value = !show.value
  }
  function hide() {
    show.value = false
  }
  return { show, toggle, hide }
})

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSidebarStore, import.meta.hot))
}
