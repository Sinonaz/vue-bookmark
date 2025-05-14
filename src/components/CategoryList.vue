<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store.ts'
import { onMounted } from 'vue'

const store = useCategoriesStore()

onMounted(() => {
  store.fetchCategories()
})
</script>

<template>
  <ul v-if="store.categories?.length">
    <li v-for="category in store.categories" :key="category.id">
      <a :href="`/${category.alias}`">{{ category.name }}</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 40px 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}

li.active {
  font-weight: 700;
  font-size: 24px;
}

a {
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  transition: font-size 0.2s;
}

a:hover {
  font-size: 24px;
}
</style>
