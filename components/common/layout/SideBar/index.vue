<!-- Label: ニュース -->
<template>
  <div v-if="sidebar.show" class="side-bar">
    <div class="side-bar__content" @click="click">
      <div class="side-bar__content__profile">
        <CommonElementsAvatar size="36" />
        <div class="side-bar__content__profile__name">Nguyễn Viết Hùng</div>
      </div>
      <div class="side-bar__content__space"></div>
      <div class="side-bar__content__logout">logout</div>
    </div>
    <div class="side-bar__cover"></div>
  </div>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '~~/stores'

const sidebar = useSidebarStore()
function click(e: Event) {
  e.preventDefault()
  e.stopPropagation()
}
</script>
<style lang="scss" scoped>
.side-bar {
  @apply w-full h-full overflow-hidden;
  &__content {
    @apply fixed z-[999] h-screen top-0 flex flex-col justify-between w-full max-w-[300px] bg-skin-primary border-r shadow-sm transition duration-300 animate-fadeout;
    &__profile {
      @apply p-4 flex flex-col content-center items-center border-b;
      &__name {
        @apply p-2;
      }
    }
    &__logout {
      @apply h-12 border-t flex items-center p-4;
    }
  }
  &__cover {
    @apply fixed w-full h-full top-0 bg-black opacity-20;
  }
}
@keyframes ani {
  from {
    opacity: 0;
    display: none;
  }
  to {
    opacity: 1;
    display: block;
  }
}
</style>
