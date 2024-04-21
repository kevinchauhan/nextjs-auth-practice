import { dbConnection } from '@/dbConfig/dbConfig'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const response = NextResponse.json({
            message: 'Logout success',
        })

        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0)
        })

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}