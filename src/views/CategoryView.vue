<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories.store'
import { ref, watch } from 'vue'
import type { CategoryInterface } from '@/interfaces/category.interface'

const route = useRoute()
const store = useCategoriesStore()

const category = ref<CategoryInterface>()

watch(
  () => store.categories,
  () => {
    category.value = store.getCategoryByAlias(route.params.alias)
  },
  { immediate: true },
)

onBeforeRouteUpdate((to) => {
  category.value = store.getCategoryByAlias(to.params.alias)
})
</script>

<template>
  <h1>{{ category?.name }}</h1>
</template>

<style scoped></style>
