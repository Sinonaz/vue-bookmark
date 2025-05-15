<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectToMain() {
  router.push({ name: 'main' })
}
</script>

<template>
  <main>
    <h1>Bookmarkly</h1>

    <AppButton @click="redirectToMain">Вход</AppButton>
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
</style>
