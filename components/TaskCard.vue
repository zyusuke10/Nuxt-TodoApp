<template>
    <div class="bg-white shadow-md rounded-lg p-6 w-[90vw] md:w-[100vw] max-w-lg">
        <h1 class="text-lg md:text-2xl font-bold mb-4">To-Do List Application</h1>
        <Alert v-if="alertStore.showAlert" />
        <TaskCreateButton />
        <ItemList/>
    </div>
</template>

<script setup lang="ts">
import { useAlertStore } from '../store/AlertStore'
const alertStore = useAlertStore()

</script>