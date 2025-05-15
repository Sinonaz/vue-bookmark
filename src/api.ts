import axios from 'axios'

export const API_BASE = 'http://localhost:3000/api'
export const API_ROUTES = {
  profile: '/profile',
  categories: '/categories',
  bookmarks: (id: number) => `/categories/${id}/bookmarks`,
}

export const http = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
})
