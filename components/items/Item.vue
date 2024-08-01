<template>
  <li class="flex items-center justify-between p-3 bg-gray-50 rounded">
      <div class="flex flex-col truncate">
          <span class="font-bold">{{ item.title }}</span>
          <p class="text-sm">{{ item.notes }}</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="w-[70px] rounded p-2 text-white bg-green-600 hover:text-green-700 mr-2" @click="handleUpdate(item.id)">Edit</button>
        <button class="w-[70px] rounded p-2 text-white bg-red-500 hover:text-red-700" @click="handleDelete(item.id)">Delete</button>
      </div>
    </li>
</template>

<script setup lang="ts">
import { useTaskStore } from '~/store/TaskStore';
import type { Task } from '../../store/Types'
import { useCommonStore } from '../../store/CommonStore';
import { useModalStore } from '../../store/ModalStore';

defineProps<{
  item: Task
}>()


//stores 
const { deleteTask, getTaskById, task } = useTaskStore()
const { openModal }= useModalStore()
const commonStore = useCommonStore()


//methods
const handleUpdate = (id: string) => {
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
  deleteTask(id)
}
</script>