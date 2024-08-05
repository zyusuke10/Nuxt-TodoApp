<template>
    <div class="mt-4 flex justify-center items-center gap-2">
        <button class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" @click="clickHandler">Create a task</button>
    </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "../store/AlertStore";
import { useModalStore } from "../store/ModalStore"


const { openModal } = useModalStore()
const { clearAlert } = useAlertStore()

const clickHandler = () => {
    openModal()
    clearAlert()
}
</script>