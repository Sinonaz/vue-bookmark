<script lang="ts" setup>
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import NameInput from '@/components/NameInput.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBookmarksStore } from '@/stores/bookmarks.store.ts'
import type { CategoryInterface } from '@/interfaces/category.interface.ts'
import { useCategoriesStore } from '@/stores/categories.store.ts'

const route = useRoute()
const bookmarksStore = useBookmarksStore()
const categoriesStore = useCategoriesStore()

const isNameEditing = ref<boolean>(false)
const bookmarkUrl = ref<string>('')
const category = ref<CategoryInterface>()

function createBookmark(url: string) {
  if (category.value) {
    bookmarksStore.createBookmark(category.value.id, url)

    bookmarkUrl.value = ''
    isNameEditing.value = false
  }
}

watch(
  () => categoriesStore.getCategoryByAlias(route.params.alias),
  (value) => {
    category.value = value
  },
  { immediate: true },
)
</script>

<template>
  <div class="create-card">
    <ButtonIcon v-if="!isNameEditing" @click="isNameEditing = true">
      <IconPlus />
    </ButtonIcon>

    <NameInput
      v-else
      v-model="bookmarkUrl"
      placeholder="Вставьте ссылку"
      @update:name="(value) => createBookmark(value)"
    />
  </div>
</template>

<style scoped>
.create-card {
  display: grid;
  place-items: center;
  border-radius: 30px;
  border: 1px dashed;
}
</style>
