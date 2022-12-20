import { reactive } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { useLocalStorage } from '@vueuse/core'
import { DEBOUCE_DELAY } from '~~/untils/constant'
export const useUserStore = defineStore('user', () => {
  const token = useLocalStorage('token', '')
  const toast = useToast()
  const state = reactive({
    user: {},
    creditRegistered: false,
    isJrePointMember: false,
    isLogon: !!token,
  })

  async function login(payload) {
    console.log('login', payload)
    try {
      const { data, status } = await this.$axios.post('/auth_login', payload)
      if (data) {
        const { user, creditRegistered, isJrePointMember, token: newTk } = data
        state.user = { ...user }
        state.creditRegistered = creditRegistered
        state.isJrePointMember = isJrePointMember
        state.isLogon = true
        token.value = newTk
        console.log('login done')
        // localStorage.setItem('token', token)
      }
      console.log(status, data)
      return data
    } catch (e) {
      console.log(e)
      token.value = ''
      state.isLogon = false
      const { response } = e
      if (response?.data?.message) {
        toast.error(response?.data?.message)
      }
      return response
    }
  }

  return { state, login, token }
})
export default useUserStore

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
