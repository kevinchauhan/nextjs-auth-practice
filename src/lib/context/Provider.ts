'use client'

import { Context } from '@/types'
import { createContext } from 'react'


export const ThemeContext = createContext<Context | {}>({})
