
import { defineStore } from "pinia"
import { useTaskStore } from "./TaskStore";


export const useModalStore = defineStore('modal', () => {
    const isOpen = ref(false);
    const { clearTask } = useTaskStore()
  
    function openModal() {
      isOpen.value = true;
    }
  
    function closeModal() {
      isOpen.value = false;
      clearTask()
    }
  
    return { isOpen, openModal, closeModal };
  });
