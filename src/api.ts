import axios from 'axios'
import { useAuthStore } from '@/stores/auth.store.ts'

export const API_BASE = 'http://localhost:3000/api'
export const API_ROUTES = {
  profile: '/profile',
  categories: '/categories',
  updateCategory: (id: number) => `/categories/${id}`,
  bookmarks: (id: number) => `/categories/${id}/bookmarks`,
  auth: {
    login: '/auth/login',
    profile: '/auth/profile',
  },
}

export function http() {
  const authStore = useAuthStore()

  return axios.create({
    baseURL: API_BASE,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  })
}
