import { defineStore } from "pinia"
import { v4 as uuidv4 } from 'uuid'
import type { Task } from "./Types"
import { useCommonStore } from "./CommonStore"
import { useAlertStore } from "./AlertStore"

export const useTaskStore = defineStore("TaskStore", () => {
    
    const taskList = ref<Task[]>([]);
    const filteredTaskList = ref<Task[]>([])

    const task = ref<Task>({
        id: uuidv4(),
        title: '',
        notes: '',
        isCompleted: false,
        created_at: new Date()
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
            notes: '',
            isCompleted: false,
            created_at: new Date()
        };
    }

    function addTask(newTask: Task): string {
        const { setIsLoading, clearIsLoading } = useCommonStore()
        const { setAlert } = useAlertStore()
        try {
            setIsLoading()
            if (newTask.title.trim() === '') {
                throw new Error('Must provide a title')
            }
            taskList.value.push({
                ...newTask
            });
            setAlert('success', 'Successfully added a task')
        } catch (error) {
            if (error instanceof Error && error.message) {
                setAlert('error', error.message)
                return '400'
            } else {
                setAlert('error', 'Failed to add a task')
                return '500'
            }
        } finally {
            clearTask();
            clearIsLoading()
        }
        return '200'
    }

 
    function deleteTask(taskId: string | null): void {
        const { setAlert } = useAlertStore()
        const { setIsLoading, clearIsLoading } = useCommonStore()

        try {
            setIsLoading()
            if (!taskId) {
                console.log('id is null')
                return
            }
            taskList.value = taskList.value.filter((task) => task.id !== taskId);
            setAlert('success', 'Successfully deleted a task')
        } catch (error) {
            setAlert('error', 'Failed to delete a task')
            console.log(error)
        } finally {
            clearIsLoading()
        }
    }


    function updateTask(taskId: string | null, title: string, notes: string): string {
        const { setAlert } = useAlertStore()
        const { setIsLoading, clearIsLoading } = useCommonStore()

        if (!taskId) {
            console.log('id is null')
            return '404'
        }

        try {
            setIsLoading()
            const currentTask = getTaskById(taskId)
            if (!currentTask) return '404'
            currentTask.title = title
            if (currentTask.title.trim() ==='') throw new Error('Must provide a title')
            currentTask.notes = notes
            setAlert('success', 'Successfully updated the task')
        } catch (error) {
            if (error instanceof Error) setAlert('error', error.message)
                return '400'
        } finally {
            clearIsLoading()
        }

        return '200'
    }   

    return { task, taskList, filteredTaskList, addTask, deleteTask, updateTask, getTaskById, clearTask };
});
