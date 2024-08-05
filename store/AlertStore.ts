import { ALERT_LABELS } from '../constants/constants.js'

export const useAlertStore = defineStore("AlertStore", () => {
    const isError= ref(false)
    const isSuccess= ref(false)
    const alertMsg = ref('')
    const showAlert = ref(false)


    const setAlert = (type:string, msg:string) => {
        showAlert.value = true
        switch(type) {
            case ALERT_LABELS.error:
                isError.value = true
                alertMsg.value = msg
                break
            case ALERT_LABELS.success:
                isSuccess.value = true
                alertMsg.value = msg
                break
        }
        setTimeout(() => {
            clearAlert()
        },2000)
    }

    const clearAlert = () => {
        isError.value = false
        isSuccess.value = false
        showAlert.value = false
    }

    return { showAlert, isError, isSuccess, alertMsg, setAlert, clearAlert }
})