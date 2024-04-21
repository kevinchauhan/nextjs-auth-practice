'use client'
import { ThemeContext } from '@/lib/context/Provider'
import { Context } from '@/types'
import Link from 'next/link'
import React, { useContext } from 'react'

const Navbar = () => {
    const { auth } = useContext(ThemeContext) as Context
    console.log(auth)
    return (
        <nav className='bg-blue-800  mb-2'>
            <ul className='flex py-3 gap-5'>

                {auth ? <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                    :
                    <>
                        <li>
                            <Link href={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link href={'/signup'}>Signup</Link>
                        </li>
                    </>
                }
            </ul>
        </nav >
    )
}

export default Navbar