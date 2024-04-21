export interface Book {
    _id: string
    name: string
    image: string
    price: number
    size: string
}

export interface Context {
    theme: string
    setTheme: (theme: string) => void
    auth: string | null
    setAuth: (auth: string | null) => void
}