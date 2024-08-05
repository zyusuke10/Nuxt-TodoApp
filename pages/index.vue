<template>
    <div>
      <TaskModal v-if="isOpen" />
      <TaskCard v-else />
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from '../store/ModalStore'

const modalStore = useModalStore()
const isOpen = computed(() =>modalStore.isOpen)
</script>