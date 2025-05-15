<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories.store'
import { ref, watch } from 'vue'
import type { CategoryInterface } from '@/interfaces/category.interface'
import BookmarkCard from '@/components/BookmarkCard.vue'
import { useBookmarksStore } from '@/stores/bookmarks.store.ts'

const route = useRoute()
const categoryStore = useCategoriesStore()
const bookmarksStore = useBookmarksStore()

const category = ref<CategoryInterface>()

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (source) => {
    category.value = categoryStore.getCategoryByAlias(source.alias)

    if (category.value) {
      bookmarksStore.fetchBookmarks(category.value.id)
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="category">
    <h1>{{ category?.name }}</h1>

    <div v-if="bookmarksStore.bookmarks.length" class="category__bookmarks">
      <BookmarkCard
        v-for="bookmark in bookmarksStore.bookmarks"
        :key="bookmark.id"
        :id="bookmark.id"
        :title="bookmark.title"
        :category_id="bookmark.category_id"
        :url="bookmark.url"
        :created_at="bookmark.created_at"
        :image="bookmark.image"
      />
    </div>
  </div>
</template>

<style scoped>
.category__bookmarks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 36px;
}
</style>
