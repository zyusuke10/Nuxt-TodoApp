<template>
    <div class="bg-white shadow-md rounded-lg p-6 w-[90vw] md:w-[100vw] max-w-lg">
      <h1 class="text-2xl font-bold mb-4">Completed Tasks</h1>
      <div v-if="taskStore.taskList.length" class="flex items-center space-x-3 mt-7 mb-3">
        <input v-model="filterDate" type="date" class="border p-2 rounded" >
      </div>
      <ul v-if="completedTasks.length">
        <li v-for="task in completedTasks" :key="task.id" class="flex items-center justify-between p-3 bg-gray-50 rounded mb-2">
            <div class="flex flex-col">
                <span class="font-semibold">{{ task.title }}</span>
                <span class="text-gray-600">{{ task.notes }}</span>
            </div>
        </li>
      </ul>
      <p v-else class="text-gray-500">No completed tasks found.</p>
      <div class="flex justify-between items-center">
        <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" @click="goBack">
          Go Back
       </button>
        <UPagination v-if="taskStore.taskList.length" v-model="currentPage" class="mt-5" :page-count="7" :total="taskStore.filteredTaskList.length" />
      </div>
    </div>
  </template>

<script setup lang="ts">
import { useTaskStore } from '../store/TaskStore';
import type { Task } from '../store/Types'

const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
} 

const router = useRouter()
const taskStore = useTaskStore()
const currentPage = ref(1)
const itemsPerPage = 7
const filterDate = ref<string>(getTodayDate())

const completedTasks = computed(() => displayTasks.value.filter((task: Task) => task.isCompleted))

const goBack = () => {
      router.back();
    };

const displayTasks = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return taskStore.filteredTaskList.slice(startIndex, endIndex)
})

const filterTasks = () => {
  if (filterDate.value) {
    const [year, month, day] = filterDate.value.toString().split('-').map(Number)
    taskStore.filteredTaskList = taskStore.taskList.filter((task: Task) => {
      const taskDate = new Date(task.created_at)
      const taskYear = taskDate.getFullYear()
      const taskMonth = taskDate.getMonth() + 1
      const taskDayOfMonth = taskDate.getDate()
      return taskYear === year && taskMonth === month && taskDayOfMonth === day
    })
  } else {
    taskStore.filteredTaskList = taskStore.taskList
  }
}

watch(filterDate, filterTasks)
watch(() => taskStore.taskList, filterTasks, { immediate: true })

</script>