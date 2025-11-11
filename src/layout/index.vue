<template>
  <section class="flex h-[100vh] bg-[#f6f8fc]">
    <div class="h-full w-fit">
      <layout-menu></layout-menu>
    </div>
    <div class="flex-1 m-[20px] bg-[#fff] rounded-[12px] p-[20px]" style="overflow: auto;">
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
