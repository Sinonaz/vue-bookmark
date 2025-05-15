<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue'
import CategoryList from '@/components/CategoryList.vue'
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />

      <CategoryList />
    </nav>

    <main class="main">
      <RouterView />
    </main>
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
