<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>()
</script>

<template>
  <button :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-fg);
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.2);
}
</style>
