<script setup lang="ts">
const data = defineModel<string>()
</script>

<template>
  <input class="input" v-model="data" />
</template>

<style scoped>
.input {
  padding: 2px;
  border: none;
  border-bottom: 2px solid #1c1c1c66;
  outline: none;
  color: #1c1c1c66;
  font-size: 24px;
  font-family: var(--font), serif;
}
</style>
