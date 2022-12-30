<!-- Label: ニュース -->
<template>
  <nav class="shadow-md py-2 bg-skin-primary relative flex items-center w-full justify-between">
    <div id="menu-btn" class="px-6 flex items-center gap-2">
      <button class="border-0 py-2 bg-transparent text-skin-primary hover:text-skin-secondary focus:text-skin-secondary transition-shadow duration-150 ease-in-out" type="button" @click="toggleSidebar">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div class="items-center">
        <ul class="navbar-nav mr-auto flex flex-row">
          <li class="nav-item">
            <a class="nav-link block pr-2 lg:px-2 py-2 text-skin-primary hover:text-skin-secondary focus:text-skin-secondary transition duration-150 ease-in-out" href="#!">Menu</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '~~/stores'
const sidebarStore = useSidebarStore()
function toggleSidebar() {
  sidebarStore.toggle()
}

function hideSidebar(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.closest('#menu-btn')) {
    e.preventDefault()
    return
  }
  sidebarStore.hide()
}

onMounted(() => {
  document.addEventListener('click', hideSidebar)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', hideSidebar)
})
</script>
