import { defineStore } from "pinia"
import { v4 as uuidv4 } from 'uuid'
import type { Task } from "./Types";

export const useTaskStore = defineStore("TaskStore", () => {
    
    const taskList = ref<Task[]>([])

    const task = ref<Task>({
        id: uuidv4(),
        title: '',
        notes: ''
    });

    function addTask(newTask: Task) {
        if (!task.value.title) return 
        task.value.title = newTask.title;
        if (newTask.notes !== '') {
            task.value.notes = newTask.notes;
        }
        taskList.value.push(newTask)
        task.value = {
            id: uuidv4(),
            title: '',
            notes: ''
          }
    }

    return { task, taskList, addTask };
});
