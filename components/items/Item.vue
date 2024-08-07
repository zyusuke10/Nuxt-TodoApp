<template>
  <li class="flex items-center justify-between p-3 bg-gray-50 rounded">
  <div class="flex flex-col flex-1 min-w-0">
    <span class="font-bold">{{ item.title }}</span>
    <p class="text-sm truncate">{{ item.notes }}</p>
  </div>
  <div class="flex items-center gap-2">
    <button class="w-[60px] md:w-[70px] text-sm md:text-base rounded p-2 text-white bg-green-600 hover:text-green-700 mr-1" @click="handleUpdate(item.id)">Edit</button>
    <button class="w-[60px] md:w-[70px] text-sm md:text-base rounded p-2 text-white bg-red-500 hover:text-red-700" @click="handleDelete(item.id)">Delete</button>
  </div>
</li>
</template>

<script setup lang="ts">
import { useTaskStore } from '~/store/TaskStore';
import type { Task } from '../../store/Types'
import { useCommonStore } from '../../store/CommonStore';
import { useModalStore } from '../../store/ModalStore';
import { useAlertStore } from '../../store/AlertStore';

defineProps<{
  item: Task
}>()
const { deleteTask, getTaskById, task } = useTaskStore()
const { clearAlert } = useAlertStore()

//stores 

const { openModal }= useModalStore()
const commonStore = useCommonStore()


//methods
const handleUpdate = (id: string) => {
  clearAlert()
  commonStore.isEdit = true
  commonStore.taskEditId = id
  const currentTask = getTaskById(id)
  if (currentTask) {
    task.title = currentTask.title
    task.notes = currentTask.notes
  }
  openModal()
}

const handleDelete = (id:string) => {
  clearAlert()
  deleteTask(id)
}
</script>