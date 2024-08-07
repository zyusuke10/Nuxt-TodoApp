export type Task = {
    id: string,
    title: string,
    notes: string
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