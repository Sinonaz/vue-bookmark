import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProfileInterface } from '@/interfaces/profile.interface'
import { API_ROUTES, http } from '@/api'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<ProfileInterface>()

  async function fetchProfile() {
    const { data } = await http().get<ProfileInterface>(API_ROUTES.profile)

    profile.value = data
  }

  return { profile, fetchProfile }
})
