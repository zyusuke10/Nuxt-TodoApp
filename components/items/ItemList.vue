<template>
    <ul class="space-y-3 mt-3">
      <Item v-for="task in taskList" :key="task.id" :task="task"/>
    </ul>
</template>

<script setup lang="ts">
import { useTaskStore } from '../../store/TaskStore';


const { taskList } = useTaskStore()
</script>