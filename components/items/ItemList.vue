<template>
  <div>
    <div v-if="taskStore.taskList.length" class="flex items-center space-x-3 mt-7">
      <input v-model="filterDate" type="date" class="border p-2 rounded" >
    </div>
    <ul class="space-y-3 mt-3">
      <Item v-for="item in displayTasks" :key="item.id" :item="item" @update-completed="updateTaskCompletion"/>
    </ul>
    <div class="flex  justify-between items-center">
      <UPagination v-if="taskStore.taskList.length" v-model="currentPage" class="mt-5" :page-count="7" :total="taskStore.filteredTaskList.length" />
      <p v-if="taskStore.taskList.length" class="text-right mt-5"><router-link to="/completed" class="text-blue-600">Check completed tasks here</router-link></p>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '../../store/Types'
import { useTaskStore } from '../../store/TaskStore'

const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

const taskStore = useTaskStore()
const currentPage = ref(1)
const filterDate = ref<string>(getTodayDate())
const itemsPerPage = 7

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

const updateTaskCompletion = (id: string, isCompleted: boolean) => {
  const task = taskStore.getTaskById(id)
  if (task) {
    task.isCompleted = isCompleted
  } else {
    console.log('Couldnt find a task')
  }
}

watch(filterDate, filterTasks)
watch(() => taskStore.taskList, filterTasks, { immediate: true })
</script>
