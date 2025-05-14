import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CategoryInterface } from '@/interfaces/category.interface.ts'
import { API_ROUTES, http } from '@/api.ts'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<CategoryInterface[]>()

  async function fetchCategories() {
    const { data } = await http.get<CategoryInterface[]>(API_ROUTES.categories)

    categories.value = data
  }

  return { categories, fetchCategories }
})
