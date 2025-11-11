<template>
  <div>
    <el-icon size="18" class="cursor-pointer" @click="switchFold">
      <component :is="layouIcon"></component>
    </el-icon>
  </div>
</template>
<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import { useLayouStore } from '@/stores/useLayoutStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
const { layoutFold } = storeToRefs(useLayouStore())
const switchFold = () => {
  layoutFold.value = !layoutFold.value
}

const layouIcon = computed(() => {
  return layoutFold.value ? Expand : Fold
})
</script>
