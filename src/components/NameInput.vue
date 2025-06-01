<script setup lang="ts">
import ActionBtn from '@/components/ActionBtn.vue'
import IconSuccess from '@/components/icons/IconSuccess.vue'
import { computed } from 'vue'

const value = defineModel<string>()
const { placeholder } = defineProps<{ placeholder?: string }>()
const emit = defineEmits(['update:name'])

const error = computed(() => !value.value?.length)

function onChangeName() {
  if (error.value) return

  emit('update:name', value.value)
}
</script>

<template>
  <div class="name-input">
    <input
      type="text"
      v-model="value"
      :placeholder
      :style="{ borderColor: error ? 'red' : 'var(--color-fg)' }"
    />

    <ActionBtn @click="onChangeName">
      <IconSuccess />
    </ActionBtn>
  </div>
</template>

<style scoped>
.name-input {
  display: flex;
  align-items: center;
  gap: 10px;

  & input {
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid var(--color-fg);
    outline: none;
    font-family: var(--font), serif;
    font-size: inherit;
  }
}
</style>
