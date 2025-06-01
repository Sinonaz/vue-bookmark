<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories.store'
import { ref, watch } from 'vue'
import type { CategoryInterface } from '@/interfaces/category.interface'
import BookmarkCard from '@/components/BookmarkCard.vue'
import { useBookmarksStore } from '@/stores/bookmarks.store.ts'
import ActionBtn from '@/components/ActionBtn.vue'
import IconBox from '@/components/icons/IconBox.vue'
import IconPencil from '@/components/icons/IconPencil.vue'
import NameInput from '@/components/NameInput.vue'

const route = useRoute()
const categoryStore = useCategoriesStore()
const bookmarksStore = useBookmarksStore()

const category = ref<CategoryInterface>()
const isCategoryNameEditing = ref(false)

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

function editCategoryName(newName: string) {
  if (!category.value) return

  category.value.name = newName
  categoryStore.updateCategory(category.value)
  isCategoryNameEditing.value = false
}
</script>

<template>
  <div class="category">
    <div class="category__head">
      <h1 v-if="!isCategoryNameEditing">
        {{ category?.name }}
      </h1>

      <NameInput
        v-else
        :model-value="category?.name"
        @update:name="(newName) => editCategoryName(newName)"
      />

      <div class="category__actions">
        <ActionBtn>
          <IconBox />
        </ActionBtn>
        <ActionBtn @click="isCategoryNameEditing = !isCategoryNameEditing">
          <IconPencil />
        </ActionBtn>
      </div>
    </div>

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

.category__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.category__head {
  display: flex;
  justify-content: space-between;
  font-size: 24px;

  & h1:focus {
    border-bottom: 1px solid var(--color-fg);
  }

  & h1 {
    border-bottom: 1px solid transparent;
    outline: none;
    font-size: inherit;
  }
}
</style>
