<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useRouter } from 'vue-router'

const store = useProfileStore()
const authStore = useAuthStore()

const router = useRouter()

function logout() {
  authStore.clearToken()
  router.push({ name: 'auth' })
}

onMounted(() => {
  store.fetchProfile()
})
</script>

<template>
  <div v-if="store.profile" class="avatar">
    <img
      class="avatar__img"
      src="https://placehold.co/80"
      width="80"
      height="80"
      alt="Аватар пользователя"
    />

    <p class="avatar__text">
      Привет, <b>{{ store.profile.name }}!</b>
    </p>

    <a href="#" @click.prevent="logout">Выйти</a>
  </div>
</template>

<style scoped>
.avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.avatar__img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.avatar__text {
  margin: 0;

  & b {
    font-weight: 700;
  }
}
</style>
