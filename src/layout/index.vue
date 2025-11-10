<template>
  <section class="flex h-[100vh] bg-[#f6f8fc]">
    <div class="h-full w-fit">
      <layout-menu></layout-menu>
    </div>
    <div class="h-full flex-1">
      <LayoutHeader />
      <LayoutMain />
    </div>
  </section>
</template>
<script setup lang="ts">
import LayoutMain from './LayoutMain/index.vue'
import LayoutMenu from './LayoutMenu/index.vue'
import LayoutHeader from './LayoutHeader/index.vue'
</script>
