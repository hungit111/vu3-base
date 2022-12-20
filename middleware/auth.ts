export default defineNuxtRouteMiddleware(() => {
  const token = window.localStorage.getItem('token')
  if (!token) {
    return navigateTo('/auth/login')
  }
})
