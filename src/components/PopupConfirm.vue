<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'

const { isOpened = false, text } = defineProps<{ isOpened: boolean; text: string }>()

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <Transition name="fade">
    <Teleport to="body">
      <div class="popup" v-if="isOpened">
        <div class="popup__wrapper">
          {{ text }}

          <div class="popup__footer">
            <AppButton @click="emit('confirm')">Да</AppButton>
            <AppButton @click="emit('cancel')">Нет</AppButton>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style scoped>
.popup {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.2s;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }
}

.popup__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  background: white;
  border-radius: 30px;
  padding: 20px;
}

.popup__footer {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
