import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';
import type { Task } from "./Types";

export const useTaskStore = defineStore("TaskStore", () => {
    
    const taskList = ref<Task[]>([]);

    const task = ref<Task>({
        id: uuidv4(),
        title: '',
        notes: ''
    });

    function getTaskById(taskId: string | null): Task | undefined {
        if (!taskId) {
            console.log('id is null')
            return
        }
        return taskList.value.find((task) => task.id === taskId);
    }

    function clearTask(): void { 
        task.value = {
            id: uuidv4(),
            title: '',
            notes: ''
        };
    }

    function addTask(newTask: Task): void {
        if (newTask.title.trim() === '') {
            console.log('Plese provide a title')
            return
        }

        taskList.value.push({
            ...newTask
        });

        clearTask();
    }

 
    function deleteTask(taskId: string | null): void {
        if (!taskId) {
            console.log('id is null')
            return
        }
        taskList.value = taskList.value.filter((task) => task.id !== taskId);
    }


    function updateTask(taskId: string | null, title: string, notes: string): void {
        if (!taskId) {
            console.log('id is null')
            return
        }
        const currentTask = getTaskById(taskId);
        if (!currentTask) return;

        currentTask.title = title;
        currentTask.notes = notes;
    }   

    return { task, taskList, addTask, deleteTask, updateTask, getTaskById, clearTask };
});
