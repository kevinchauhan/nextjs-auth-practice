import { Book } from '@/types'
import Image from 'next/image'
import React from 'react'

const BookList = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/api/products`, {
        cache: 'no-store'
    })
    if (!response.ok) {
        throw new Error('An error occurred while fetching the books')
    }

    const books: Book[] = await response.json()
    return (
        <div>
            {
                books.map((item) =>
                    <div key={item._id}>
                        <h1 className='text-white'>{item.name}</h1>
                        <Image src={item.image} width={150} height={100} alt='this is image' />
                    </div>
                )
            }
        </div>
    )
}

export default BookList