import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserData {
    _id: string
    username: string
    email: string
    isVerified: boolean
    isAdmin: boolean
}

const initialState: null | UserData = null


export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initialState,
    reducers: {
        login: (state, action) => action.payload,
        logout: (state, action) => null
    },
})

export const { login, logout } = authSlice.actions


export default authSlice.reducer