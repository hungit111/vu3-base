import { reactive } from 'vue'
import axios from 'axios'
import { acceptHMRUpdate, defineStore } from 'pinia'
export const useGeneralStore = defineStore('general', () => {
  const state = reactive({
    revision: '',
  })

  async function checkRevision() {
    try {
      const { data } = await axios.request({
        url: '/revision.json',
      })
      if (data && data.revisionId) {
        if (!state.revision) {
          state.revision = data.revisionId
        } else if (state.revision !== data.revisionId) {
          location.reload()
        }
      }
      return data
    } catch (e) {
      console.log(e)
    }
  }
  return { state, checkRevision }
})

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
