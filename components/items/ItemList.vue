<template>
  <div>
    <ul class="space-y-3 mt-3">
      <Item v-for="item in displayTasks" :key="item.id" :item="item"/>
    </ul>
    <UPagination v-if="taskStore.taskList.length" v-model="currentPage" class="mt-5" :page-count="5" :total="taskStore.taskList.length" />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '../../store/TaskStore';

const taskStore = useTaskStore()
const currentPage = ref(1)
const itemsPerPage = 7

const displayTasks = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return Array.isArray(taskStore.taskList) ? taskStore.taskList.slice(startIndex, endIndex) : []
})
</script>