<template>
  <div id="modal-bg" class="flex items-center justify-center w-[100vw]">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">Add New Task</h2>
      <form id="task-form">
        <div class="mb-4">
          <label for="task-input" class="block text-sm font-medium text-gray-700">Task</label>
          <input id="task-input" v-model="title" type="text" class="w-full p-2 border rounded" placeholder="New task">
        </div>
        <div class="mb-4">
          <label for="notes-input" class="block text-sm font-medium text-gray-700">Notes</label>
          <textarea id="notes-input" v-model="notes" class="w-full p-2 border rounded" placeholder="Notes"/>
        </div>
        <div class="flex justify-end space-x-2">
          <button id="cancel-button" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" @click="closeModal">Cancel</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" @click.prevent="submitHandler">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '../store/ModalStore';
import { useTaskStore } from '../store/TaskStore';
import { toRefs } from 'vue'

const modalStore = useModalStore()
const { closeModal} = modalStore

const { addTask, task } = useTaskStore()
const { title, notes } = toRefs(task)

const submitHandler = () => {
  task.title = title.value
  task.notes = notes.value
  addTask(task)
  closeModal()
}
</script>