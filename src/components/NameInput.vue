<script setup lang="ts">
import ActionBtn from '@/components/ActionBtn.vue'
import IconSuccess from '@/components/icons/IconSuccess.vue'
import { computed, onMounted, ref, useTemplateRef } from 'vue'

const value = defineModel<string>()
const { placeholder, isFocused = false } = defineProps<{
  placeholder?: string
  isFocused?: boolean
}>()
const emit = defineEmits(['update:name'])

const showError = ref<boolean>(false)
const input = useTemplateRef<HTMLInputElement>('input')

const error = computed(() => !value.value?.length)

function onChangeName() {
  if (error.value) {
    showError.value = true

    return
  }

  emit('update:name', value.value)
}

onMounted(() => {
  if (!isFocused || !input.value) return

  input.value.focus()
})
</script>

<template>
  <div class="name-input">
    <input
      type="text"
      v-model="value"
      :placeholder
      :style="{ borderColor: showError && error ? 'red' : 'var(--color-fg)' }"
      ref="input"
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
