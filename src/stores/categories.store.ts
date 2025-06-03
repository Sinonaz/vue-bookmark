import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CategoryInterface } from '@/interfaces/category.interface'
import { API_ROUTES, http } from '@/api'
import { v4 as uuidv4 } from 'uuid'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<CategoryInterface[]>([])

  async function fetchCategories() {
    const { data } = await http().get<CategoryInterface[]>(API_ROUTES.categories)

    categories.value = data
  }

  async function createCategory() {
    const { data } = await http().post<CategoryInterface>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })

    categories.value.push(data)
  }

  function getCategoryByAlias(alias: string | string[]): CategoryInterface | undefined {
    if (typeof alias == 'string') {
      return categories.value.find((c) => c.alias == alias)
    }

    return
  }

  async function updateCategory(category: CategoryInterface): Promise<CategoryInterface> {
    const { data } = await http().put<CategoryInterface>(API_ROUTES.updateCategory(category.id), {
      name: category.name,
      alias: category.alias,
    })

    return data
  }

  async function deleteCategory(id: number) {
    await http().delete(API_ROUTES.deleteCategory(id))
  }

  return {
    categories,
    fetchCategories,
    createCategory,
    getCategoryByAlias,
    updateCategory,
    deleteCategory,
  }
})
