<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store.ts'
import { onMounted } from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

const store = useCategoriesStore()

onMounted(() => {
  store.fetchCategories()
})
</script>

<template>
  <div class="categories">
    <ul v-if="store.categories?.length">
      <li v-for="category in store.categories" :key="category.id">
        <RouterLink :to="`/main/${category.alias}`" active-class="active-link"
          >{{ category.name }}
        </RouterLink>
      </li>
    </ul>

    <ButtonIcon @click="store.createCategory">
      <IconPlus />
    </ButtonIcon>
  </div>
</template>

<style scoped>
.categories {
  margin-top: 40px;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-bottom: 40px;
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

  &.active-link {
    font-size: 24px;
    pointer-events: none;
  }
}

a:hover {
  font-size: 24px;
}
</style>
