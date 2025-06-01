<script setup lang="ts"></script>

<template>
  <button class="action-btn">
    <slot />
  </button>
</template>

<style scoped>
.action-btn {
  background: #000;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
}
</style>
