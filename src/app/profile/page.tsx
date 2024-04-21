'use client'
import { login } from '@/lib/store/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Profile = () => {
    const router = useRouter()
    const [data, setData] = useState('')
    const auth = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/users/me')
            console.log(data)
            setData(data._id)
            dispatch(login(data))
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const logout = async () => {
        try {
            const { data } = await axios.get('/api/users/logout')
            toast.success('Logged out...')
            router.push('/login')
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
    }
    return (
        <div>
            <h1>Profile Page</h1>
            <h2>{data}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile