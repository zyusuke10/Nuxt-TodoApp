

export const useAuthStore = defineStore('AuthStore', () => {
    const isUser = ref(false)
    const username = ref<string>('')
    const password = ref<string>('')

    const login = () => {
        isUser.value = true
        return navigateTo('/')
    }

    const register = () => {

    }   

    const logout = () => {
        isUser.value = false
        return navigateTo('login')
    }

    return { isUser, username, password, login, logout, register }
})