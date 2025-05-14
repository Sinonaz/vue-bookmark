<script setup lang="ts">
const { name } = defineProps<{ name: string }>()
</script>

<template>
  <div class="avatar">
    <img
      class="avatar__img"
      src="https://placehold.co/80"
      width="80"
      height="80"
      alt="Аватар пользователя"
    />

    <p class="avatar__text">
      Привет, <b>{{ name }}!</b>
    </p>
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
