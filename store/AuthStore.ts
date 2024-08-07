import type { LoginParams, User } from "./Types"


export const useAuthStore = defineStore('AuthStore', () => {
    const isUser = ref(false)
    const userInfo = ref<User>({
        id: '',
        name: '',
        password: '',
        joined: new Date()
    })

    const login = ({ username, password }: LoginParams) => {
        isUser.value = true
        console.log(username, password)
        return navigateTo('/')
    }

    const register = ({ username, password }: LoginParams) => {
        console.log(username, password)
        return navigateTo('/login')
    }   

    const logout = () => {
        isUser.value = false
        return navigateTo('login')
    }

    return { isUser, userInfo, login, logout, register }
})