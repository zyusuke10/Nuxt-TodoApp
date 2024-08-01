import { defineStore } from "pinia"
import { ref } from 'vue'

export const useCommonStore = defineStore("CommonStore", () => {
    const isEdit = ref(false)
    const taskEditId = ref<string | null>(null);

    const setIsEdit = () => {
        isEdit.value = true
    }

    const resetIsEdit = () => {
        isEdit.value = false
    }

    return { isEdit, taskEditId, setIsEdit, resetIsEdit };
});
