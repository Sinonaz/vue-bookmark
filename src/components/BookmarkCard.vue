<script setup lang="ts">
import IconTrash from '@/components/icons/IconTrash.vue'
import IconLink from '@/components/icons/IconLink.vue'
import type { BookmarkInterface } from '@/interfaces/bookmark.interface'
import { useBookmarksStore } from '@/stores/bookmarks.store.ts'

const { title, image, url, id, category_id } = defineProps<BookmarkInterface>()

const bookmarkStore = useBookmarksStore()

function openLink() {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="bookmark">
    <img :src="image" alt="" width="275" height="162" class="bookmark__img" />
    <p class="bookmark__text">{{ title }}</p>

    <div class="bookmark__footer">
      <button
        class="bookmark__btn"
        type="button"
        @click="bookmarkStore.deleteBookmark(id, category_id)"
      >
        <IconTrash />
      </button>
      <button class="bookmark__btn" type="button" @click="openLink">
        <IconLink />
      </button>
    </div>
  </div>
</template>

<style scoped>
.bookmark {
  display: grid;
  gap: 24px;
  padding: 20px;
  border-radius: 30px;
  background: black;
}

.bookmark__footer {
  display: flex;
  justify-content: space-between;
}

.bookmark__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 50%;
  box-shadow: inset 0 0 0 3px white;
  cursor: pointer;
}

.bookmark__text {
  margin: 0;
  font-size: 16px;
  color: white;
}

.bookmark__img {
  height: 162px;
  object-fit: cover;
  border-radius: 20px;
}
</style>
