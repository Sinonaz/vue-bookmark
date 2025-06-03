import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { BookmarkInterface } from '@/interfaces/bookmark.interface'
import { API_ROUTES, http } from '@/api'

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<BookmarkInterface[]>([])

  async function fetchBookmarks(categoryId: number, sort: string = 'date') {
    const { data } = await http().get<BookmarkInterface[]>(API_ROUTES.bookmarks(categoryId), {
      params: {
        sort,
      },
    })

    bookmarks.value = data
  }

  async function deleteBookmark(id: number, categoryId: number) {
    await http().delete(API_ROUTES.deleteBookmarks(id))
    await fetchBookmarks(categoryId)
  }

  return { bookmarks, fetchBookmarks, deleteBookmark }
})
