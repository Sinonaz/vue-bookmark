import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { BookmarkInterface } from '@/interfaces/bookmark.interface'
import { API_ROUTES, http } from '@/api'

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<BookmarkInterface[]>([])

  async function fetchBookmarks(categoryId: number) {
    const { data } = await http.get<BookmarkInterface[]>(API_ROUTES.bookmarks(categoryId))

    bookmarks.value = data
  }

  return { bookmarks, fetchBookmarks }
})
