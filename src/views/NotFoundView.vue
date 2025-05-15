<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectToMain() {
  router.push({ name: 'auth' })
}
</script>

<template>
  <main>
    <h1>404</h1>

    <AppButton @click="redirectToMain">На главную</AppButton>
  </main>
</template>

<style scoped>
h1 {
  margin: 0 0 40px;
  font-weight: 700;
  font-size: 128px;
}

main {
  display: grid;
  place-items: center;
}
</style>
