<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>控制台</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useLayouStore } from '@/stores/useLayoutStore';
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
import { computed, ref } from 'vue';

const layoutFold = useLayouStore()
const isCollapse = computed(() => {
  return layoutFold.layoutFold
})
</script>

<style></style>
