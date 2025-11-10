import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayouStore = defineStore('layout', () => {
  const layoutFold = ref(false) //侧边栏折叠状态
  return { layoutFold }
})
