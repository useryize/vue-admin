<template>
  <section class="bg-[#fff] border border-[#f1f1f1] transition-all duration-300 h-full flex flex-col"
    :style="{ width: layouAutoWidth }">

    <div
      class="flex items-center pl-[23px] leading-none py-[10px] flex-shrink-0 transition-all duration-300 overflow-hidden">
      <div class="flex items-center gap-[8px]">
        <el-avatar :size="20" :src="logo" />
        <span class="text-[16px]  font-semibold text-[#333] whitespace-nowrap" v-if="!isCollapse">管理平台</span>
      </div>
    </div>

    <el-scrollbar class="flex-1">
      <el-menu class=" !border-r-0" default-active="1" :collapse="isCollapse">
        <el-menu-item :index="item?.id" class="!text-[14px]" v-for="(item, index) in layouMenu">
          <el-icon size="14"><icon-menu /></el-icon>
          <template #title><span class="truncate">{{ item?.name }}</span></template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
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

const layouMenu = ref(Array.from({ length: 20 }).map((_, index) => ({ name: '控制台', id: index + '' })))

const layouAutoWidth = computed(() => {
  return layoutFold.layoutFold ? '64px' : '150px'
})
</script>

<style></style>
