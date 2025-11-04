<template>
  <el-container class="h-[100vh] bg-[#f6f8fc]">
    <el-aside class="h-full !w-[200px]">
      <layout-menu></layout-menu>
    </el-aside>
    <el-container>
      <el-header class="!h-[90px]">header</el-header>
      <el-main>contert</el-main>
    </el-container>
  </el-container>

</template>
<script setup lang="ts">

import LayoutMenu from './LayoutMenu/index.vue'
</script>
