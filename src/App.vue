<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import { API_ROUTES } from '@/api.ts'
import type { Profile } from '@/interfaces/profile.ts'
import { onMounted, ref } from 'vue'

const profile = ref<Profile>()

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile)
  const res = await data.json()

  profile.value = res
}

onMounted(() => {
  fetchProfile()
})
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar v-if="profile" :name="profile.name" />
    </nav>
    <main class="main">Content</main>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 100px;
  padding: 140px 120px;
}

.main {
  justify-self: end;
  width: 100%;
  max-width: 1024px;
}
</style>
