<template>
    <div class="bg-white shadow-md rounded-lg p-6 w-[90vw] md:w-[100vw] max-w-lg">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-lg md:text-2xl font-bold">To-Do List Application</h1>
            <button class="px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200" @click="clickHandler">
                Logout
            </button>
        </div>
        <Alert v-if="alertStore.showAlert" />
        <TaskCreateButton />
        <ItemList/>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/AuthStore';
import { useAlertStore } from '../store/AlertStore'
const alertStore = useAlertStore()
const auth = useAuthStore()

const clickHandler = () => {
    auth.isUser = false
    return navigateTo('/login')
}

</script>