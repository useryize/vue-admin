<template>
  <section class="bg-[#fff]">
    <div class="flex items-center px-[20px] pt-[10px]">
      <el-avatar :size="16" :src="logo" />
      <div class="text-[12px] text-[#666] font-bold ml-[10px]">管理平台</div>
    </div>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>控制台</template>
      </el-menu-item>
    </el-menu>
  </section>

</template>

<script lang="ts" setup>
import logo from '@/assets/logo.png'
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
