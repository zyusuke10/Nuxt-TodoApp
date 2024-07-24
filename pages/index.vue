<template>
    <div v-if="isOpen">
        <TaskModal/>
    </div>
    <div v-else>
        <TaskCard/>
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from '../store/ModalStore'
import { computed } from 'vue'

const modalStore = useModalStore()
const isOpen = computed(() =>modalStore.isOpen)
</script>