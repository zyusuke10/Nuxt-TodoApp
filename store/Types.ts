export type Task = {
    id: string,
    title: string,
    notes: string,
    isCompleted: boolean,
    created_at: Date
}

export type User = {
    id: string,
    name: string,
    password: string,
    joined: Date
}

export type LoginParams = {
    username: string,
    password: string
}