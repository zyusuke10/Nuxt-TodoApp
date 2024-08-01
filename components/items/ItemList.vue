<template>
    <ul class="space-y-3 mt-3">
      <Item v-for="item in taskList" :key="item.id" :item="item"/>
    </ul>
</template>

<script setup lang="ts">
import { useTaskStore } from '../../store/TaskStore';

const taskStore = useTaskStore()
const taskList = computed(() => taskStore.taskList);
</script>