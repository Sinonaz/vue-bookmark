<script setup lang="ts">
</script>

<template>
  <div class="app">
    <nav class="nav">Menu</nav>
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
