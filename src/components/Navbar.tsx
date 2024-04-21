import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    return (
        <nav className='bg-blue-800  mb-2'>
            <ul className='flex py-3 gap-5'>
                <li>
                    <Link href={'/login'}>Login</Link>
                </li>
                <li>
                    <Link href={'/signup'}>Signup</Link>
                </li>
                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar