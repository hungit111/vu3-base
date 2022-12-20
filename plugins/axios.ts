import axios from 'axios'
import { useGeneralStore } from '~~/stores'

export default defineNuxtPlugin(({ $pinia }) => {
  const runtimeConfig = useRuntimeConfig()
  const { checkRevision } = useGeneralStore($pinia)
  const instance = axios.create({
    baseURL: runtimeConfig.apiBase,
    timeout: 1000 * 20,
    headers: {
      'X-Tenant-ID': '1',
    },
  })
  instance.interceptors.request.use(function (config) {
    const token = `Bearer ${localStorage.getItem('access_token') || ''}`
    if (!config.url?.includes('revision.json')) {
      checkRevision()
    }
    if (config.headers && config.headers.common && token) {
      config.headers.Authorization = token
    }
    return config
  }, null)
  $pinia.use(() => ({
    $axios: instance,
  }))
  return {
    provide: {
      axios: instance,
    },
  }
})
