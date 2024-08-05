import { defineStore } from "pinia"

export const useCommonStore = defineStore("CommonStore", () => {
    const isEdit = ref(false)
    const taskEditId = ref<string | null>(null);
    const isLoading = ref(false)

    const setIsEdit = () => {
        isEdit.value = true
    }

    const clearIsEdit = () => {
        isEdit.value = false
    }

    const setIsLoading = () => {
        isLoading.value = true
    }

    const clearIsLoading = () => {
        isLoading.value = false
    }

    return { isEdit, taskEditId, isLoading, setIsEdit, clearIsEdit,  setIsLoading, clearIsLoading };
});
