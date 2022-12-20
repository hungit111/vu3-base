export default defineNuxtRouteMiddleware((to, from) => {
  const token = window.localStorage.getItem('token')
  console.log({ token })
  if (!token) {
    return navigateTo('/auth/login')
  }
})
