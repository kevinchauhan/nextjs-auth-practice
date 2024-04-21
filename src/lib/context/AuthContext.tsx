'use client'

import { useEffect, useState } from 'react'
import { ThemeContext } from './Provider'
import { Context } from '@/types'


const getData = async () => {
    try {
        const res = await fetch('/api/users/me', {
            credentials: 'include'
        })
        if (res.ok) {
            return await res.json()
        }
        return null
    } catch (error) {
        console.log('error', error)
    }

}


export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState('light')
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        getData().then(res => {
            console.log('auth context====>', res)
            return setAuth(res)
        })
    }, [])

    return <ThemeContext.Provider value={{ theme, setTheme, auth, setAuth }}>{children}</ThemeContext.Provider>
}