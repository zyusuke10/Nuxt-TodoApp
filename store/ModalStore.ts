
import { defineStore } from "pinia"


export const useModalStore = defineStore('modal', () => {
    const isOpen = ref(false);
  
    function openModal() {
      isOpen.value = true;
    }
  
    function closeModal() {
      isOpen.value = false;
    }
  
    return { isOpen, openModal, closeModal };
  });
