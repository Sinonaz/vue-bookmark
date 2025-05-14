import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProfileInterface } from '@/interfaces/profile.interface.ts'
import { API_ROUTES } from '@/api.ts'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<ProfileInterface>()

  async function fetchProfile() {
    const data = await fetch(API_ROUTES.profile)
    const res = await data.json()

    profile.value = res
  }

  return { profile, fetchProfile }
})
