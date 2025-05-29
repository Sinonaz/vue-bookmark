<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useRouter } from 'vue-router'

const form = ref<{ email?: string; password?: string }>({})
const authStore = useAuthStore()

const router = useRouter()

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' })
    }
  },
)

function onSubmit() {
  if (!form.value.email || !form.value.password) return

  authStore.login(form.value.email, form.value.password)

  form.value = {}
}
</script>

<template>
  <main>
    <h1>Bookmarkly</h1>

    <form @submit.prevent="onSubmit">
      <AppInput v-model="form.email" placeholder="Email" type="email" />
      <AppInput v-model="form.password" placeholder="Password" type="password" />

      <AppButton class="btn" type="submit">Вход</AppButton>
    </form>
  </main>
</template>

<style scoped>
h1 {
  margin: 0 0 52px;
  font-weight: 700;
  font-size: 52px;
}

main {
  display: grid;
  place-items: center;
}

.btn {
  margin-top: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
