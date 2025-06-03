<script setup lang="ts">
const { sortType } = defineProps<{ sortType: string }>()
const emit = defineEmits<{
  (e: 'update:sort', type: string): void
}>()

const sortList = [
  {
    key: 'date',
    value: 'По дате',
  },
  {
    key: 'title',
    value: 'По названию',
  },
]
</script>

<template>
  <div class="sort">
    <button
      v-for="item in sortList"
      :key="item.key"
      :class="{ active: item.key === sortType }"
      @click="() => emit('update:sort', item.key)"
    >
      {{ item.value }}
    </button>
  </div>
</template>

<style scoped>
button {
  padding: 0;
  background: none;
  font-weight: 400;
  font-size: 16px;
  font-family: var(--font), serif;
  border: none;
  color: #1c1c1c66;
  border-bottom: 1px solid transparent;
  cursor: pointer;

  &.active {
    color: black;
    font-weight: 700;
    border-color: currentColor;
  }
}

.sort {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
