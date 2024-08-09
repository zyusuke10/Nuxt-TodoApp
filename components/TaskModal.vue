<template>
  <div id="modal-bg" class="flex items-center justify-center  w-[90vw] md:w-[100vw]">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 class="text-lg md:text-2xl font-bold mb-4">{{ isEdit ? constants.TITLE.EDIT : constants.TITLE.ADD }}</h2>
      <Alert v-if="alertStore.showAlert" />
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
          <button id="cancel-button" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" @click.prevent="handleCancel">Cancel</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" @click.prevent="submitHandler">{{ isEdit ? 'Update' : 'Add' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/CommonStore'
import { useModalStore } from '../store/ModalStore'
import { useTaskStore } from '../store/TaskStore'
import { useAlertStore } from '../store/AlertStore'
import type { Task } from '../store/Types';


//Stores
const { closeModal } = useModalStore()
const { addTask, task, updateTask, clearTask } = useTaskStore()
const {isEdit, clearIsEdit, taskEditId} = useCommonStore()
const { title, notes } = toRefs(task)
const alertStore = useAlertStore()


//Methods
const submitHandler = () => {
  task.title = title.value;
  task.notes = notes.value;
  if (isEdit) {
    handleUpdate(taskEditId,task.title, task.notes)
  } else {
    handleAdd(task)
  }
};


const handleCancel = () => {
  closeModal()
  clearIsEdit()
};

const handleAdd = (task: Task) => {
  const statusCode = addTask(task)
  if ( statusCode === '200' ) {
    closeModal()
  }
}

const handleUpdate = (id: string | null, title: string, notes: string): void => {
  if (id) {
    const statusCode = updateTask(id, title, notes);
    if (statusCode === '200') {
      closeModal()
    }
  }
  clearIsEdit();
  clearTask();
};


//Constants
const constants = {
  TITLE: {
    ADD: 'Add new task',
    EDIT: 'Edit task'
  }
};
</script>
