import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin(({ vueApp }) => {
  const options: PluginOptions = {
    pauseOnFocusLoss: false,
    // You can set your default options here
  }
  vueApp.use(Toast, options)
})
