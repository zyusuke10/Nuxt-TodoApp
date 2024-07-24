<template>
  <li class="flex items-center justify-between p-3 bg-gray-50 rounded">
      <div class="flex flex-col truncate w-1/2">
          <span class="font-bold">{{ task.title }}</span>
          <p class="text-sm">{{ task.notes }}</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="w-[70px] rounded p-2 text-white bg-green-600 hover:text-green-700 mr-2">Edit</button>
        <button class="w-[70px] rounded p-2 text-white bg-red-500 hover:text-red-700">Delete</button>
      </div>
    </li>
</template>

<script setup lang="ts">
import type { Task } from '../../store/Types'

const props = defineProps<{
  task: Task
}>()
</script>