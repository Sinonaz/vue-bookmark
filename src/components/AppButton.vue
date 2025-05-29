<script setup lang="ts"></script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  min-width: 160px;
  padding: 12px;
  background: var(--color-fg);
  font-size: 18px;
  font-family: var(--font);
  color: white;
  border-radius: 40px;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>
